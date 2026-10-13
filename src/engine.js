export const actions = {
  quarantine: 'Quarantine the email', reset: 'Reset credentials and revoke sessions',
  isolate: 'Isolate the endpoint', block: 'Block confirmed indicators',
  escalate: 'Escalate to incident response', educate: 'Provide user guidance',
  support: 'Route to IT support', monitor: 'Monitor without containment'
};
export function freshCase() { return { status: 'new', notes: '', evidence: [], hints: 0, draft: { verdict: '', category: '', actions: [], summary: '' }, result: null }; }
export function grade(scenario, draft, evidence = []) {
  const answer = scenario.answer;
  const verdict = draft.verdict === answer.verdict ? 30 : 0;
  const category = draft.category === scenario.category ? 15 : 0;
  const correct = draft.actions.filter(a => answer.actions.includes(a));
  const extra = draft.actions.filter(a => !answer.actions.includes(a));
  const response = Math.max(0, Math.round(25 * correct.length / answer.actions.length) - extra.length * 5);
  const cited = answer.evidence.filter(id => evidence.includes(id));
  const investigation = Math.round(20 * cited.length / answer.evidence.length);
  const documentation = draft.summary.trim().length >= 80 ? 10 : draft.summary.trim().length >= 20 ? 5 : 0;
  return { score: verdict + category + response + investigation + documentation, parts: { verdict, category, response, investigation, documentation }, missingActions: answer.actions.filter(a => !draft.actions.includes(a)), extraActions: extra, missingEvidence: answer.evidence.filter(id => !evidence.includes(id)) };
}
export function closeCase(scenario, state) {
  if (state.status !== 'active') throw new Error('Claim this alert before closing it.');
  if (!state.draft.verdict || !state.draft.category || !state.draft.actions.length || state.draft.summary.trim().length < 20) throw new Error('Choose a verdict, category, at least one action, and write a summary of at least 20 characters.');
  return { ...state, status: 'closed', result: grade(scenario, state.draft, state.evidence) };
}
