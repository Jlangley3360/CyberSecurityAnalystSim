import test from 'node:test';
import assert from 'node:assert/strict';
import { cases } from '../src/cases.js';
import { freshCase, grade, closeCase, actions } from '../src/engine.js';
test('every scenario supports a complete investigation and perfect response', () => {
  for (const c of cases) {
    assert.ok(c.evidence.length >= 3);
    assert.ok(c.artifacts.length && c.hints.length);
    assert.equal(new Set(c.evidence.map(e => e.id)).size, c.evidence.length);
    for (const id of c.answer.evidence) assert.ok(c.evidence.some(e => e.id === id));
    for (const action of c.answer.actions) assert.ok(actions[action]);
    const s = freshCase(); s.status='active'; s.evidence=[...c.answer.evidence];
    s.draft={verdict:c.answer.verdict, category:c.category, actions:[...c.answer.actions], summary:'Evidence supports this verdict and the selected response. The timeline and affected assets are documented for handoff.'};
    const result=closeCase(c,s);
    assert.equal(result.status,'closed'); assert.equal(result.result.score,100);
    assert.equal(s.status,'active');
  }
});
test('unclaimed alerts and incomplete conclusions cannot be closed', () => {
  const c=cases[0], s=freshCase();
  assert.throws(()=>closeCase(c,s),/Claim/);
  s.status='active'; assert.throws(()=>closeCase(c,s),/Choose/);
  s.draft={verdict:'malicious',category:'Phishing',actions:[],summary:'This is an adequately long conclusion.'};
  assert.throws(()=>closeCase(c,s),/at least one action/);
});
test('wrong verdict, irrelevant response, and missing evidence lose credit', () => {
  const c=cases[1];
  const r=grade(c,{verdict:'malicious',category:'Malware',actions:['isolate','reset'],summary:'Insufficient.'},[]);
  assert.equal(r.score,0); assert.deepEqual(r.missingActions,['monitor']); assert.equal(r.extraActions.length,2);
});
test('unsupported containment is penalized even when correct actions are present', () => {
  const c=cases[1];
  const r=grade(c,{verdict:'benign',category:c.category,actions:['monitor','isolate'],summary:'A legitimate company VPN change explains the sign-in locations. The device and employee corroborate this.'},c.answer.evidence);
  assert.equal(r.score,95); assert.deepEqual(r.extraActions,['isolate']);
});
test('new cases do not share notes or mutable selections',()=>{
  const a=freshCase(),b=freshCase(); a.evidence.push('p1'); a.draft.actions.push('block');
  assert.deepEqual(b.evidence,[]); assert.deepEqual(b.draft.actions,[]);
});
