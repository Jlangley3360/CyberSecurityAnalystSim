import test from 'node:test';
import assert from 'node:assert/strict';
import { cases, categories } from '../src/cases.js';
import { trainingPack } from '../src/training-pack.js';
import { freshCase, closeCase, grade } from '../src/engine.js';
import { normalizeCase, makeBackup, readBackup } from '../src/persistence.js';

test('library adds exactly 100 unique investigations across ten topics and three difficulties', () => {
  assert.equal(trainingPack.length, 100); assert.equal(cases.length, 105);
  assert.equal(new Set(cases.map(c => c.id)).size, 105);
  assert.equal(new Set(cases.map(c => c.title)).size, 105);
  assert.equal(new Set(trainingPack.map(c => c.answer.explanation)).size, 100);
  for (const topic of categories) assert.equal(trainingPack.filter(c => c.category === topic).length, 10);
  for (const difficulty of ['Beginner','Intermediate','Advanced']) assert.ok(trainingPack.some(c => c.difficulty === difficulty));
  assert.ok(trainingPack.some(c => c.answer.verdict === 'benign'));
  for (const c of cases) {
    assert.ok(categories.includes(c.category));
    assert.equal(new Set(c.answer.actions).size,c.answer.actions.length);
    assert.ok(c.description && c.answer.explanation.length > 100);
  }
});

test('backup round-trip preserves active notes and recomputes closed scores', () => {
  const [c,d] = cases;
  const active = freshCase(); active.status='active'; active.notes='Evidence <not markup>'; active.evidence=[c.evidence[0].id]; active.hints=1;
  const ready = freshCase(); ready.status='active'; ready.evidence=[...d.answer.evidence];
  ready.draft={verdict:d.answer.verdict,category:d.category,actions:[...d.answer.actions],summary:'The observations and independent verification support this outcome. Proportionate response is documented with the affected asset.'};
  const closed=closeCase(d,ready); closed.result.score=-1000;
  const backup=JSON.parse(JSON.stringify(makeBackup({[c.id]:active,[d.id]:closed})));
  const imported=readBackup(backup,cases);
  assert.equal(imported[c.id].notes,active.notes); assert.equal(imported[c.id].status,'active');
  assert.equal(imported[d.id].result.score,100);
});

test('malformed backups fail before any progress is replaced', () => {
  const c=cases[0], valid=makeBackup({[c.id]:freshCase()});
  assert.throws(()=>readBackup({...valid,version:99},cases),/version 1/);
  assert.throws(()=>readBackup(makeBackup({'SOC-UNKNOWN':freshCase()}),cases),/Unknown case/);
  assert.throws(()=>readBackup(makeBackup({[c.id]:{...freshCase(),evidence:['missing']}}),cases),/Unknown evidence/);
  assert.throws(()=>readBackup(makeBackup({[c.id]:{...freshCase(),status:'closed'}}),cases),/Choose/);
  assert.throws(()=>normalizeCase(c,{...freshCase(),hints:-1}),/Invalid/);
  assert.throws(()=>normalizeCase(c,{...freshCase(),draft:{...freshCase().draft,actions:['__proto__']}}),/Invalid/);
});

test('duplicate response actions cannot inflate the grade', () => {
  const c=cases[0];
  const draft={verdict:c.answer.verdict,category:c.category,actions:[c.answer.actions[0],c.answer.actions[0]],summary:'Short summary of findings.'};
  const result=grade(c,draft,[]);
  assert.ok(result.parts.response < 25);
});
