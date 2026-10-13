import { trainingPack } from './training-pack.js';
// All people, organizations, events, domains and artifacts are fictional training data.
const ev = (id, tool, time, title, detail) => ({ id, tool, time, title, detail });
export const categories = ['Phishing', 'Identity', 'Malware', 'Network', 'Data protection', 'Cloud', 'Web application', 'Endpoint', 'End-user support', 'Insider risk'];
const originalCases = [
  {
    id: 'SOC-1042', title: 'Payroll verification email', category: 'Phishing', severity: 'High', source: 'Email security', user: 'Maya Chen', host: 'FIN-014', time: '09:12',
    description: 'An employee reported a message asking them to verify their payroll account before noon. Investigate delivery, authenticity, and whether the employee interacted with it.',
    evidence: [
      ev('p1', 'Email', '09:08', 'Delivered message · payroll update', 'From: Payroll Desk <payroll@northstar-benefits.example>\nTo: maya.chen@northstar.example\nSubject: Action required: confirm your payroll\nReply-To: help@payroll-review.example\nSPF: fail · DKIM: none · DMARC: fail\nBody: Your salary will be held unless you verify today.\nLink: hxxps://payroll-review.example/verify\nAttachment: none'),
      ev('p2', 'Logs', '09:10', 'Proxy · credential form visited', 'user=maya.chen host=FIN-014 action=allowed method=GET destination=payroll-review.example path=/verify\n09:11 method=POST path=/session bytes_out=482\nA POST indicates a submission, but does not reveal the submitted values.'),
      ev('p3', 'Endpoint', '09:11', 'Browser activity · no executable launch', 'Process: msedge.exe\nNo downloaded executables or abnormal child processes observed in this window.\nHost security agent: healthy.'),
      ev('p4', 'Identity', '09:16', 'New session from unfamiliar network', 'user=maya.chen result=success MFA=push-approved IP=203.0.113.77\nDevice: unmanaged · browser: previously unseen\nSession occurred five minutes after form submission. Employee says they did not initiate it.'),
      ev('p5', 'User report', '09:18', 'Employee confirms interaction', 'Maya: “I opened the link and entered my work password. I approved a sign-in prompt because I thought payroll needed it.”')
    ],
    artifacts: [{ name: 'payroll-review.example', type: 'URL', verdict: 'Credential harvesting', detail: 'Simulated detonation: redirects to a cloned corporate sign-in form; sends form fields to /session. No payload download. Domain is fictional and never contacted.' }],
    hints: ['Compare the sender, reply-to address, and authentication results.', 'Correlate the proxy POST with the identity session and employee statement.', 'Email removal alone does not contain a compromised account.'],
    answer: { verdict: 'malicious', actions: ['quarantine', 'reset', 'block', 'escalate'], evidence: ['p1', 'p4', 'p5'], explanation: 'This is credential phishing with confirmed account compromise. Failed email authentication and a cloned login page support the lure; the employee statement and unfamiliar authenticated session establish impact. Remove the message, revoke sessions and reset credentials, block the confirmed domain, and escalate the compromise. Endpoint isolation is not supported by the available evidence.' }
  },
  {
    id: 'SOC-1043', title: 'Impossible travel sign-in', category: 'Identity', severity: 'Medium', source: 'Identity protection', user: 'Jordan Reyes', host: 'ENG-022', time: '09:24',
    description: 'Two successful sign-ins were attributed to distant locations within six minutes. Determine whether this is account compromise or a legitimate network change.',
    evidence: [
      ev('i1', 'Identity', '09:18', 'Sign-in · New York geolocation', 'user=jordan.reyes IP=198.51.100.20 result=success device_id=ENG-022 managed=true MFA=FIDO2\nApplication: corporate wiki'),
      ev('i2', 'Identity', '09:24', 'Sign-in · London geolocation', 'user=jordan.reyes IP=192.0.2.40 result=success device_id=ENG-022 managed=true MFA=FIDO2\nSame device and session family; no new authentication factor registered.'),
      ev('i3', 'Logs', '09:22', 'VPN · authorized gateway change', 'user=jordan.reyes device=ENG-022 gateway=London-02 egress=192.0.2.40\nChange reason: New York gateway maintenance. Destination IP appears in the approved VPN inventory.'),
      ev('i4', 'Endpoint', '09:24', 'Device posture · compliant', 'ENG-022: encrypted disk, current security agent, no suspicious process alerts. VPN client connected at 09:22.'),
      ev('i5', 'User report', '09:29', 'Employee confirms VPN reconnect', 'Jordan confirms using the same company laptop and reconnecting the company VPN after a maintenance notification. No unfamiliar MFA prompts.')
    ],
    artifacts: [{ name: '192.0.2.40', type: 'IP', verdict: 'Approved VPN egress', detail: 'Simulated inventory lookup: London-02 company VPN gateway. IP reputation alone cannot establish identity compromise.' }],
    hints: ['Geolocation does not necessarily show the physical location of the employee.', 'Compare device IDs, authentication methods, and the VPN inventory.', 'Choose a proportionate response when legitimate activity explains an alert.'],
    answer: { verdict: 'benign', actions: ['monitor'], evidence: ['i2', 'i3', 'i5'], explanation: 'The approved VPN gateway switch explains the apparent travel. Both sign-ins used the same managed device and phishing-resistant authentication, and the employee corroborated the change. Close as benign and monitor. Credential resets, endpoint isolation, or blocking an approved gateway would disrupt legitimate work without supporting evidence.' }
  },
  {
    id: 'SOC-1044', title: 'Invoice attachment launches script', category: 'Malware', severity: 'Critical', source: 'Endpoint detection', user: 'Alex Morgan', host: 'OPS-008', time: '10:03',
    description: 'Endpoint protection detected a script interpreter launched from an invoice attachment. Establish execution, persistence, and possible network activity.',
    evidence: [
      ev('m1', 'Email', '09:58', 'Invoice attachment delivered', 'From: billing@vendor-update.example\nTo: alex.morgan@northstar.example\nAttachment: Invoice_October.zip containing Invoice_October.js\nSubject: Overdue invoice'),
      ev('m2', 'Endpoint', '10:01', 'Process tree · script execution', 'explorer.exe → wscript.exe Invoice_October.js → powershell.exe -EncodedCommand [redacted training payload]\npowershell.exe wrote C:\\Users\\Alex\\AppData\\Roaming\\sync-agent.exe\nDetection mode: alert only; process was not blocked.'),
      ev('m3', 'Endpoint', '10:02', 'Persistence · scheduled task created', 'Task name: UserSync\nAction: C:\\Users\\Alex\\AppData\\Roaming\\sync-agent.exe\nTrigger: at user logon\nCreated by: powershell.exe'),
      ev('m4', 'Logs', '10:03', 'Outbound beacon · repeated connections', 'host=OPS-008 destination=updates-sync.example port=443 action=allowed\nConnections recur every 60 seconds after sync-agent.exe starts. Destination not in approved software inventory.'),
      ev('m5', 'User report', '10:06', 'Employee opened invoice', 'Alex: “I extracted the attachment and double-clicked the invoice. Nothing opened. Now my computer is slow.”')
    ],
    artifacts: [{ name: 'Invoice_October.js', type: 'File', verdict: 'Malicious downloader', detail: 'Simulated isolated analysis: launches an encoded script, drops sync-agent.exe, creates UserSync, and connects to updates-sync.example. This is a prerecorded report; no executable file is provided or run.' }],
    hints: ['An alert does not necessarily mean execution was prevented.', 'Identify the process chain, persistence mechanism, and outbound destination.', 'Preserve evidence and contain the endpoint before remediation.'],
    answer: { verdict: 'malicious', actions: ['isolate', 'block', 'quarantine', 'escalate'], evidence: ['m2', 'm3', 'm4'], explanation: 'The script executed, installed persistence, and began beaconing. Isolate the endpoint, block confirmed network indicators, quarantine related email, and escalate for forensic investigation and remediation. A password reset alone would not contain this endpoint compromise. Exfiltration is possible but is not established by these logs.' }
  },
  {
    id: 'SOC-1045', title: 'User reports repeated account lockouts', category: 'End-user support', severity: 'Low', source: 'Help desk', user: 'Sam Patel', host: 'HR-011', time: '10:17',
    description: 'An employee cannot sign in after changing their password. Investigate whether repeated authentication failures indicate an attack or a configuration issue.',
    evidence: [
      ev('u1', 'Identity', '10:05', 'Password change completed', 'user=sam.patel source=self-service result=success MFA=FIDO2\nPassword change performed from managed device HR-011.'),
      ev('u2', 'Identity', '10:07', 'Repeated failed authentications', 'user=sam.patel result=bad_password source=HR-011 application=LegacyMailSync interval=60s\n10:12 account locked after repeated failures. No other source devices observed.'),
      ev('u3', 'Endpoint', '10:09', 'Legacy mail client · saved credential', 'Approved application: LegacyMailSync\nSaved credential last updated: yesterday\nBackground sync retries every 60 seconds. Application configuration predates the password change.'),
      ev('u4', 'Logs', '10:14', 'Network review · expected services', 'HR-011 connects only to the approved mail service in this interval. No external sign-in attempts or suspicious destinations detected.'),
      ev('u5', 'User report', '10:17', 'Employee describes password change', 'Sam: “I changed my password this morning. My old desktop mail app keeps asking for a password and my account locks again after it gets unlocked.”')
    ],
    artifacts: [{ name: 'LegacyMailSync', type: 'Application', verdict: 'Approved application', detail: 'Simulated software inventory: approved legacy client. Known behavior: retries stored credentials until updated. Update through IT support; do not request the employee’s password.' }],
    hints: ['Compare the first failures with the password-change time.', 'Look for whether failures originate from one known application or multiple unknown hosts.', 'Consider which team can correct stored credentials and safely unlock the account.'],
    answer: { verdict: 'benign', actions: ['support', 'educate'], evidence: ['u2', 'u3', 'u5'], explanation: 'A stale stored password in an approved mail client explains the timed failures and lockouts. Route to IT support to update the client configuration and unlock the account following identity verification, and guide the employee. Do not ask for the password. There is no evidence here requiring incident-response containment.' }
  },
  {
    id: 'SOC-1046', title: 'Browser displays ransomware warning', category: 'End-user support', severity: 'Medium', source: 'Employee report', user: 'Taylor Brooks', host: 'SALES-006', time: '10:36',
    description: 'A browser page claims the laptop is encrypted and tells the employee to call a support number. Determine whether this is ransomware, a scam, or a legitimate notice.',
    evidence: [
      ev('b1', 'User report', '10:36', 'Employee describes warning', 'Taylor: “A page says all my files are encrypted and wants me to call support. I haven’t called, installed anything, or given anyone access.”'),
      ev('b2', 'Endpoint', '10:37', 'File and process review', 'Documents open normally. No mass file modifications or renamed extensions. Browser is the only active process related to the warning. No new remote-support software or suspicious child processes.'),
      ev('b3', 'Logs', '10:35', 'Browser redirect chain', 'host=SALES-006\nnews.example → ad-redirect.example → device-rescue.example\nNo downloads observed. Final page includes a full-screen warning and a phone number.'),
      ev('b4', 'Email', '10:30', 'Email review', 'No related email delivery in the investigation window.'),
      ev('b5', 'Endpoint', '10:39', 'Security agent health', 'Security agent active and current. No encryption detection or persistence changes. Browser session can be closed through normal operating-system controls.')
    ],
    artifacts: [{ name: 'device-rescue.example', type: 'URL', verdict: 'Technical-support scam', detail: 'Simulated page analysis: uses a full-screen overlay and looping audio to impersonate a system warning. Demands a phone call and payment. No file-encryption behavior observed. Never contact the displayed phone number.' }],
    hints: ['A web page’s claim is not evidence that files were encrypted.', 'Check actual endpoint behavior and what the employee has already done.', 'A malicious scam can exist without an infected endpoint.'],
    answer: { verdict: 'malicious', actions: ['block', 'educate'], evidence: ['b1', 'b2', 'b3'], explanation: 'The page is a malicious technical-support scam, but the evidence does not establish ransomware execution or endpoint compromise. Block the confirmed scam domain and guide the employee to close the page without calling, paying, or granting access. If interaction or new endpoint evidence appears, reassess and escalate as appropriate.' }
  }
];
export const cases = [...originalCases.map((c, i) => ({ ...c, difficulty: ['Beginner', 'Intermediate', 'Intermediate', 'Beginner', 'Beginner'][i] })), ...trainingPack];
