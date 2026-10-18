import test from 'node:test';
import assert from 'node:assert/strict';
import { cases } from '../src/cases.js';
import { actions, freshCase, grade } from '../src/engine.js';
import { actionFeedback } from '../src/response-feedback.js';
import { normalizeCase } from '../src/persistence.js';

test('screenshot response earns optional guidance and overlapping revocation without penalties', () => {
  const c=cases[0];
  const r=grade(c,{verdict:'malicious',category:'Phishing',actions:['quarantine','reset','escalate','educate','revoke'],summary:'The observed session and employee report confirm credential compromise, so sessions and exposed credentials must be secured.'},[]);
  assert.deepEqual(r.missingActions,['block']); assert.deepEqual(r.extraActions,[]);
  assert.equal(r.parts.response,19);
  assert.equal(r.actionFeedback.find(a=>a.action==='educate').status,'optional');
  assert.equal(r.actionFeedback.find(a=>a.action==='revoke').status,'covered');
  const missed=r.actionFeedback.find(a=>a.action==='block');
  assert.match(missed.reason,/payroll-review.example/); assert.match(missed.reason,/another employee/);
  assert.ok(missed.evidence.includes('p1'));
});

test('generic revocation does not substitute for the required credential reset',()=>{
  const feedback=actionFeedback(cases[0],['revoke']);
  assert.equal(feedback.find(a=>a.action==='reset').status,'missed');
  assert.equal(feedback.find(a=>a.action==='revoke').status,'unsupported');
});

test('unsupported isolation explains both absent execution evidence and practical disruption',()=>{
  const item=actionFeedback(cases[0],['isolate']).find(a=>a.action==='isolate');
  assert.equal(item.status,'unsupported'); assert.match(item.reason,/no downloaded executable/);
  assert.match(item.reason,/disrupt/); assert.ok(item.evidence.includes('p3'));
});

test('every case provides actionable coaching with valid evidence references for all choices',()=>{
  for(const c of cases){
    for(const selected of [[],Object.keys(actions)]){
      const feedback=actionFeedback(c,selected);
      for(const item of feedback){
        assert.ok(item.reason.length>100,`${c.id} ${item.action}`);
        assert.ok(!item.reason.includes('undefined'));
        for(const id of item.evidence) assert.ok(c.evidence.some(e=>e.id===id));
        if(item.status==='missed') assert.ok(item.consequence.length>30);
      }
    }
  }
});

test('previously closed cases are regraded and gain coaching without losing notes',()=>{
  const c=cases[0],s=freshCase();s.status='closed';s.notes='My original timeline';
  s.draft={verdict:c.answer.verdict,category:c.category,actions:[...c.answer.actions,'educate','revoke'],summary:'Confirmed credential compromise based on the employee statement and unfamiliar successful session. All required response actions selected.'};
  s.evidence=[...c.answer.evidence];s.result={score:90};
  const restored=normalizeCase(c,s);
  assert.equal(restored.notes,s.notes);assert.equal(restored.result.score,100);
  assert.ok(restored.result.actionFeedback.length);
});
