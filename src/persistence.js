import { actions, closeCase, freshCase } from './engine.js';

export function normalizeCase(scenario, saved) {
  if (!saved || typeof saved !== 'object' || !['new', 'active', 'closed'].includes(saved.status)) throw new Error('Invalid case status.');
  const draft = saved.draft;
  if (typeof saved.notes !== 'string' || saved.notes.length > 100000 || !Array.isArray(saved.evidence) || !Number.isInteger(saved.hints) || saved.hints < 0 || saved.hints > scenario.hints.length) throw new Error('Invalid notes, evidence, or hints.');
  if (!draft || !['', 'malicious', 'benign'].includes(draft.verdict) || typeof draft.category !== 'string' || draft.category.length > 100 || typeof draft.summary !== 'string' || draft.summary.length > 100000 || !Array.isArray(draft.actions) || draft.actions.some(a => !Object.hasOwn(actions, a))) throw new Error('Invalid case conclusion.');
  const known = new Set(scenario.evidence.map(e => e.id));
  if (saved.evidence.some(id => !known.has(id))) throw new Error('Unknown evidence reference.');
  const clean = { ...freshCase(), status: saved.status, notes: saved.notes, hints: saved.hints, evidence: [...new Set(saved.evidence)], draft: { verdict: draft.verdict, category: draft.category, summary: draft.summary, actions: [...new Set(draft.actions)] } };
  // Recompute feedback rather than trusting imported or cached score fields.
  if (clean.status === 'closed') return closeCase(scenario, { ...clean, status: 'active' });
  return clean;
}

export function makeBackup(store) {
  return { format: 'analyst-lab-progress', version: 1, exportedAt: new Date().toISOString(), cases: store };
}

export function readBackup(input, scenarios) {
  if (!input || input.format !== 'analyst-lab-progress' || input.version !== 1 || !input.cases || typeof input.cases !== 'object' || Array.isArray(input.cases)) throw new Error('Choose a version 1 Analyst Lab progress backup.');
  const known = new Map(scenarios.map(c => [c.id, c]));
  const imported = {};
  for (const [id, saved] of Object.entries(input.cases)) {
    if (!known.has(id)) throw new Error(`Unknown case ${id}. Update the app before importing this backup.`);
    try { imported[id] = normalizeCase(known.get(id), saved); }
    catch (err) { throw new Error(`${id}: ${err.message}`); }
  }
  if (!Object.keys(imported).length) throw new Error('This backup contains no cases.');
  return imported;
}
