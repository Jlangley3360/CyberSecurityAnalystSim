// Response coaching is deterministic and uses only the supplied fictional evidence.
const purposes = {
  quarantine: ['Remove the delivered lure', 'Quarantine the related message to prevent further opens and preserve it for review.', 'Email removal will not stop an already compromised account or running endpoint payload.'],
  reset: ['Secure the compromised identity', 'Reset exposed credentials and revoke existing sessions so a stolen password or session cannot continue to be used.', 'Leaving credentials or sessions valid can allow continued access after the original lure is removed.'],
  isolate: ['Contain the affected endpoint', 'Isolate the affected host to interrupt its unauthorized execution or network access while the response team preserves evidence.', 'Without containment, an affected host may continue the observed activity or spread to other assets.'],
  block: ['Prevent further contact with confirmed indicators', 'Block the confirmed malicious destinations or sources through the appropriate email, web, DNS, or network control. Use the indicators in this case, rather than blocking unrelated services.', 'Removing one message or securing one account leaves the confirmed attack infrastructure reachable for other attempts.'],
  escalate: ['Coordinate the incident response', 'Escalate the verified incident with the timeline, affected assets, evidence, and remaining uncertainty so the responsible team can scope impact and coordinate recovery.', 'A local fix can leave the wider access, data exposure, financial risk, or control failure uninvestigated.'],
  educate: ['Address the user-facing cause', 'Explain the verified issue and safe next steps to the employee without requesting passwords, MFA codes, or unsafe workarounds.', 'The same interaction or configuration mistake may recur if the employee is not given practical guidance.'],
  support: ['Correct the verified configuration or service issue', 'Route the supported repair or access workflow to IT, including the observed symptom, cause, and relevant authorization.', 'The underlying service or configuration issue remains unresolved without the appropriate owner.'],
  monitor: ['Use a proportionate monitoring response', 'Monitor the bounded activity without unnecessary containment. Reopen the investigation if new evidence contradicts the current scope.', 'Monitoring provides follow-up while avoiding disruption that the current evidence does not justify.'],
  revoke: ['Remove the unauthorized access path', 'Revoke the unauthorized grant, factor, key, rule, account, or permission identified in the case through the responsible owner. Confirm the removed access path rather than assuming a password reset removes it.', 'An unauthorized access path can survive other cleanup and continue to expose the account, resource, or data.']
};
const matchers = {
  quarantine: /email|message|attachment|sender|mailbox|lure/i,
  reset: /password|credential|session|authenticat|sign.in|account|token/i,
  isolate: /execut|process|host|endpoint|workstation|payload|remote|container|node/i,
  block: /\.example|203\.0\.113|destination|source|callback|domain|traffic|network|pool/i,
  escalate: /unauthori|denies|denied|compromis|export|download|disclos|execut|incident|access/i,
  educate: /employee|user|confirms|report|caller|password|guidance/i,
  support: /configur|approv|support|failure|fail|clock|policy|update|client|outage/i,
  monitor: /approv|confirm|denied|blocked|no |legitimate|authoriz/i,
  revoke: /grant|factor|key|rule|permission|token|recovery|certificate|privilege|account|access/i
};
const overrides = {
  'SOC-1042': {
    block: 'The email names payroll-review.example as the credential-form destination. Block that confirmed phishing domain in the web/DNS controls and the related lure in email controls. Quarantining this copy and resetting Maya’s credentials do not prevent another employee from reaching the same page.',
    reset: 'Maya confirms entering her password and approving an unsolicited prompt, and the identity record shows an unfamiliar successful session. Reset her exposed credentials and revoke sessions; removing the email alone cannot end that access.',
    quarantine: 'The delivered payroll message contains the fraudulent login link and failed email authentication. Quarantine it, and search for related delivered copies, so recipients cannot revisit the lure.',
    escalate: 'The unfamiliar authenticated session and employee confirmation establish account compromise, not just a suspicious email. Incident response needs to assess mailbox activity, additional sessions, and any downstream impact.',
    isolate: 'The endpoint record shows no downloaded executable or abnormal child process. The established compromise is the account, so endpoint isolation would disrupt Maya’s laptop without containing the stolen identity. Reassess if execution or endpoint compromise evidence appears.',
    revoke: 'No separate unauthorized application grant, MFA enrollment, recovery method, or permission change is recorded. The known access is an authenticated session: the reset action already includes session revocation. A separate revocation action is not a substitute for resetting the exposed password.'
  },
  'SOC-1043': {
    monitor: 'The approved London VPN gateway explains the location change. Both sign-ins use the same managed device and FIDO2 authentication, and Jordan confirms the reconnect. Monitor rather than disrupting a verified legitimate session.',
    block: '192.0.2.40 is the approved London VPN gateway, not a confirmed attack source. Blocking it would interrupt legitimate company access. Geolocation alone does not justify a block.',
    reset: 'There is no unauthorized session or exposed password in these records. The approved VPN reconnect explains the sign-ins, so a credential reset would add disruption without addressing a compromise.',
    isolate: 'The device is compliant, the VPN connection is authorized, and no suspicious execution is observed. Isolation would disconnect a healthy laptop without a supported endpoint threat.'
  },
  'SOC-1044': {
    isolate: 'The attachment executed a script, wrote sync-agent.exe, created the UserSync task, and began outbound beaconing. Isolate OPS-008 to interrupt that active compromise while preserving evidence.',
    block: 'updates-sync.example is the observed recurring beacon destination. Block that confirmed indicator to interrupt contact from affected hosts and reduce further communication attempts.',
    quarantine: 'The delivered invoice archive contains the script that started the infection. Quarantine the related message and search for other delivered copies; this prevents additional executions but does not clean the already affected host.',
    escalate: 'Execution, persistence, and beaconing are all confirmed. Incident response must scope other recipients and hosts, preserve artifacts, and coordinate removal and recovery. The logs do not yet establish exfiltration.'
  },
  'SOC-1045': {
    support: 'LegacyMailSync retries a stored password that predates Sam’s password change. IT should verify identity, update the client through the supported workflow, and unlock the account after the retry source is corrected.',
    educate: 'Explain why the old mail client keeps retrying and show Sam how to update saved credentials through the approved workflow. Never ask Sam to disclose the password.',
    reset: 'The failures are traced to the approved client’s stale saved password; no unfamiliar successful session appears. Another reset will not fix the client’s stored credential and may perpetuate the lockout.',
    isolate: 'The known mail client and stale password explain the symptom, with no suspicious process or destination. Isolating HR-011 does not correct the client configuration and would unnecessarily interrupt work.'
  },
  'SOC-1046': {
    block: 'device-rescue.example is the confirmed scam destination in the redirect chain. Block that domain to prevent return visits; the legitimate news site should not be blocked just because an advertisement redirected from it.',
    educate: 'Taylor has not called, paid, installed software, or granted access. Explain how to close the page using normal system controls and avoid calling the displayed number or following its instructions.',
    isolate: 'Files open normally, there is no mass modification or suspicious child process, and no remote tool was installed. The malicious object is a scam page; the page’s ransomware claim is not evidence of host encryption.'
  }
};
function evidenceFor(c, action, status) {
  const keyEvidence = c.evidence.filter(e => c.answer.evidence.includes(e.id));
  const pool = status === 'unsupported' ? [...c.evidence] : keyEvidence;
  if (action === 'isolate') pool.sort((a,b) => Number(b.tool === 'Endpoint') - Number(a.tool === 'Endpoint'));
  const matches = pool.filter(e => matchers[action]?.test(`${e.title} ${e.detail}`));
  return (matches.length ? matches : keyEvidence).slice(0, 2).map(e => e.id);
}
function unsupportedReason(c, action) {
  if (overrides[c.id]?.[action]) return overrides[c.id][action];
  const required = c.answer.actions;
  switch (action) {
    case 'quarantine': return 'The supplied investigation does not identify a delivered malicious email that requires removal. Quarantining unrelated messages would not address the established cause. Reconsider this action if a related lure is later found.';
    case 'reset': return 'These records do not establish an exposed password or compromised session requiring this reset. Use the case’s verified cause and targeted response rather than resetting credentials solely because an alert fired. If a grant or key is the problem, revoke that specific access path.';
    case 'isolate': return 'The supplied evidence does not establish endpoint execution or an affected host requiring isolation. This case needs the targeted response described in the explanation. Isolation would disrupt the device without addressing the proven cause; reconsider it if host compromise is established.';
    case 'block': return 'No source or destination in this case is established as a malicious indicator requiring a block. Blocking a legitimate or unverified address can interrupt approved access. A policy, account, or configuration issue needs its corresponding targeted correction.';
    case 'escalate': return 'The verified context explains the alert without an incident requiring incident-response escalation. Use the documented monitoring or support path. Reassess and escalate if new evidence shows unauthorized access, execution, or disclosure.';
    case 'support': return 'Routing a ticket to routine IT support is not the required incident response for the confirmed activity. Support may assist recovery, but it does not replace containment, access revocation, or incident coordination. The case does not identify a separate routine repair requiring this selection.';
    case 'monitor': return 'This option explicitly means monitoring without containment. The case establishes unauthorized or malicious activity that needs the listed corrective actions. Monitoring is useful after response, but observation alone would leave the established issue unresolved.';
    case 'revoke': return required.includes('reset') ? 'The documented compromise calls for resetting credentials and revoking sessions. No separate unauthorized grant, key, factor, rule, or permission is established here. This broad revocation option alone does not reset an exposed password.' : 'The supplied records do not identify an unauthorized grant, key, factor, rule, or permission to revoke. Remove access only when you can identify the affected access path; indiscriminate revocation can break legitimate services without addressing this case’s cause.';
    default: return 'This action is not supported by the supplied evidence.';
  }
}
export function actionFeedback(c, selectedActions) {
  const selected = new Set(selectedActions);
  const ids = [...new Set([...c.answer.actions, ...selected])];
  return ids.map(action => {
    const required = c.answer.actions.includes(action);
    let status = required ? selected.has(action) ? 'correct' : 'missed' : 'unsupported';
    if (!required && action === 'educate') status = 'optional';
    if (!required && action === 'revoke' && c.answer.actions.includes('reset') && selected.has('reset')) status = 'covered';
    const purpose = purposes[action];
    let reason = required ? overrides[c.id]?.[action] || `${purpose[1]} Case context: ${c.answer.explanation}` : unsupportedReason(c, action);
    if (status === 'optional') reason = 'User guidance is a reasonable supporting step and is not penalized. Tailor it to the verified event and avoid blaming the employee. It does not replace the case’s required containment or correction, so it does not earn extra response points.';
    if (status === 'covered') reason = `${overrides[c.id]?.revoke || 'The required reset action already includes revoking sessions. No separate grant, key, factor, rule, or permission requiring revocation is established in these records.'} You selected reset as well, so this overlapping selection is not penalized and earns no extra credit.`;
    return { action, status, title: purpose?.[0] || action, reason, consequence: status === 'missed' ? purpose[2] : '', evidence: status === 'optional' ? [] : evidenceFor(c, action, status) };
  });
}
