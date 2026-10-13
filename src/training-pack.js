// 100 independently authored fictional investigations. No real samples or live lookups.
export const trainingPack = [
  {
    "id": "SOC-1047",
    "title": "Shared document requires a password",
    "category": "Phishing",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Phishing monitoring",
    "user": "Riley Adams",
    "host": "LAB-001",
    "time": "11:00",
    "description": "Email gateway flags a shared-document notification. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1047-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1047 subject=Riley Adams asset=LAB-001\nSource: Phishing monitoring\nEmail gateway flags a shared-document notification.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1047-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Sender uses docs-share.example; DMARC fails; link points outside the approved document service."
      },
      {
        "id": "SOC-1047-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Proxy records a GET to docs-share.example/login but no POST or file download."
      },
      {
        "id": "SOC-1047-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee says they opened the page, recognized the fake login, and entered nothing."
      },
      {
        "id": "SOC-1047-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1047, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1047-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Proxy records a GET to docs-share.example/login but no POST or file download. Employee says they opened the page, recognized the fake login, and entered nothing."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "block",
        "educate"
      ],
      "evidence": [
        "SOC-1047-e2",
        "SOC-1047-e3",
        "SOC-1047-e4"
      ],
      "explanation": "A credential-harvesting lure was delivered and visited, but the evidence does not establish credential submission. Remove the message, block the lure, and guide the employee. Do not claim account compromise from a GET alone."
    }
  },
  {
    "id": "SOC-1048",
    "title": "QR code on a benefits notice",
    "category": "Phishing",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Phishing monitoring",
    "user": "Noah Ellis",
    "host": "LAB-002",
    "time": "11:00",
    "description": "An employee reports a benefits enrollment message containing a QR code. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1048-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1048 subject=Noah Ellis asset=LAB-002\nSource: Phishing monitoring\nAn employee reports a benefits enrollment message containing a QR code.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1048-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Message claims to come from HR; sender benefits-enroll.example is not in the approved HR vendor inventory."
      },
      {
        "id": "SOC-1048-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Decoded QR destination is hxxps://benefits-enroll.example/signin; a simulated page inspection shows a cloned company login."
      },
      {
        "id": "SOC-1048-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee reported the message before scanning the code; phone and work-browser logs show no visit."
      },
      {
        "id": "SOC-1048-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1048, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1048-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Decoded QR destination is hxxps://benefits-enroll.example/signin; a simulated page inspection shows a cloned company login. Employee reported the message before scanning the code; phone and work-browser logs show no visit."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "block",
        "educate"
      ],
      "evidence": [
        "SOC-1048-e2",
        "SOC-1048-e3",
        "SOC-1048-e4"
      ],
      "explanation": "The QR code conceals a credential lure. Contain the delivered message and confirmed domain. No observed interaction supports a credential reset or endpoint isolation."
    }
  },
  {
    "id": "SOC-1049",
    "title": "Invoice from a familiar vendor mailbox",
    "category": "Phishing",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Phishing monitoring",
    "user": "Avery Singh",
    "host": "LAB-003",
    "time": "11:00",
    "description": "Accounts payable reports an unexpected request to change bank details. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1049-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1049 subject=Avery Singh asset=LAB-003\nSource: Phishing monitoring\nAccounts payable reports an unexpected request to change bank details.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1049-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "SPF, DKIM, and DMARC pass for an actual vendor mailbox; message requests a new bank account and asks to bypass the normal callback."
      },
      {
        "id": "SOC-1049-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "A callback to the vendor using its existing directory number confirms the change is fraudulent and the vendor mailbox was compromised."
      },
      {
        "id": "SOC-1049-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Finance approval workflow shows the change request was held; no payment or bank-record modification occurred."
      },
      {
        "id": "SOC-1049-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1049, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1049-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. A callback to the vendor using its existing directory number confirms the change is fraudulent and the vendor mailbox was compromised. Finance approval workflow shows the change request was held; no payment or bank-record modification occurred."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1049-e2",
        "SOC-1049-e3",
        "SOC-1049-e4"
      ],
      "explanation": "Passing authentication proves the sending infrastructure, not the legitimacy of a request. The independently verified compromised vendor account makes this business-email compromise. Escalate the attempted payment fraud and preserve the message; no payment loss is established."
    }
  },
  {
    "id": "SOC-1050",
    "title": "OAuth consent invitation",
    "category": "Phishing",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Phishing monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-004",
    "time": "11:00",
    "description": "A user reports a message inviting them to activate a productivity add-on. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1050-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1050 subject=Morgan Rivera asset=LAB-004\nSource: Phishing monitoring\nA user reports a message inviting them to activate a productivity add-on.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1050-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Invitation links to the real identity-provider consent page but names an unapproved application, CalendarBridge."
      },
      {
        "id": "SOC-1050-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Audit shows user granted CalendarBridge Mail.Read and offline_access; service principal is not approved by IT."
      },
      {
        "id": "SOC-1050-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Application used the granted token to read 120 mailbox items after consent; no password reset occurred."
      },
      {
        "id": "SOC-1050-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1050, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1050-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Audit shows user granted CalendarBridge Mail.Read and offline_access; service principal is not approved by IT. Application used the granted token to read 120 mailbox items after consent; no password reset occurred."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "quarantine",
        "escalate"
      ],
      "evidence": [
        "SOC-1050-e2",
        "SOC-1050-e3",
        "SOC-1050-e4"
      ],
      "explanation": "This is consent phishing: legitimate identity-provider infrastructure granted a malicious application access. Revoke the application grant and tokens, remove the lure, and escalate mailbox exposure. Resetting a password alone may leave the consent grant intact."
    }
  },
  {
    "id": "SOC-1051",
    "title": "Reply-chain attachment from a supplier",
    "category": "Phishing",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Phishing monitoring",
    "user": "Casey Kim",
    "host": "LAB-005",
    "time": "11:00",
    "description": "A familiar email thread receives an unexpected archive attachment. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1051-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1051 subject=Casey Kim asset=LAB-005\nSource: Phishing monitoring\nA familiar email thread receives an unexpected archive attachment.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1051-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "The quoted history is genuine; supplier sender passes authentication, but the new attachment is Project_Update.iso with a shortcut inside."
      },
      {
        "id": "SOC-1051-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "No shortcut execution or mounted image is recorded; attachment was held in gateway quarantine."
      },
      {
        "id": "SOC-1051-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Simulated artifact analysis identifies a shortcut that would invoke a downloader; supplier confirms its mailbox is under investigation."
      },
      {
        "id": "SOC-1051-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1051, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1051-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. No shortcut execution or mounted image is recorded; attachment was held in gateway quarantine. Simulated artifact analysis identifies a shortcut that would invoke a downloader; supplier confirms its mailbox is under investigation."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1051-e2",
        "SOC-1051-e3",
        "SOC-1051-e4"
      ],
      "explanation": "Thread hijacking can make a malicious message look routine. The payload and supplier confirmation outweigh genuine thread history. Keep the message quarantined, block its confirmed payload destination, and coordinate response; execution is not established."
    }
  },
  {
    "id": "SOC-1052",
    "title": "Company training email reported as phishing",
    "category": "Phishing",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Phishing monitoring",
    "user": "Jamie Ross",
    "host": "LAB-006",
    "time": "11:00",
    "description": "An employee flags a security-awareness reminder. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1052-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1052 subject=Jamie Ross asset=LAB-006\nSource: Phishing monitoring\nAn employee flags a security-awareness reminder.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1052-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Sender is the approved training vendor; DKIM and DMARC pass and the link matches the registered training portal."
      },
      {
        "id": "SOC-1052-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Campaign identifier matches the security team change calendar and the assigned course."
      },
      {
        "id": "SOC-1052-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The security-awareness owner confirms the reminder was sent to this employee today."
      },
      {
        "id": "SOC-1052-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1052, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1052-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Campaign identifier matches the security team change calendar and the assigned course. The security-awareness owner confirms the reminder was sent to this employee today."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "educate",
        "monitor"
      ],
      "evidence": [
        "SOC-1052-e2",
        "SOC-1052-e3",
        "SOC-1052-e4"
      ],
      "explanation": "Independent inventory, campaign records, and owner verification establish an authorized notification. Explain how to verify reminders and close without removing legitimate mail."
    }
  },
  {
    "id": "SOC-1053",
    "title": "Password-protected archive notice",
    "category": "Phishing",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "Phishing monitoring",
    "user": "Quinn Ali",
    "host": "LAB-007",
    "time": "11:00",
    "description": "Mail gateway flags an encrypted archive that bypassed content inspection. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1053-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1053 subject=Quinn Ali asset=LAB-007\nSource: Phishing monitoring\nMail gateway flags an encrypted archive that bypassed content inspection.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1053-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A message from parcel-desk.example supplies the archive password in the body and pressures the recipient to view a delivery receipt."
      },
      {
        "id": "SOC-1053-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated archive analysis identifies a script downloader and callback to parcel-status.example."
      },
      {
        "id": "SOC-1053-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Recipient never downloaded or extracted the archive; email interaction telemetry shows only message preview."
      },
      {
        "id": "SOC-1053-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1053, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1053-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated archive analysis identifies a script downloader and callback to parcel-status.example. Recipient never downloaded or extracted the archive; email interaction telemetry shows only message preview."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "block",
        "educate"
      ],
      "evidence": [
        "SOC-1053-e2",
        "SOC-1053-e3",
        "SOC-1053-e4"
      ],
      "explanation": "An encrypted archive is not inherently malicious, but this artifact contains a confirmed downloader. Remove the message, block the callback, and guide the recipient; no execution evidence supports endpoint isolation."
    }
  },
  {
    "id": "SOC-1054",
    "title": "Executive asks for an urgent wire transfer",
    "category": "Phishing",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Phishing monitoring",
    "user": "Drew Carter",
    "host": "LAB-008",
    "time": "11:00",
    "description": "Finance reports a payment instruction appearing to come from the CEO. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1054-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1054 subject=Drew Carter asset=LAB-008\nSource: Phishing monitoring\nFinance reports a payment instruction appearing to come from the CEO.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1054-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Display name matches the CEO but sender is ceo-office@northstar-board.example rather than the company domain."
      },
      {
        "id": "SOC-1054-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The CEO is contacted through the internal directory and denies requesting the transfer."
      },
      {
        "id": "SOC-1054-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Payment audit shows finance submitted the transfer; it remains pending release and treasury can stop it."
      },
      {
        "id": "SOC-1054-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1054, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1054-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The CEO is contacted through the internal directory and denies requesting the transfer. Payment audit shows finance submitted the transfer; it remains pending release and treasury can stop it."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1054-e2",
        "SOC-1054-e3",
        "SOC-1054-e4"
      ],
      "explanation": "This is executive impersonation with a pending financial impact. Escalate immediately to incident response and treasury for a payment hold through verified channels, preserve the message, and reinforce the verification process. Do not assert completed theft."
    }
  },
  {
    "id": "SOC-1055",
    "title": "Marketing unsubscribe page requests login",
    "category": "Phishing",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "Phishing monitoring",
    "user": "Skyler Park",
    "host": "LAB-009",
    "time": "11:00",
    "description": "A user reports a newsletter unsubscribe page asking for corporate credentials. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1055-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1055 subject=Skyler Park asset=LAB-009\nSource: Phishing monitoring\nA user reports a newsletter unsubscribe page asking for corporate credentials.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1055-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "The newsletter sender is real, but its unsubscribe URL redirects to auth-marketing.example; this domain is not in the vendor inventory."
      },
      {
        "id": "SOC-1055-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated redirect analysis finds a cloned sign-in form collecting passwords; no legitimate unsubscribe action is implemented."
      },
      {
        "id": "SOC-1055-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The employee did not enter credentials and reported the unexpected prompt."
      },
      {
        "id": "SOC-1055-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1055, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1055-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated redirect analysis finds a cloned sign-in form collecting passwords; no legitimate unsubscribe action is implemented. The employee did not enter credentials and reported the unexpected prompt."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "block",
        "educate"
      ],
      "evidence": [
        "SOC-1055-e2",
        "SOC-1055-e3",
        "SOC-1055-e4"
      ],
      "explanation": "The unsubscribe redirect is a credential lure even though the originating newsletter is legitimate. Remove the affected message, block the confirmed lure, and guide the employee. There is no evidence of account compromise."
    }
  },
  {
    "id": "SOC-1056",
    "title": "Signed message with a rewritten link",
    "category": "Phishing",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Phishing monitoring",
    "user": "Robin Diaz",
    "host": "LAB-010",
    "time": "11:00",
    "description": "An employee questions a signed collaboration notification. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1056-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1056 subject=Robin Diaz asset=LAB-010\nSource: Phishing monitoring\nAn employee questions a signed collaboration notification.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1056-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "DKIM passes for the sending vendor; visible link text shows the approved portal, but the actual href points to collab-login.example."
      },
      {
        "id": "SOC-1056-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Proxy records a form POST to the cloned portal, followed by an unfamiliar authenticated session from 203.0.113.84."
      },
      {
        "id": "SOC-1056-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee confirms entering a password and approving a prompt they did not initiate."
      },
      {
        "id": "SOC-1056-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1056, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1056-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Proxy records a form POST to the cloned portal, followed by an unfamiliar authenticated session from 203.0.113.84. Employee confirms entering a password and approving a prompt they did not initiate."
      }
    ],
    "hints": [
      "Compare the actual destination, sender authentication, and independently verified business context.",
      "A legitimate sender or identity-provider page can still be abused. Establish whether a click, submission, grant, or execution occurred.",
      "Contain the lure, then address any confirmed credential, mailbox, payment, or endpoint impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "quarantine",
        "block",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1056-e2",
        "SOC-1056-e3",
        "SOC-1056-e4"
      ],
      "explanation": "A passing signature does not validate embedded content. Credential submission and an unauthorized session establish compromise. Remove the lure, block the domain, revoke sessions and reset credentials, and escalate."
    }
  },
  {
    "id": "SOC-1057",
    "title": "Repeated unsolicited MFA prompts",
    "category": "Identity",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Identity monitoring",
    "user": "Riley Adams",
    "host": "LAB-011",
    "time": "11:00",
    "description": "An employee reports authentication prompts they did not initiate. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1057-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1057 subject=Riley Adams asset=LAB-011\nSource: Identity monitoring\nAn employee reports authentication prompts they did not initiate.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1057-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Eight password-success sign-ins from 203.0.113.61 generated push challenges; all challenges were denied."
      },
      {
        "id": "SOC-1057-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee denies initiating the attempts and confirms no prompt was approved."
      },
      {
        "id": "SOC-1057-e4",
        "tool": "Identity",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "No new successful session exists; the correct password was nonetheless used by an unknown source."
      },
      {
        "id": "SOC-1057-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1057, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1057-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee denies initiating the attempts and confirms no prompt was approved. No new successful session exists; the correct password was nonetheless used by an unknown source."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "reset",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1057-e2",
        "SOC-1057-e3",
        "SOC-1057-e4"
      ],
      "explanation": "Denied MFA prevented observed session creation, but correct-password use establishes a compromised secret. Reset credentials and revoke sessions, investigate the attempts, and guide the employee to reject unsolicited prompts."
    }
  },
  {
    "id": "SOC-1058",
    "title": "New MFA factor added before mailbox access",
    "category": "Identity",
    "difficulty": "Intermediate",
    "severity": "Critical",
    "source": "Identity monitoring",
    "user": "Noah Ellis",
    "host": "LAB-012",
    "time": "11:00",
    "description": "Identity monitoring detects a new authenticator enrollment. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1058-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1058 subject=Noah Ellis asset=LAB-012\nSource: Identity monitoring\nIdentity monitoring detects a new authenticator enrollment.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1058-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Unknown session registers a new authenticator immediately after an unfamiliar password-based login."
      },
      {
        "id": "SOC-1058-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Account owner denies both the login and factor registration."
      },
      {
        "id": "SOC-1058-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The new factor authenticates a session that exports mailbox contents; the access was not approved."
      },
      {
        "id": "SOC-1058-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1058, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1058-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Account owner denies both the login and factor registration. The new factor authenticates a session that exports mailbox contents; the access was not approved."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "reset",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1058-e2",
        "SOC-1058-e3",
        "SOC-1058-e4"
      ],
      "explanation": "An attacker added persistence through an authentication factor and accessed mail. Reset credentials and sessions, revoke the unauthorized factor, and escalate the confirmed mailbox access. Investigate scope beyond the initial login."
    }
  },
  {
    "id": "SOC-1059",
    "title": "Password spray against many employees",
    "category": "Identity",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Identity monitoring",
    "user": "Avery Singh",
    "host": "LAB-013",
    "time": "11:00",
    "description": "Identity monitoring sees failures spread across accounts. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1059-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1059 subject=Avery Singh asset=LAB-013\nSource: Identity monitoring\nIdentity monitoring sees failures spread across accounts.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1059-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "203.0.113.52 submits the same authentication pattern to 45 usernames with only two failures per user."
      },
      {
        "id": "SOC-1059-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "One account records password success and a denied MFA challenge; the remaining accounts only show password failure."
      },
      {
        "id": "SOC-1059-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "No authenticated session is created; the account with password success is identified as a break-glass candidate lacking recent credential rotation."
      },
      {
        "id": "SOC-1059-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1059, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1059-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. One account records password success and a denied MFA challenge; the remaining accounts only show password failure. No authenticated session is created; the account with password success is identified as a break-glass candidate lacking recent credential rotation."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1059-e2",
        "SOC-1059-e3",
        "SOC-1059-e4"
      ],
      "explanation": "The distributed low-rate attempts indicate password spraying. Block the confirmed source where supported and investigate; reset the account whose password succeeded, not every account blindly. MFA prevented observed session creation."
    }
  },
  {
    "id": "SOC-1060",
    "title": "New-device sign-in during laptop replacement",
    "category": "Identity",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Identity monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-014",
    "time": "11:00",
    "description": "An identity alert marks a previously unseen laptop. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1060-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1060 subject=Morgan Rivera asset=LAB-014\nSource: Identity monitoring\nAn identity alert marks a previously unseen laptop.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1060-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Login uses a compliant enrolled device and FIDO2 authentication from the office network."
      },
      {
        "id": "SOC-1060-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Device inventory links the new laptop to the approved replacement ticket and assigned employee."
      },
      {
        "id": "SOC-1060-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee confirms collecting the laptop from IT and signing in during the documented appointment."
      },
      {
        "id": "SOC-1060-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1060, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1060-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Device inventory links the new laptop to the approved replacement ticket and assigned employee. Employee confirms collecting the laptop from IT and signing in during the documented appointment."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1060-e2",
        "SOC-1060-e3",
        "SOC-1060-e4"
      ],
      "explanation": "Inventory and the approved replacement workflow explain the new device. A new-device alert alone is not evidence of compromise."
    }
  },
  {
    "id": "SOC-1061",
    "title": "Session cookie reused without a fresh login",
    "category": "Identity",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Identity monitoring",
    "user": "Casey Kim",
    "host": "LAB-015",
    "time": "11:00",
    "description": "Identity monitoring finds concurrent sessions with an unusual token pattern. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1061-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1061 subject=Casey Kim asset=LAB-015\nSource: Identity monitoring\nIdentity monitoring finds concurrent sessions with an unusual token pattern.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1061-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "The same session identifier appears from the managed workstation and an unknown browser within 30 seconds; the unknown browser used no new MFA challenge."
      },
      {
        "id": "SOC-1061-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Account owner denies using the unknown device; travel and VPN records cannot explain it."
      },
      {
        "id": "SOC-1061-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The unknown session downloads internal documents while the managed workstation is idle."
      },
      {
        "id": "SOC-1061-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1061, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1061-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Account owner denies using the unknown device; travel and VPN records cannot explain it. The unknown session downloads internal documents while the managed workstation is idle."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1061-e2",
        "SOC-1061-e3",
        "SOC-1061-e4"
      ],
      "explanation": "The evidence supports session-token theft or replay. Revoke existing sessions and reset credentials under the identity response procedure; investigate the access and possible token-stealing source. MFA enrollment alone does not invalidate stolen sessions."
    }
  },
  {
    "id": "SOC-1062",
    "title": "Service account authentication failures after rotation",
    "category": "Identity",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "Identity monitoring",
    "user": "Jamie Ross",
    "host": "LAB-016",
    "time": "11:00",
    "description": "An application service generates a burst of failed logins. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1062-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1062 subject=Jamie Ross asset=LAB-016\nSource: Identity monitoring\nAn application service generates a burst of failed logins.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1062-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Failures originate only from APP-ROTATE-02 and begin immediately after the scheduled credential rotation."
      },
      {
        "id": "SOC-1062-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The deployment record shows one connector still references the previous credential version."
      },
      {
        "id": "SOC-1062-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Approved connector service retries every 30 seconds; there are no unknown interactive sign-ins or new source hosts."
      },
      {
        "id": "SOC-1062-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1062, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1062-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The deployment record shows one connector still references the previous credential version. Approved connector service retries every 30 seconds; there are no unknown interactive sign-ins or new source hosts."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "monitor"
      ],
      "evidence": [
        "SOC-1062-e2",
        "SOC-1062-e3",
        "SOC-1062-e4"
      ],
      "explanation": "An incomplete credential rollout explains the failures. Route to IT or application support to update the secret reference securely and monitor recovery. Never expose service-account credentials in notes."
    }
  },
  {
    "id": "SOC-1063",
    "title": "Emergency administrator used outside change window",
    "category": "Identity",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Identity monitoring",
    "user": "Quinn Ali",
    "host": "LAB-017",
    "time": "11:00",
    "description": "A privileged account authenticates unexpectedly. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1063-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1063 subject=Quinn Ali asset=LAB-017\nSource: Identity monitoring\nA privileged account authenticates unexpectedly.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1063-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Emergency administrator signs in from an unmanaged device outside the approved incident window."
      },
      {
        "id": "SOC-1063-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "On-call incident commander confirms no emergency access was authorized."
      },
      {
        "id": "SOC-1063-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The session disables audit forwarding and creates a second global administrator; no matching change ticket exists."
      },
      {
        "id": "SOC-1063-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1063, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1063-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. On-call incident commander confirms no emergency access was authorized. The session disables audit forwarding and creates a second global administrator; no matching change ticket exists."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "reset",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1063-e2",
        "SOC-1063-e3",
        "SOC-1063-e4"
      ],
      "explanation": "Unauthorized privileged access and changes establish a critical compromise. Revoke the session and unauthorized privileges, secure the emergency account, and escalate immediately. Preserve independent audit records before remediation."
    }
  },
  {
    "id": "SOC-1064",
    "title": "International sign-in during approved travel",
    "category": "Identity",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Identity monitoring",
    "user": "Drew Carter",
    "host": "LAB-018",
    "time": "11:00",
    "description": "A location anomaly fires for an employee abroad. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1064-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1064 subject=Drew Carter asset=LAB-018\nSource: Identity monitoring\nA location anomaly fires for an employee abroad.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1064-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Sign-in uses the usual managed laptop and FIDO2 authentication with no factor changes."
      },
      {
        "id": "SOC-1064-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Travel approval records the employee in the reported country during this period."
      },
      {
        "id": "SOC-1064-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee confirms the access and application activity; no unexplained concurrent sessions exist."
      },
      {
        "id": "SOC-1064-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1064, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1064-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Travel approval records the employee in the reported country during this period. Employee confirms the access and application activity; no unexplained concurrent sessions exist."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1064-e2",
        "SOC-1064-e3",
        "SOC-1064-e4"
      ],
      "explanation": "The verified travel and consistent device explain the location change. Do not reset credentials solely because a sign-in is international."
    }
  },
  {
    "id": "SOC-1065",
    "title": "Identity provider certificate changed",
    "category": "Identity",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Identity monitoring",
    "user": "Skyler Park",
    "host": "LAB-019",
    "time": "11:00",
    "description": "A federation configuration change appears outside normal maintenance. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1065-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1065 subject=Skyler Park asset=LAB-019\nSource: Identity monitoring\nA federation configuration change appears outside normal maintenance.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1065-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Audit identifies a new federation signing certificate uploaded by a session from an unknown device."
      },
      {
        "id": "SOC-1065-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The IAM change calendar has no certificate rotation; certificate thumbprint is absent from the approved key inventory."
      },
      {
        "id": "SOC-1065-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "IAM owner denies the change, and new federated sessions appear using the unauthorized certificate."
      },
      {
        "id": "SOC-1065-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1065, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1065-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The IAM change calendar has no certificate rotation; certificate thumbprint is absent from the approved key inventory. IAM owner denies the change, and new federated sessions appear using the unauthorized certificate."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1065-e2",
        "SOC-1065-e3",
        "SOC-1065-e4"
      ],
      "explanation": "An unauthorized federation trust change can enable forged authentication. Escalate to the identity team, revoke the unauthorized trust and sessions through a controlled recovery, and secure the account used for the change. Avoid treating this as only one user password problem."
    }
  },
  {
    "id": "SOC-1066",
    "title": "Personal recovery address added to corporate account",
    "category": "Identity",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Identity monitoring",
    "user": "Robin Diaz",
    "host": "LAB-020",
    "time": "11:00",
    "description": "Account monitoring flags a recovery setting update. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1066-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1066 subject=Robin Diaz asset=LAB-020\nSource: Identity monitoring\nAccount monitoring flags a recovery setting update.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1066-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A new recovery address at external-mail.example is added from an unfamiliar session."
      },
      {
        "id": "SOC-1066-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The employee denies changing recovery details or using that address."
      },
      {
        "id": "SOC-1066-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Audit shows a password-reset attempt through the new recovery method five minutes later."
      },
      {
        "id": "SOC-1066-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1066, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1066-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The employee denies changing recovery details or using that address. Audit shows a password-reset attempt through the new recovery method five minutes later."
      }
    ],
    "hints": [
      "Compare device, session, factor, and authorization records rather than location alone.",
      "Distinguish password failure, password success with denied MFA, authenticated access, and token reuse.",
      "Check whether recovery settings, factors, grants, or trust changes need revocation in addition to sessions."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1066-e2",
        "SOC-1066-e3",
        "SOC-1066-e4"
      ],
      "explanation": "The unauthorized recovery method creates an account-takeover path. Revoke the added method and sessions, reset credentials, and escalate to determine what the unfamiliar session accessed."
    }
  },
  {
    "id": "SOC-1067",
    "title": "Unsigned updater starts outbound connections",
    "category": "Malware",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Malware monitoring",
    "user": "Riley Adams",
    "host": "LAB-021",
    "time": "11:00",
    "description": "Endpoint monitoring flags a newly installed updater. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1067-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1067 subject=Riley Adams asset=LAB-021\nSource: Malware monitoring\nEndpoint monitoring flags a newly installed updater.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1067-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A user downloaded updater.exe from driver-helper.example; the binary is unsigned and not in approved software inventory."
      },
      {
        "id": "SOC-1067-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated analysis identifies a credential-stealing routine and callback to driver-helper.example/collect."
      },
      {
        "id": "SOC-1067-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Execution telemetry shows the binary ran and opened browser credential storage before the alert."
      },
      {
        "id": "SOC-1067-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1067, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1067-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated analysis identifies a credential-stealing routine and callback to driver-helper.example/collect. Execution telemetry shows the binary ran and opened browser credential storage before the alert."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1067-e2",
        "SOC-1067-e3",
        "SOC-1067-e4"
      ],
      "explanation": "The simulated artifact behavior and confirmed execution support an infostealer incident. Isolate the affected endpoint, block the confirmed destination, and escalate for credential exposure assessment and recovery."
    }
  },
  {
    "id": "SOC-1068",
    "title": "Documents acquire an unfamiliar extension",
    "category": "Malware",
    "difficulty": "Intermediate",
    "severity": "Critical",
    "source": "Malware monitoring",
    "user": "Noah Ellis",
    "host": "LAB-022",
    "time": "11:00",
    "description": "Multiple users report files becoming unreadable. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1068-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1068 subject=Noah Ellis asset=LAB-022\nSource: Malware monitoring\nMultiple users report files becoming unreadable.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1068-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "One process rewrites thousands of files and appends .lockedlab within two minutes."
      },
      {
        "id": "SOC-1068-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "A ransom note appears beside modified files; shadow-copy deletion is recorded before the rewrite."
      },
      {
        "id": "SOC-1068-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Affected users cannot open the original documents; no approved encryption or migration job is active."
      },
      {
        "id": "SOC-1068-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1068, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1068-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. A ransom note appears beside modified files; shadow-copy deletion is recorded before the rewrite. Affected users cannot open the original documents; no approved encryption or migration job is active."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "escalate"
      ],
      "evidence": [
        "SOC-1068-e2",
        "SOC-1068-e3",
        "SOC-1068-e4"
      ],
      "explanation": "The mass modification, ransom note, and recovery disruption establish ransomware activity. Isolate affected systems and escalate immediately for incident coordination and recovery. Do not delete evidence or promise that paying restores files."
    }
  },
  {
    "id": "SOC-1069",
    "title": "Security agent flags an approved admin tool",
    "category": "Malware",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Malware monitoring",
    "user": "Avery Singh",
    "host": "LAB-023",
    "time": "11:00",
    "description": "An endpoint alert identifies remote-administration software. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1069-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1069 subject=Avery Singh asset=LAB-023\nSource: Malware monitoring\nAn endpoint alert identifies remote-administration software.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1069-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Executable signature and hash match the approved IT tool inventory."
      },
      {
        "id": "SOC-1069-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Installation and connection occur within a documented support session on the assigned host."
      },
      {
        "id": "SOC-1069-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Both the employee and named technician confirm the authorized support task and session identifier."
      },
      {
        "id": "SOC-1069-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1069, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1069-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Installation and connection occur within a documented support session on the assigned host. Both the employee and named technician confirm the authorized support task and session identifier."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1069-e2",
        "SOC-1069-e3",
        "SOC-1069-e4"
      ],
      "explanation": "A remote-administration tool can be abused, but this instance matches a verified support session and trusted inventory. Close as benign without blocking authorized support."
    }
  },
  {
    "id": "SOC-1070",
    "title": "Browser extension reads every visited page",
    "category": "Malware",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Malware monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-024",
    "time": "11:00",
    "description": "An employee installs a coupon extension on a work browser. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1070-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1070 subject=Morgan Rivera asset=LAB-024\nSource: Malware monitoring\nAn employee installs a coupon extension on a work browser.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1070-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "New extension ShoppingAssist requests read-and-change access to all sites and is absent from the approved extension inventory."
      },
      {
        "id": "SOC-1070-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated extension review finds code that transmits page contents and entered form values to extension-sync.example."
      },
      {
        "id": "SOC-1070-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Browser telemetry confirms the extension was enabled during corporate mail and document access."
      },
      {
        "id": "SOC-1070-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1070, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1070-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated extension review finds code that transmits page contents and entered form values to extension-sync.example. Browser telemetry confirms the extension was enabled during corporate mail and document access."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1070-e2",
        "SOC-1070-e3",
        "SOC-1070-e4"
      ],
      "explanation": "The extension exfiltrates browser content and was active during sensitive work. Contain the endpoint, block the collection service, revoke the extension and affected sessions through the response team, and assess exposure."
    }
  },
  {
    "id": "SOC-1071",
    "title": "Trusted process loads an unexpected library",
    "category": "Malware",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Malware monitoring",
    "user": "Casey Kim",
    "host": "LAB-025",
    "time": "11:00",
    "description": "EDR records an unusual library loaded by a signed application. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1071-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1071 subject=Casey Kim asset=LAB-025\nSource: Malware monitoring\nEDR records an unusual library loaded by a signed application.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1071-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Signed analytics.exe launches from a user-writable downloads folder and loads an adjacent unsigned helper.dll."
      },
      {
        "id": "SOC-1071-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated library analysis identifies injected code and callback to analytics-update.example; the vendor release contains no such library."
      },
      {
        "id": "SOC-1071-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The loaded library opens another process and creates a logon autorun entry; execution occurred."
      },
      {
        "id": "SOC-1071-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1071, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1071-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated library analysis identifies injected code and callback to analytics-update.example; the vendor release contains no such library. The loaded library opens another process and creates a logon autorun entry; execution occurred."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1071-e2",
        "SOC-1071-e3",
        "SOC-1071-e4"
      ],
      "explanation": "This is supported DLL sideloading, not proof that the signed vendor application itself is malicious. Isolate the endpoint, block the callback, and escalate the unsigned library execution and persistence."
    }
  },
  {
    "id": "SOC-1072",
    "title": "Cryptominer on a build agent",
    "category": "Malware",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Malware monitoring",
    "user": "Jamie Ross",
    "host": "LAB-026",
    "time": "11:00",
    "description": "A build host has sustained unexpected CPU usage. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1072-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1072 subject=Jamie Ross asset=LAB-026\nSource: Malware monitoring\nA build host has sustained unexpected CPU usage.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1072-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A process named build-cache consumes 95 percent CPU and runs outside the build runner directory."
      },
      {
        "id": "SOC-1072-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Outbound traffic connects to mining-pool.example using a mining protocol; this destination is not an approved build dependency."
      },
      {
        "id": "SOC-1072-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The job owner confirms no mining workload; a persistence task starts the process after each reboot."
      },
      {
        "id": "SOC-1072-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1072, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1072-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Outbound traffic connects to mining-pool.example using a mining protocol; this destination is not an approved build dependency. The job owner confirms no mining workload; a persistence task starts the process after each reboot."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1072-e2",
        "SOC-1072-e3",
        "SOC-1072-e4"
      ],
      "explanation": "The unauthorized mining process, pool traffic, and persistence establish compromise. Contain the build agent and investigate how it was introduced; high CPU alone would not be enough."
    }
  },
  {
    "id": "SOC-1073",
    "title": "In-memory script on a workstation",
    "category": "Malware",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Malware monitoring",
    "user": "Quinn Ali",
    "host": "LAB-027",
    "time": "11:00",
    "description": "An EDR alert reports suspicious memory execution. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1073-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1073 subject=Quinn Ali asset=LAB-027\nSource: Malware monitoring\nAn EDR alert reports suspicious memory execution.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1073-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "An Office child process launches a script interpreter that loads a payload into memory without writing an executable."
      },
      {
        "id": "SOC-1073-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The memory sample contains a command channel to office-cache.example; simulated analysis corroborates remote-command behavior."
      },
      {
        "id": "SOC-1073-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Telemetry shows the payload enumerating shares and accessing a credential-sensitive process; prevention mode was disabled."
      },
      {
        "id": "SOC-1073-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1073, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1073-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The memory sample contains a command channel to office-cache.example; simulated analysis corroborates remote-command behavior. Telemetry shows the payload enumerating shares and accessing a credential-sensitive process; prevention mode was disabled."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1073-e2",
        "SOC-1073-e3",
        "SOC-1073-e4"
      ],
      "explanation": "No file on disk does not mean no execution. The process chain, memory behavior, and callback support a fileless compromise. Preserve volatile evidence where feasible through incident response and contain the endpoint."
    }
  },
  {
    "id": "SOC-1074",
    "title": "Malicious download blocked before execution",
    "category": "Malware",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Malware monitoring",
    "user": "Drew Carter",
    "host": "LAB-028",
    "time": "11:00",
    "description": "Web protection alerts on an executable download. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1074-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1074 subject=Drew Carter asset=LAB-028\nSource: Malware monitoring\nWeb protection alerts on an executable download.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1074-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Proxy denies the response body for tools-download.example/setup.exe before any bytes reach the client."
      },
      {
        "id": "SOC-1074-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "No file creation, process execution, or related child process exists on the endpoint."
      },
      {
        "id": "SOC-1074-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Simulated sample reputation confirms the requested executable is a trojan; the employee only attempted the download."
      },
      {
        "id": "SOC-1074-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1074, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1074-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. No file creation, process execution, or related child process exists on the endpoint. Simulated sample reputation confirms the requested executable is a trojan; the employee only attempted the download."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "educate"
      ],
      "evidence": [
        "SOC-1074-e2",
        "SOC-1074-e3",
        "SOC-1074-e4"
      ],
      "explanation": "The download attempt is malicious but successfully prevented. Maintain the confirmed domain block and guide the employee. Do not claim an infected endpoint or apply isolation without execution evidence."
    }
  },
  {
    "id": "SOC-1075",
    "title": "Security agent disabled before payload launch",
    "category": "Malware",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Malware monitoring",
    "user": "Skyler Park",
    "host": "LAB-029",
    "time": "11:00",
    "description": "Endpoint telemetry stops after a suspicious administrative action. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1075-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1075 subject=Skyler Park asset=LAB-029\nSource: Malware monitoring\nEndpoint telemetry stops after a suspicious administrative action.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1075-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "An unknown scheduled task runs with elevated privileges and stops the security service."
      },
      {
        "id": "SOC-1075-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Independent network telemetry then shows the host contacting payload-stage.example and initiating SMB connections to several peers."
      },
      {
        "id": "SOC-1075-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "IT denies an agent maintenance task, and a peer endpoint records a payload copied from the affected host."
      },
      {
        "id": "SOC-1075-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1075, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1075-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Independent network telemetry then shows the host contacting payload-stage.example and initiating SMB connections to several peers. IT denies an agent maintenance task, and a peer endpoint records a payload copied from the affected host."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1075-e2",
        "SOC-1075-e3",
        "SOC-1075-e4"
      ],
      "explanation": "Defense evasion followed by staging and propagation establishes an active incident. Isolate affected hosts, block the confirmed staging destination, and coordinate response using independent telemetry while endpoint visibility is impaired."
    }
  },
  {
    "id": "SOC-1076",
    "title": "Malware test string in a training folder",
    "category": "Malware",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Malware monitoring",
    "user": "Robin Diaz",
    "host": "LAB-030",
    "time": "11:00",
    "description": "A security product quarantines a harmless test artifact. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1076-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1076 subject=Robin Diaz asset=LAB-030\nSource: Malware monitoring\nA security product quarantines a harmless test artifact.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1076-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Detection names the industry-standard antivirus test string, not an executable malware family."
      },
      {
        "id": "SOC-1076-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Security training ticket authorizes the detection exercise on this specific workstation and time."
      },
      {
        "id": "SOC-1076-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Trainer confirms the file was created for the documented test; no suspicious processes or network activity occurred."
      },
      {
        "id": "SOC-1076-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1076, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1076-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Security training ticket authorizes the detection exercise on this specific workstation and time. Trainer confirms the file was created for the documented test; no suspicious processes or network activity occurred."
      }
    ],
    "hints": [
      "Determine whether the suspicious artifact was blocked, only downloaded, or actually executed.",
      "Correlate the process chain, persistence, network behavior, and approved software inventory.",
      "Match containment to established execution and preserve evidence; resource usage alone is not proof of malware."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1076-e2",
        "SOC-1076-e3",
        "SOC-1076-e4"
      ],
      "explanation": "A verified harmless detection-test artifact validates the security control. The authorization and artifact identity explain the alert; no malware response is needed."
    }
  },
  {
    "id": "SOC-1077",
    "title": "Internal port sweep from a workstation",
    "category": "Network",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Network monitoring",
    "user": "Riley Adams",
    "host": "LAB-031",
    "time": "11:00",
    "description": "Network detection observes many connection attempts. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1077-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1077 subject=Riley Adams asset=LAB-031\nSource: Network monitoring\nNetwork detection observes many connection attempts.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1077-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A sales workstation attempts 300 destination ports across 40 internal hosts in five minutes."
      },
      {
        "id": "SOC-1077-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Process owner is an unapproved scanning binary started from the user downloads folder."
      },
      {
        "id": "SOC-1077-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee and vulnerability-management team deny an authorized assessment; no approved scan window exists."
      },
      {
        "id": "SOC-1077-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1077, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1077-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Process owner is an unapproved scanning binary started from the user downloads folder. Employee and vulnerability-management team deny an authorized assessment; no approved scan window exists."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "escalate"
      ],
      "evidence": [
        "SOC-1077-e2",
        "SOC-1077-e3",
        "SOC-1077-e4"
      ],
      "explanation": "An unauthorized scan from a user workstation is suspicious activity requiring containment and investigation. The scope and process evidence distinguish it from a routine single connection failure."
    }
  },
  {
    "id": "SOC-1078",
    "title": "Scheduled vulnerability scanner triggers IDS",
    "category": "Network",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Network monitoring",
    "user": "Noah Ellis",
    "host": "LAB-032",
    "time": "11:00",
    "description": "IDS reports scanning against server subnets. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1078-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1078 subject=Noah Ellis asset=LAB-032\nSource: Network monitoring\nIDS reports scanning against server subnets.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1078-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Source IP matches the approved vulnerability-scanner inventory."
      },
      {
        "id": "SOC-1078-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Scan timestamp and targets exactly match the scheduled assessment record."
      },
      {
        "id": "SOC-1078-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The security testing owner confirms the scan job identifier and scope."
      },
      {
        "id": "SOC-1078-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1078, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1078-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Scan timestamp and targets exactly match the scheduled assessment record. The security testing owner confirms the scan job identifier and scope."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1078-e2",
        "SOC-1078-e3",
        "SOC-1078-e4"
      ],
      "explanation": "The scanning is authorized and matches the documented scope. Preserve the context and close without blocking the scanner."
    }
  },
  {
    "id": "SOC-1079",
    "title": "DNS queries carry long encoded labels",
    "category": "Network",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Network monitoring",
    "user": "Avery Singh",
    "host": "LAB-033",
    "time": "11:00",
    "description": "DNS monitoring detects unusual query structure. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1079-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1079 subject=Avery Singh asset=LAB-033\nSource: Network monitoring\nDNS monitoring detects unusual query structure.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1079-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "One endpoint sends thousands of unique 180-character DNS labels to tunnel-cache.example every minute."
      },
      {
        "id": "SOC-1079-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "An unapproved process constructs the labels from local document contents."
      },
      {
        "id": "SOC-1079-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Simulated packet reconstruction decodes fragments of an internal report; resolver allows the queries."
      },
      {
        "id": "SOC-1079-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1079, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1079-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. An unapproved process constructs the labels from local document contents. Simulated packet reconstruction decodes fragments of an internal report; resolver allows the queries."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1079-e2",
        "SOC-1079-e3",
        "SOC-1079-e4"
      ],
      "explanation": "Evidence connects DNS labels to internal file content, supporting DNS tunneling and data leakage. Isolate the source endpoint, block the confirmed domain through supported controls, and assess the scope of transmitted data."
    }
  },
  {
    "id": "SOC-1080",
    "title": "Traffic spike after a product release",
    "category": "Network",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "Network monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-034",
    "time": "11:00",
    "description": "Network monitoring detects increased outbound bandwidth. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1080-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1080 subject=Morgan Rivera asset=LAB-034\nSource: Network monitoring\nNetwork monitoring detects increased outbound bandwidth.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1080-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Traffic destination is the approved software distribution CDN and all transfers are signed update packages."
      },
      {
        "id": "SOC-1080-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Managed update agent performs the transfers; no new process or unknown destination is observed."
      },
      {
        "id": "SOC-1080-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Release schedule shows a company-wide rollout at the alert time; volumes match package sizes and endpoint count."
      },
      {
        "id": "SOC-1080-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1080, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1080-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Managed update agent performs the transfers; no new process or unknown destination is observed. Release schedule shows a company-wide rollout at the alert time; volumes match package sizes and endpoint count."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1080-e2",
        "SOC-1080-e3",
        "SOC-1080-e4"
      ],
      "explanation": "The documented release and approved update process explain the bandwidth increase. Volume alone is not proof of exfiltration."
    }
  },
  {
    "id": "SOC-1081",
    "title": "Rare TLS destination with regular beacon timing",
    "category": "Network",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Network monitoring",
    "user": "Casey Kim",
    "host": "LAB-035",
    "time": "11:00",
    "description": "A proxy alert flags recurring connections to a new host. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1081-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1081 subject=Casey Kim asset=LAB-035\nSource: Network monitoring\nA proxy alert flags recurring connections to a new host.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1081-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "The same endpoint contacts status-relay.example every 45 seconds throughout the night, including idle periods."
      },
      {
        "id": "SOC-1081-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Connections belong to an unsigned background process with an undocumented logon task."
      },
      {
        "id": "SOC-1081-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Simulated packet and process analysis identifies command polling and responses to remote instructions; no approved software uses this destination."
      },
      {
        "id": "SOC-1081-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1081, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1081-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Connections belong to an unsigned background process with an undocumented logon task. Simulated packet and process analysis identifies command polling and responses to remote instructions; no approved software uses this destination."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1081-e2",
        "SOC-1081-e3",
        "SOC-1081-e4"
      ],
      "explanation": "Regularity alone is not conclusive, but command-channel behavior, unsigned execution, and persistence establish a beaconing compromise. Contain and investigate before removing artifacts."
    }
  },
  {
    "id": "SOC-1082",
    "title": "Encrypted outbound tunnel from a database server",
    "category": "Network",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Network monitoring",
    "user": "Jamie Ross",
    "host": "LAB-036",
    "time": "11:00",
    "description": "A server establishes a long-lived outbound connection. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1082-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1082 subject=Jamie Ross asset=LAB-036\nSource: Network monitoring\nA server establishes a long-lived outbound connection.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1082-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Database host opens an SSH tunnel to 203.0.113.90; this address is not in the approved administration inventory."
      },
      {
        "id": "SOC-1082-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "An unknown service account launches the tunnel after reading database export files."
      },
      {
        "id": "SOC-1082-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Database owner denies the export and tunnel; network telemetry records large outbound transfers on the tunnel."
      },
      {
        "id": "SOC-1082-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1082, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1082-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. An unknown service account launches the tunnel after reading database export files. Database owner denies the export and tunnel; network telemetry records large outbound transfers on the tunnel."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1082-e2",
        "SOC-1082-e3",
        "SOC-1082-e4"
      ],
      "explanation": "The unauthorized export and tunnel support data theft. Coordinate server containment, block the confirmed destination, revoke unauthorized access, and preserve export and connection evidence. Encryption does not itself prove or disprove legitimacy."
    }
  },
  {
    "id": "SOC-1083",
    "title": "DNS failures interrupt employee browsing",
    "category": "Network",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Network monitoring",
    "user": "Quinn Ali",
    "host": "LAB-037",
    "time": "11:00",
    "description": "Help desk reports intermittent website failures. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1083-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1083 subject=Quinn Ali asset=LAB-037\nSource: Network monitoring\nHelp desk reports intermittent website failures.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1083-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "DNS resolver returns SERVFAIL for many ordinary domains; no unusual query labels appear."
      },
      {
        "id": "SOC-1083-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Infrastructure monitoring shows a resolver outage beginning at the same time."
      },
      {
        "id": "SOC-1083-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Affected hosts show healthy agents and unchanged DNS settings; the issue affects multiple departments."
      },
      {
        "id": "SOC-1083-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1083, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1083-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Infrastructure monitoring shows a resolver outage beginning at the same time. Affected hosts show healthy agents and unchanged DNS settings; the issue affects multiple departments."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support"
      ],
      "evidence": [
        "SOC-1083-e2",
        "SOC-1083-e3",
        "SOC-1083-e4"
      ],
      "explanation": "An infrastructure outage explains the failures. Route to network support rather than treating ordinary failed lookups as a compromise."
    }
  },
  {
    "id": "SOC-1084",
    "title": "ARP mapping changes to an employee laptop",
    "category": "Network",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Network monitoring",
    "user": "Drew Carter",
    "host": "LAB-038",
    "time": "11:00",
    "description": "Network monitoring finds conflicting gateway mappings. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1084-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1084 subject=Drew Carter asset=LAB-038\nSource: Network monitoring\nNetwork monitoring finds conflicting gateway mappings.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1084-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Multiple clients receive unsolicited ARP responses mapping the gateway address to a workstation MAC."
      },
      {
        "id": "SOC-1084-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The workstation runs an unauthorized packet interception tool; its MAC matches the conflicting responses."
      },
      {
        "id": "SOC-1084-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Network team confirms no gateway replacement or failover event; affected clients route traffic to the workstation."
      },
      {
        "id": "SOC-1084-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1084, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1084-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The workstation runs an unauthorized packet interception tool; its MAC matches the conflicting responses. Network team confirms no gateway replacement or failover event; affected clients route traffic to the workstation."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "escalate"
      ],
      "evidence": [
        "SOC-1084-e2",
        "SOC-1084-e3",
        "SOC-1084-e4"
      ],
      "explanation": "The workstation impersonates the gateway and redirects client traffic. Isolate the offending device and escalate to network incident response to restore mappings and assess exposure."
    }
  },
  {
    "id": "SOC-1085",
    "title": "Repeated SMB logins across departments",
    "category": "Network",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Network monitoring",
    "user": "Skyler Park",
    "host": "LAB-039",
    "time": "11:00",
    "description": "A network rule flags cross-segment authentication. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1085-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1085 subject=Skyler Park asset=LAB-039\nSource: Network monitoring\nA network rule flags cross-segment authentication.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1085-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A workstation account authenticates to 18 servers with administrator privileges in seven minutes."
      },
      {
        "id": "SOC-1085-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Remote-service creation occurs on three targets using the same unapproved executable path."
      },
      {
        "id": "SOC-1085-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The account owner and system administrators deny any deployment or maintenance; approved tooling uses a different service identity."
      },
      {
        "id": "SOC-1085-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1085, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1085-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Remote-service creation occurs on three targets using the same unapproved executable path. The account owner and system administrators deny any deployment or maintenance; approved tooling uses a different service identity."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1085-e2",
        "SOC-1085-e3",
        "SOC-1085-e4"
      ],
      "explanation": "The unauthorized privileged logins and remote execution support lateral movement. Contain affected hosts, revoke sessions and reset the compromised identity, and scope the target systems through incident response."
    }
  },
  {
    "id": "SOC-1086",
    "title": "TLS inspection generates certificate warnings",
    "category": "Network",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Network monitoring",
    "user": "Robin Diaz",
    "host": "LAB-040",
    "time": "11:00",
    "description": "Employees report certificate warnings on many sites. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1086-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1086 subject=Robin Diaz asset=LAB-040\nSource: Network monitoring\nEmployees report certificate warnings on many sites.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1086-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Warnings begin after an approved proxy certificate rotation and affect managed hosts that missed the trust-policy update."
      },
      {
        "id": "SOC-1086-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Proxy issuer matches the documented company certificate; host clock is correct."
      },
      {
        "id": "SOC-1086-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Network team confirms the rollout issue and provides the approved trust-distribution procedure."
      },
      {
        "id": "SOC-1086-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1086, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1086-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Proxy issuer matches the documented company certificate; host clock is correct. Network team confirms the rollout issue and provides the approved trust-distribution procedure."
      }
    ],
    "hints": [
      "Identify the originating asset and process, then compare the traffic with approved schedules and inventory.",
      "Use payload or process evidence to distinguish ordinary transfers from scanning, tunneling, interception, or command channels.",
      "State which connections succeeded and which were denied before deciding the response scope."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "educate"
      ],
      "evidence": [
        "SOC-1086-e2",
        "SOC-1086-e3",
        "SOC-1086-e4"
      ],
      "explanation": "A managed trust deployment failure explains the warnings. Use the approved certificate distribution process and advise employees not to bypass warnings or disable TLS verification."
    }
  },
  {
    "id": "SOC-1087",
    "title": "Customer file sent to personal email",
    "category": "Data protection",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Data protection monitoring",
    "user": "Riley Adams",
    "host": "LAB-041",
    "time": "11:00",
    "description": "DLP detects a sensitive attachment leaving the organization. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1087-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1087 subject=Riley Adams asset=LAB-041\nSource: Data protection monitoring\nDLP detects a sensitive attachment leaving the organization.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1087-e2",
        "tool": "Email",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Message to a personal mailbox includes a customer export labeled restricted."
      },
      {
        "id": "SOC-1087-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Mail trace shows successful external delivery; DLP did not block the message."
      },
      {
        "id": "SOC-1087-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee confirms sending it to work from home despite policy; the data owner has not authorized external sharing."
      },
      {
        "id": "SOC-1087-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1087, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1087-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Mail trace shows successful external delivery; DLP did not block the message. Employee confirms sending it to work from home despite policy; the data owner has not authorized external sharing."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1087-e2",
        "SOC-1087-e3",
        "SOC-1087-e4"
      ],
      "explanation": "Confirmed unauthorized disclosure requires escalation and policy guidance even if the employee claims a convenient motive. Preserve the delivery evidence and coordinate retrieval and notification through the response team."
    }
  },
  {
    "id": "SOC-1088",
    "title": "Approved encrypted export triggers DLP",
    "category": "Data protection",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Data protection monitoring",
    "user": "Noah Ellis",
    "host": "LAB-042",
    "time": "11:00",
    "description": "A data transfer matches a sensitive-data rule. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1088-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1088 subject=Noah Ellis asset=LAB-042\nSource: Data protection monitoring\nA data transfer matches a sensitive-data rule.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1088-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Destination is the contracted payroll processor; the transfer uses its approved encrypted channel."
      },
      {
        "id": "SOC-1088-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The data owner approval and transfer ticket match the file, recipient, and retention requirements."
      },
      {
        "id": "SOC-1088-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Payroll owner confirms the scheduled monthly handoff; no other destinations received the file."
      },
      {
        "id": "SOC-1088-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1088, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1088-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The data owner approval and transfer ticket match the file, recipient, and retention requirements. Payroll owner confirms the scheduled monthly handoff; no other destinations received the file."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1088-e2",
        "SOC-1088-e3",
        "SOC-1088-e4"
      ],
      "explanation": "A policy detector can match an authorized transfer. Approval, destination, and scope establish legitimacy; do not block a documented business workflow."
    }
  },
  {
    "id": "SOC-1089",
    "title": "Public link created for a restricted folder",
    "category": "Data protection",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Data protection monitoring",
    "user": "Avery Singh",
    "host": "LAB-043",
    "time": "11:00",
    "description": "Cloud DLP flags a sharing-policy change. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1089-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1089 subject=Avery Singh asset=LAB-043\nSource: Data protection monitoring\nCloud DLP flags a sharing-policy change.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1089-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A restricted finance folder receives an anonymous public sharing link contrary to its policy."
      },
      {
        "id": "SOC-1089-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Access audit records downloads from two anonymous external clients after link creation."
      },
      {
        "id": "SOC-1089-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Folder owner says they intended to share with one coworker and did not authorize public access."
      },
      {
        "id": "SOC-1089-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1089, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1089-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Access audit records downloads from two anonymous external clients after link creation. Folder owner says they intended to share with one coworker and did not authorize public access."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1089-e2",
        "SOC-1089-e3",
        "SOC-1089-e4"
      ],
      "explanation": "This is a real unauthorized exposure even if accidental. Revoke the public link, escalate the confirmed external access, and explain restricted sharing. Malicious here describes the security incident, not proven intent by the employee."
    }
  },
  {
    "id": "SOC-1090",
    "title": "Bulk records exported before account termination",
    "category": "Data protection",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Data protection monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-044",
    "time": "11:00",
    "description": "Data monitoring flags unusual database downloads. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1090-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1090 subject=Morgan Rivera asset=LAB-044\nSource: Data protection monitoring\nData monitoring flags unusual database downloads.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1090-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "An employee account exports 80,000 restricted records outside its usual role and working hours."
      },
      {
        "id": "SOC-1090-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Account remains active despite an approved termination ticket effective two hours earlier."
      },
      {
        "id": "SOC-1090-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Data owner denies the export and confirms no handover task; external upload telemetry follows the export."
      },
      {
        "id": "SOC-1090-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1090, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1090-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Account remains active despite an approved termination ticket effective two hours earlier. Data owner denies the export and confirms no handover task; external upload telemetry follows the export."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1090-e2",
        "SOC-1090-e3",
        "SOC-1090-e4"
      ],
      "explanation": "Unauthorized post-termination access and export establish a serious data incident. Revoke access and sessions, secure the account, and escalate to determine destination and scope. Preserve evidence rather than inferring intent solely from employment status."
    }
  },
  {
    "id": "SOC-1091",
    "title": "USB copy of confidential design files",
    "category": "Data protection",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Data protection monitoring",
    "user": "Casey Kim",
    "host": "LAB-045",
    "time": "11:00",
    "description": "Endpoint DLP flags files copied to removable media. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1091-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1091 subject=Casey Kim asset=LAB-045\nSource: Data protection monitoring\nEndpoint DLP flags files copied to removable media.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1091-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A restricted project directory is copied to an unencrypted personal USB drive."
      },
      {
        "id": "SOC-1091-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee confirms the copy and has no exception approval; the drive has not left the office."
      },
      {
        "id": "SOC-1091-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "DLP operates in audit mode and the copy completed; asset handling policy forbids this destination."
      },
      {
        "id": "SOC-1091-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1091, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1091-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee confirms the copy and has no exception approval; the drive has not left the office. DLP operates in audit mode and the copy completed; asset handling policy forbids this destination."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1091-e2",
        "SOC-1091-e3",
        "SOC-1091-e4"
      ],
      "explanation": "The unauthorized copy is a policy incident even before the media leaves the building. Escalate for controlled recovery and handling, and guide the employee. Do not imply confirmed external theft."
    }
  },
  {
    "id": "SOC-1092",
    "title": "Compressed archive uploaded through a browser",
    "category": "Data protection",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Data protection monitoring",
    "user": "Jamie Ross",
    "host": "LAB-046",
    "time": "11:00",
    "description": "DLP misses an unusual encrypted upload. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1092-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1092 subject=Jamie Ross asset=LAB-046\nSource: Data protection monitoring\nDLP misses an unusual encrypted upload.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1092-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "User process compresses restricted engineering files into an encrypted archive."
      },
      {
        "id": "SOC-1092-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Proxy records completed upload of the archive to unapproved storage-drop.example; bytes match the archive size."
      },
      {
        "id": "SOC-1092-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The data owner denies approval and the user cannot provide an authorized transfer ticket."
      },
      {
        "id": "SOC-1092-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1092, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1092-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Proxy records completed upload of the archive to unapproved storage-drop.example; bytes match the archive size. The data owner denies approval and the user cannot provide an authorized transfer ticket."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1092-e2",
        "SOC-1092-e3",
        "SOC-1092-e4"
      ],
      "explanation": "Encryption can hide contents from inspection but does not authorize a transfer. The provenance and completed upload establish unauthorized disclosure. Block the destination and escalate for scope and recovery."
    }
  },
  {
    "id": "SOC-1093",
    "title": "Developer uploads synthetic test data",
    "category": "Data protection",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Data protection monitoring",
    "user": "Quinn Ali",
    "host": "LAB-047",
    "time": "11:00",
    "description": "DLP flags a developer dataset. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1093-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1093 subject=Quinn Ali asset=LAB-047\nSource: Data protection monitoring\nDLP flags a developer dataset.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1093-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Destination is an approved testing workspace and the upload is tied to a documented test run."
      },
      {
        "id": "SOC-1093-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Dataset validation confirms every record is generated synthetic data with no production identifiers."
      },
      {
        "id": "SOC-1093-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Data owner confirms the test dataset and approved workspace; file hash matches the validated artifact."
      },
      {
        "id": "SOC-1093-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1093, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1093-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Dataset validation confirms every record is generated synthetic data with no production identifiers. Data owner confirms the test dataset and approved workspace; file hash matches the validated artifact."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1093-e2",
        "SOC-1093-e3",
        "SOC-1093-e4"
      ],
      "explanation": "The rule matched realistic synthetic records. Verified generation, hash, and destination establish an authorized test, not customer disclosure."
    }
  },
  {
    "id": "SOC-1094",
    "title": "Database export via an overprivileged reporting identity",
    "category": "Data protection",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Data protection monitoring",
    "user": "Drew Carter",
    "host": "LAB-048",
    "time": "11:00",
    "description": "Audit flags a reporting service reading restricted tables. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1094-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1094 subject=Drew Carter asset=LAB-048\nSource: Data protection monitoring\nAudit flags a reporting service reading restricted tables.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1094-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Reporting identity gains a new broad data-reader role through an undocumented permission change."
      },
      {
        "id": "SOC-1094-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The identity exports restricted tables unrelated to its approved report and transfers them to an external bucket."
      },
      {
        "id": "SOC-1094-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Report owner denies the permission change and export; the external bucket is not contracted or approved."
      },
      {
        "id": "SOC-1094-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1094, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1094-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The identity exports restricted tables unrelated to its approved report and transfers them to an external bucket. Report owner denies the permission change and export; the external bucket is not contracted or approved."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1094-e2",
        "SOC-1094-e3",
        "SOC-1094-e4"
      ],
      "explanation": "Excess permission enabled unauthorized export. Revoke the unauthorized grant through the response team and escalate the exposure. A non-human service identity can still be compromised or abused."
    }
  },
  {
    "id": "SOC-1095",
    "title": "Print job blocked by information protection",
    "category": "Data protection",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Data protection monitoring",
    "user": "Skyler Park",
    "host": "LAB-049",
    "time": "11:00",
    "description": "An employee cannot print a restricted document. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1095-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1095 subject=Skyler Park asset=LAB-049\nSource: Data protection monitoring\nAn employee cannot print a restricted document.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1095-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Information-protection policy blocks printing for this document label before a job reaches the printer."
      },
      {
        "id": "SOC-1095-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Document policy and user permissions match the approved configuration."
      },
      {
        "id": "SOC-1095-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee requested printing for convenience and has no exception; no workaround or external transfer occurred."
      },
      {
        "id": "SOC-1095-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1095, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1095-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Document policy and user permissions match the approved configuration. Employee requested printing for convenience and has no exception; no workaround or external transfer occurred."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "educate"
      ],
      "evidence": [
        "SOC-1095-e2",
        "SOC-1095-e3",
        "SOC-1095-e4"
      ],
      "explanation": "The protection control behaved as intended. Explain the policy and route legitimate access needs through support or the data owner. A blocked request alone does not establish unauthorized disclosure."
    }
  },
  {
    "id": "SOC-1096",
    "title": "Source repository contains a service credential",
    "category": "Data protection",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Data protection monitoring",
    "user": "Robin Diaz",
    "host": "LAB-050",
    "time": "11:00",
    "description": "Secret scanning finds an exposed configuration value. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1096-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1096 subject=Robin Diaz asset=LAB-050\nSource: Data protection monitoring\nSecret scanning finds an exposed configuration value.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1096-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Commit scan identifies a live service credential in a public repository; the secret fingerprint matches the approved vault record."
      },
      {
        "id": "SOC-1096-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Service audit shows new requests from an unknown source after the commit became public."
      },
      {
        "id": "SOC-1096-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Repository owner confirms the commit was accidental and the service owner denies the unknown requests."
      },
      {
        "id": "SOC-1096-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1096, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1096-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Service audit shows new requests from an unknown source after the commit became public. Repository owner confirms the commit was accidental and the service owner denies the unknown requests."
      }
    ],
    "hints": [
      "Check the data classification, destination, owner approval, and whether the transfer completed.",
      "Volume or a DLP match alone does not establish disclosure; synthetic datasets and approved channels require verification.",
      "Separate revoking exposure or credentials from assessing already completed access or transfer."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1096-e2",
        "SOC-1096-e3",
        "SOC-1096-e4"
      ],
      "explanation": "A live public secret with unauthorized use is a credential incident. Revoke and rotate it through the service owner, investigate usage, and guide the developer. Deleting the commit alone does not invalidate an exposed secret."
    }
  },
  {
    "id": "SOC-1097",
    "title": "Storage bucket made publicly readable",
    "category": "Cloud",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Cloud monitoring",
    "user": "Riley Adams",
    "host": "LAB-051",
    "time": "11:00",
    "description": "Cloud monitoring detects a bucket policy change. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1097-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1097 subject=Riley Adams asset=LAB-051\nSource: Cloud monitoring\nCloud monitoring detects a bucket policy change.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1097-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Bucket policy permits anonymous reads for a restricted document collection."
      },
      {
        "id": "SOC-1097-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Access logs show external anonymous downloads after the policy change."
      },
      {
        "id": "SOC-1097-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Storage owner denies approval and confirms the bucket should be private."
      },
      {
        "id": "SOC-1097-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1097, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1097-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Access logs show external anonymous downloads after the policy change. Storage owner denies approval and confirms the bucket should be private."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1097-e2",
        "SOC-1097-e3",
        "SOC-1097-e4"
      ],
      "explanation": "The public policy and confirmed downloads establish unauthorized cloud exposure. Revoke public access through controlled remediation and escalate the affected data scope."
    }
  },
  {
    "id": "SOC-1098",
    "title": "Temporary cloud access matches an approved job",
    "category": "Cloud",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Cloud monitoring",
    "user": "Noah Ellis",
    "host": "LAB-052",
    "time": "11:00",
    "description": "An unusual cloud role assumption is detected. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1098-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1098 subject=Noah Ellis asset=LAB-052\nSource: Cloud monitoring\nAn unusual cloud role assumption is detected.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1098-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Session originates from the approved CI workload identity using its expected audience and short-lived token."
      },
      {
        "id": "SOC-1098-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Role actions match a reviewed deployment plan and occur in the scheduled window."
      },
      {
        "id": "SOC-1098-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Deployment owner confirms the job identifier; no human credential or out-of-scope resource was used."
      },
      {
        "id": "SOC-1098-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1098, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1098-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Role actions match a reviewed deployment plan and occur in the scheduled window. Deployment owner confirms the job identifier; no human credential or out-of-scope resource was used."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1098-e2",
        "SOC-1098-e3",
        "SOC-1098-e4"
      ],
      "explanation": "The workload identity and reviewed actions explain the role assumption. A new session is not inherently a cloud compromise."
    }
  },
  {
    "id": "SOC-1099",
    "title": "Cloud audit trail disabled by an unknown session",
    "category": "Cloud",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Cloud monitoring",
    "user": "Avery Singh",
    "host": "LAB-053",
    "time": "11:00",
    "description": "Cloud defense monitoring detects logging changes. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1099-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1099 subject=Avery Singh asset=LAB-053\nSource: Cloud monitoring\nCloud defense monitoring detects logging changes.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1099-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "An administrator role is assumed from an unrecognized source with a long-lived access key."
      },
      {
        "id": "SOC-1099-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The session disables audit delivery, changes a key policy, and creates another administrator credential."
      },
      {
        "id": "SOC-1099-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Cloud owner denies any maintenance and confirms the source and key usage are unauthorized."
      },
      {
        "id": "SOC-1099-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1099, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1099-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The session disables audit delivery, changes a key policy, and creates another administrator credential. Cloud owner denies any maintenance and confirms the source and key usage are unauthorized."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1099-e2",
        "SOC-1099-e3",
        "SOC-1099-e4"
      ],
      "explanation": "Defense evasion and privilege persistence establish cloud control-plane compromise. Revoke affected keys and sessions, secure the initiating identity, and escalate with independent audit evidence and controlled recovery."
    }
  },
  {
    "id": "SOC-1100",
    "title": "Compute instances appear in an unused region",
    "category": "Cloud",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Cloud monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-054",
    "time": "11:00",
    "description": "Cost monitoring detects unexpected resources. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1100-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1100 subject=Morgan Rivera asset=LAB-054\nSource: Cloud monitoring\nCost monitoring detects unexpected resources.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1100-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Twenty GPU instances launch in an unapproved region under a service account."
      },
      {
        "id": "SOC-1100-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Instance traffic contacts mining-pool.example and cloud bills show continuous compute use."
      },
      {
        "id": "SOC-1100-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Cloud project owner denies approval; the account had no deployment job in this period."
      },
      {
        "id": "SOC-1100-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1100, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1100-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Instance traffic contacts mining-pool.example and cloud bills show continuous compute use. Cloud project owner denies approval; the account had no deployment job in this period."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1100-e2",
        "SOC-1100-e3",
        "SOC-1100-e4"
      ],
      "explanation": "Unauthorized resources with mining traffic indicate cloud credential abuse. Revoke the abused credentials, block the confirmed pool where supported, and coordinate resource containment and cost investigation."
    }
  },
  {
    "id": "SOC-1101",
    "title": "New firewall rule for approved monitoring",
    "category": "Cloud",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Cloud monitoring",
    "user": "Casey Kim",
    "host": "LAB-055",
    "time": "11:00",
    "description": "A cloud security rule opens a network path. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1101-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1101 subject=Casey Kim asset=LAB-055\nSource: Cloud monitoring\nA cloud security rule opens a network path.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1101-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Rule allows a single monitoring-source address to the documented metrics port, not general internet access."
      },
      {
        "id": "SOC-1101-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Approved change ticket specifies the exact source, destination, port, and expiration."
      },
      {
        "id": "SOC-1101-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Service owner confirms the monitoring integration and successful test; no broader rule was added."
      },
      {
        "id": "SOC-1101-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1101, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1101-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Approved change ticket specifies the exact source, destination, port, and expiration. Service owner confirms the monitoring integration and successful test; no broader rule was added."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1101-e2",
        "SOC-1101-e3",
        "SOC-1101-e4"
      ],
      "explanation": "The tightly scoped rule matches an approved integration. Evaluate actual rule scope rather than assuming every new ingress rule is malicious."
    }
  },
  {
    "id": "SOC-1102",
    "title": "Workload token reads secrets outside its namespace",
    "category": "Cloud",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Cloud monitoring",
    "user": "Jamie Ross",
    "host": "LAB-056",
    "time": "11:00",
    "description": "Container audit detects secret access across namespaces. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1102-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1102 subject=Jamie Ross asset=LAB-056\nSource: Cloud monitoring\nContainer audit detects secret access across namespaces.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1102-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A workload service identity uses its token to list secrets in a namespace outside its intended role."
      },
      {
        "id": "SOC-1102-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "An undocumented cluster-role binding grants broad access; the session reads production secret objects."
      },
      {
        "id": "SOC-1102-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Platform owner denies the binding and confirms the workload has no cross-namespace function."
      },
      {
        "id": "SOC-1102-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1102, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1102-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. An undocumented cluster-role binding grants broad access; the session reads production secret objects. Platform owner denies the binding and confirms the workload has no cross-namespace function."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1102-e2",
        "SOC-1102-e3",
        "SOC-1102-e4"
      ],
      "explanation": "The unauthorized privilege grant and secret reads establish a workload identity incident. Revoke the excessive binding and affected tokens, assess exposed secrets, and coordinate rotation through the platform response team."
    }
  },
  {
    "id": "SOC-1103",
    "title": "Object store receives unexpected external sharing",
    "category": "Cloud",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Cloud monitoring",
    "user": "Quinn Ali",
    "host": "LAB-057",
    "time": "11:00",
    "description": "A cloud collaboration policy changes overnight. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1103-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1103 subject=Quinn Ali asset=LAB-057\nSource: Cloud monitoring\nA cloud collaboration policy changes overnight.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1103-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Restricted objects receive a cross-account grant to an unknown external tenant."
      },
      {
        "id": "SOC-1103-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Change originates from an unfamiliar interactive session of a storage administrator."
      },
      {
        "id": "SOC-1103-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The administrator denies the session; object access logs confirm the external tenant read files."
      },
      {
        "id": "SOC-1103-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1103, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1103-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Change originates from an unfamiliar interactive session of a storage administrator. The administrator denies the session; object access logs confirm the external tenant read files."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1103-e2",
        "SOC-1103-e3",
        "SOC-1103-e4"
      ],
      "explanation": "Revoke the unauthorized cross-account grant and compromised sessions, reset the account, and escalate confirmed external access. Cross-account sharing is distinct from public access but can still expose data."
    }
  },
  {
    "id": "SOC-1104",
    "title": "Serverless function gains a new outbound destination",
    "category": "Cloud",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Cloud monitoring",
    "user": "Drew Carter",
    "host": "LAB-058",
    "time": "11:00",
    "description": "Monitoring detects a function behavior change. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1104-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1104 subject=Drew Carter asset=LAB-058\nSource: Cloud monitoring\nMonitoring detects a function behavior change.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1104-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Function code changes outside CI and now transmits request bodies to relay-function.example."
      },
      {
        "id": "SOC-1104-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Change used an access key from an unknown source; approved deployment identity was not involved."
      },
      {
        "id": "SOC-1104-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Function owner denies the edit and confirms request bodies contain restricted customer data."
      },
      {
        "id": "SOC-1104-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1104, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1104-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Change used an access key from an unknown source; approved deployment identity was not involved. Function owner denies the edit and confirms request bodies contain restricted customer data."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1104-e2",
        "SOC-1104-e3",
        "SOC-1104-e4"
      ],
      "explanation": "Unauthorized code modification creates a data-collection path. Revoke the changing identity, block the collection destination where feasible, and coordinate rollback and exposure assessment through incident response."
    }
  },
  {
    "id": "SOC-1105",
    "title": "Denied cloud calls after a permission reduction",
    "category": "Cloud",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Cloud monitoring",
    "user": "Skyler Park",
    "host": "LAB-059",
    "time": "11:00",
    "description": "An application emits authorization failures. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1105-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1105 subject=Skyler Park asset=LAB-059\nSource: Cloud monitoring\nAn application emits authorization failures.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1105-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Calls fail with access denied after an approved least-privilege role update."
      },
      {
        "id": "SOC-1105-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "All requests come from the usual workload identity and expected network location."
      },
      {
        "id": "SOC-1105-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Application owner confirms a required read permission was accidentally omitted; no successful unauthorized calls occurred."
      },
      {
        "id": "SOC-1105-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1105, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1105-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. All requests come from the usual workload identity and expected network location. Application owner confirms a required read permission was accidentally omitted; no successful unauthorized calls occurred."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "monitor"
      ],
      "evidence": [
        "SOC-1105-e2",
        "SOC-1105-e3",
        "SOC-1105-e4"
      ],
      "explanation": "A configuration regression explains the denied calls. Route the narrowly scoped permission correction through support and monitor recovery; do not grant broad administrator access."
    }
  },
  {
    "id": "SOC-1106",
    "title": "Container starts with an unauthorized privileged mount",
    "category": "Cloud",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Cloud monitoring",
    "user": "Robin Diaz",
    "host": "LAB-060",
    "time": "11:00",
    "description": "Runtime monitoring flags a privileged workload. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1106-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1106 subject=Robin Diaz asset=LAB-060\nSource: Cloud monitoring\nRuntime monitoring flags a privileged workload.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1106-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A pod created outside the deployment pipeline mounts the host filesystem and enables privileged mode."
      },
      {
        "id": "SOC-1106-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Runtime audit shows the container writing a host startup service and reading node credentials."
      },
      {
        "id": "SOC-1106-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Platform owner confirms no diagnostic authorization; image digest is absent from the trusted registry inventory."
      },
      {
        "id": "SOC-1106-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1106, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1106-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Runtime audit shows the container writing a host startup service and reading node credentials. Platform owner confirms no diagnostic authorization; image digest is absent from the trusted registry inventory."
      }
    ],
    "hints": [
      "Compare workload identity, role scope, deployment pipeline, and the approved change record.",
      "Correlate policy changes with actual resource access, credential use, or runtime behavior.",
      "Temporary tokens, grants, and trust relationships may require targeted revocation beyond a password reset."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1106-e2",
        "SOC-1106-e3",
        "SOC-1106-e4"
      ],
      "explanation": "The workload crosses the container boundary and accesses host credentials. Coordinate node isolation, revoke exposed credentials, and escalate to platform incident response. Deleting the pod alone may leave host persistence."
    }
  },
  {
    "id": "SOC-1107",
    "title": "SQL injection probes rejected by the gateway",
    "category": "Web application",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Web application monitoring",
    "user": "Riley Adams",
    "host": "LAB-061",
    "time": "11:00",
    "description": "WAF detects query-manipulation attempts. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1107-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1107 subject=Riley Adams asset=LAB-061\nSource: Web application monitoring\nWAF detects query-manipulation attempts.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1107-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Requests from 203.0.113.23 contain SQL-like operators and are rejected with 403 at the edge."
      },
      {
        "id": "SOC-1107-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Application logs contain no matching backend requests and database audit shows no new queries for those request IDs."
      },
      {
        "id": "SOC-1107-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The confirmed source continues the same attack pattern; no successful response or data return is observed."
      },
      {
        "id": "SOC-1107-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1107, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1107-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Application logs contain no matching backend requests and database audit shows no new queries for those request IDs. The confirmed source continues the same attack pattern; no successful response or data return is observed."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "monitor"
      ],
      "evidence": [
        "SOC-1107-e2",
        "SOC-1107-e3",
        "SOC-1107-e4"
      ],
      "explanation": "The attack attempts are real but the gateway prevented observed backend execution. Block the confirmed source where appropriate and monitor; do not claim database compromise from request strings alone."
    }
  },
  {
    "id": "SOC-1108",
    "title": "Unexpected database output after search request",
    "category": "Web application",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Web application monitoring",
    "user": "Noah Ellis",
    "host": "LAB-062",
    "time": "11:00",
    "description": "Application monitoring flags a suspicious search response. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1108-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1108 subject=Noah Ellis asset=LAB-062\nSource: Web application monitoring\nApplication monitoring flags a suspicious search response.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1108-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A crafted search request bypasses the WAF and returns a much larger 200 response than the normal endpoint baseline."
      },
      {
        "id": "SOC-1108-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Database audit correlates the request ID with an unauthorized query of customer credential metadata."
      },
      {
        "id": "SOC-1108-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Application owner confirms the query is not part of the search function and no security test was authorized."
      },
      {
        "id": "SOC-1108-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1108, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1108-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Database audit correlates the request ID with an unauthorized query of customer credential metadata. Application owner confirms the query is not part of the search function and no security test was authorized."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1108-e2",
        "SOC-1108-e3",
        "SOC-1108-e4"
      ],
      "explanation": "Correlated backend audit establishes successful injection and unauthorized access. Block the attack source or path through supported controls and escalate for application containment, scope, and a separate code remediation task."
    }
  },
  {
    "id": "SOC-1109",
    "title": "Uploaded image creates a server-side script",
    "category": "Web application",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Web application monitoring",
    "user": "Avery Singh",
    "host": "LAB-063",
    "time": "11:00",
    "description": "Web monitoring detects a suspicious upload. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1109-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1109 subject=Avery Singh asset=LAB-063\nSource: Web application monitoring\nWeb monitoring detects a suspicious upload.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1109-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Upload named avatar.png contains a server-side script and is stored in an executable web directory."
      },
      {
        "id": "SOC-1109-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Web worker starts a shell process when the uploaded path is requested; this is outside normal image processing."
      },
      {
        "id": "SOC-1109-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The shell process connects to web-relay.example and reads application configuration."
      },
      {
        "id": "SOC-1109-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1109, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1109-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Web worker starts a shell process when the uploaded path is requested; this is outside normal image processing. The shell process connects to web-relay.example and reads application configuration."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1109-e2",
        "SOC-1109-e3",
        "SOC-1109-e4"
      ],
      "explanation": "The uploaded artifact executed as a web shell and accessed configuration. Coordinate server isolation, block the callback, revoke exposed application secrets, and escalate. File extension alone did not prevent execution."
    }
  },
  {
    "id": "SOC-1110",
    "title": "Approved penetration test triggers WAF",
    "category": "Web application",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Web application monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-064",
    "time": "11:00",
    "description": "A burst of attack-like requests hits a staging service. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1110-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1110 subject=Morgan Rivera asset=LAB-064\nSource: Web application monitoring\nA burst of attack-like requests hits a staging service.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1110-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Source address matches the signed testing authorization and requests target only the named staging application."
      },
      {
        "id": "SOC-1110-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Timestamp, test identifiers, and rate match the documented test window."
      },
      {
        "id": "SOC-1110-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Security testing owner confirms the exact activity and scope; production logs show no corresponding probes."
      },
      {
        "id": "SOC-1110-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1110, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1110-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Timestamp, test identifiers, and rate match the documented test window. Security testing owner confirms the exact activity and scope; production logs show no corresponding probes."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1110-e2",
        "SOC-1110-e3",
        "SOC-1110-e4"
      ],
      "explanation": "Attack-like syntax can be part of authorized testing. Verified source, scope, and timing establish legitimacy; continue monitoring for out-of-scope activity."
    }
  },
  {
    "id": "SOC-1111",
    "title": "Application requests cloud metadata unexpectedly",
    "category": "Web application",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Web application monitoring",
    "user": "Casey Kim",
    "host": "LAB-065",
    "time": "11:00",
    "description": "A web request causes unusual server egress. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1111-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1111 subject=Casey Kim asset=LAB-065\nSource: Web application monitoring\nA web request causes unusual server egress.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1111-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A user-controlled image URL directs the backend to the cloud metadata endpoint."
      },
      {
        "id": "SOC-1111-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Correlated egress confirms the backend retrieved temporary role credentials; the requester then uses that role from an external source."
      },
      {
        "id": "SOC-1111-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Application owner confirms metadata access is not part of the feature and denies the subsequent role session."
      },
      {
        "id": "SOC-1111-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1111, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1111-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Correlated egress confirms the backend retrieved temporary role credentials; the requester then uses that role from an external source. Application owner confirms metadata access is not part of the feature and denies the subsequent role session."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1111-e2",
        "SOC-1111-e3",
        "SOC-1111-e4"
      ],
      "explanation": "Server-side request forgery led to credential exposure and unauthorized cloud access. Revoke affected sessions, block the confirmed attack source through appropriate controls, and escalate both application and cloud scope."
    }
  },
  {
    "id": "SOC-1112",
    "title": "Stored page content runs a credential prompt",
    "category": "Web application",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Web application monitoring",
    "user": "Jamie Ross",
    "host": "LAB-066",
    "time": "11:00",
    "description": "Users report a new sign-in popup on an internal application. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1112-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1112 subject=Jamie Ross asset=LAB-066\nSource: Web application monitoring\nUsers report a new sign-in popup on an internal application.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1112-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A submitted profile field contains executable markup and is rendered without escaping on other users pages."
      },
      {
        "id": "SOC-1112-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Browser telemetry shows the markup sending entered values to profile-check.example."
      },
      {
        "id": "SOC-1112-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Two users confirm entering credentials into the injected popup; the application owner denies adding a sign-in flow."
      },
      {
        "id": "SOC-1112-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1112, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1112-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Browser telemetry shows the markup sending entered values to profile-check.example. Two users confirm entering credentials into the injected popup; the application owner denies adding a sign-in flow."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1112-e2",
        "SOC-1112-e3",
        "SOC-1112-e4"
      ],
      "explanation": "Stored script injection is harvesting credentials. Block the collection endpoint, secure affected accounts, and escalate for content containment and a separate application fix. Resetting only the submitting account misses victims."
    }
  },
  {
    "id": "SOC-1113",
    "title": "Login errors follow an application rollout",
    "category": "Web application",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Web application monitoring",
    "user": "Quinn Ali",
    "host": "LAB-067",
    "time": "11:00",
    "description": "Web authentication failures rise after deployment. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1113-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1113 subject=Quinn Ali asset=LAB-067\nSource: Web application monitoring\nWeb authentication failures rise after deployment.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1113-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "The new application build changes its redirect URI and identity-provider logs reject the unregistered URI."
      },
      {
        "id": "SOC-1113-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "No unauthorized session or factor change occurs; all failed requests come from ordinary employees."
      },
      {
        "id": "SOC-1113-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Release owner confirms the mismatch and an approved configuration correction is pending."
      },
      {
        "id": "SOC-1113-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1113, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1113-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. No unauthorized session or factor change occurs; all failed requests come from ordinary employees. Release owner confirms the mismatch and an approved configuration correction is pending."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "monitor"
      ],
      "evidence": [
        "SOC-1113-e2",
        "SOC-1113-e3",
        "SOC-1113-e4"
      ],
      "explanation": "The release configuration explains the failures. Route the redirect registration correction through support and monitor recovery without weakening identity validation."
    }
  },
  {
    "id": "SOC-1114",
    "title": "Sequential document IDs expose another team data",
    "category": "Web application",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Web application monitoring",
    "user": "Drew Carter",
    "host": "LAB-068",
    "time": "11:00",
    "description": "Application audit sees an unusual series of downloads. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1114-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1114 subject=Drew Carter asset=LAB-068\nSource: Web application monitoring\nApplication audit sees an unusual series of downloads.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1114-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A normal employee session requests sequential document IDs belonging to a restricted finance group."
      },
      {
        "id": "SOC-1114-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Authorization audit shows 200 responses and returned finance file bytes despite the employee lacking that group membership."
      },
      {
        "id": "SOC-1114-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Finance owner denies sharing the documents and no delegated-access approval exists."
      },
      {
        "id": "SOC-1114-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1114, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1114-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Authorization audit shows 200 responses and returned finance file bytes despite the employee lacking that group membership. Finance owner denies sharing the documents and no delegated-access approval exists."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1114-e2",
        "SOC-1114-e3",
        "SOC-1114-e4"
      ],
      "explanation": "The access-control failure enabled unauthorized data access. Revoke the abusing session or access through response procedures and escalate scope and application remediation. Authentication alone does not establish authorization."
    }
  },
  {
    "id": "SOC-1115",
    "title": "Credential stuffing against the customer portal",
    "category": "Web application",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Web application monitoring",
    "user": "Skyler Park",
    "host": "LAB-069",
    "time": "11:00",
    "description": "Web monitoring detects mass login attempts. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1115-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1115 subject=Skyler Park asset=LAB-069\nSource: Web application monitoring\nWeb monitoring detects mass login attempts.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1115-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Thousands of username-password pairs arrive from a confirmed automation source with highly repetitive client behavior."
      },
      {
        "id": "SOC-1115-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Every attempt fails or receives a denied challenge; no successful session appears in the correlated interval."
      },
      {
        "id": "SOC-1115-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Rate limiting begins blocking the source and customer session volume remains normal."
      },
      {
        "id": "SOC-1115-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1115, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1115-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Every attempt fails or receives a denied challenge; no successful session appears in the correlated interval. Rate limiting begins blocking the source and customer session volume remains normal."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "monitor"
      ],
      "evidence": [
        "SOC-1115-e2",
        "SOC-1115-e3",
        "SOC-1115-e4"
      ],
      "explanation": "Credential-stuffing attempts are confirmed but no successful takeover is established. Maintain source and rate controls and monitor for successful sessions; do not assume every targeted account is compromised."
    }
  },
  {
    "id": "SOC-1116",
    "title": "Build dependency sends deployment secrets externally",
    "category": "Web application",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Web application monitoring",
    "user": "Robin Diaz",
    "host": "LAB-070",
    "time": "11:00",
    "description": "A web build connects to a new domain. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1116-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1116 subject=Robin Diaz asset=LAB-070\nSource: Web application monitoring\nA web build connects to a new domain.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1116-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A recently resolved dependency version contains an install hook absent from its previously approved release."
      },
      {
        "id": "SOC-1116-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The hook reads deployment environment variables and transmits them to build-helper.example."
      },
      {
        "id": "SOC-1116-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Dependency maintainer confirms the release was unauthorized; CI logs show the hook executed in a job with production credentials."
      },
      {
        "id": "SOC-1116-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1116, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1116-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The hook reads deployment environment variables and transmits them to build-helper.example. Dependency maintainer confirms the release was unauthorized; CI logs show the hook executed in a job with production credentials."
      }
    ],
    "hints": [
      "Correlate edge request IDs with backend execution and returned data.",
      "Distinguish blocked probes, authorized tests, and successful application or build compromise.",
      "Assess exposed sessions or secrets separately from the code defect; a code fix alone does not revoke credentials."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1116-e2",
        "SOC-1116-e3",
        "SOC-1116-e4"
      ],
      "explanation": "The supply-chain payload executed with access to production secrets. Revoke exposed credentials, block the collection domain, and escalate release and deployment integrity. Removing the dependency does not rotate stolen secrets."
    }
  },
  {
    "id": "SOC-1117",
    "title": "Unexpected remote support on an employee laptop",
    "category": "Endpoint",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Endpoint monitoring",
    "user": "Riley Adams",
    "host": "LAB-071",
    "time": "11:00",
    "description": "An employee sees a remote-control session they did not authorize. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1117-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1117 subject=Riley Adams asset=LAB-071\nSource: Endpoint monitoring\nAn employee sees a remote-control session they did not authorize.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1117-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Unapproved remote-support software runs from the downloads folder and connects to help-relay.example."
      },
      {
        "id": "SOC-1117-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee installed it after a caller impersonated IT and granted screen control; the real help desk denies the call."
      },
      {
        "id": "SOC-1117-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Session telemetry confirms remote file access and an attempted browser password export."
      },
      {
        "id": "SOC-1117-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1117, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1117-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee installed it after a caller impersonated IT and granted screen control; the real help desk denies the call. Session telemetry confirms remote file access and an attempted browser password export."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1117-e2",
        "SOC-1117-e3",
        "SOC-1117-e4"
      ],
      "explanation": "The fraudulent support session reached sensitive browser data. Isolate the endpoint, block its relay, secure affected credentials, and escalate the remote-access scope."
    }
  },
  {
    "id": "SOC-1118",
    "title": "Administrative script changes firewall settings",
    "category": "Endpoint",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Endpoint monitoring",
    "user": "Noah Ellis",
    "host": "LAB-072",
    "time": "11:00",
    "description": "EDR flags a local configuration script. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1118-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1118 subject=Noah Ellis asset=LAB-072\nSource: Endpoint monitoring\nEDR flags a local configuration script.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1118-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Script signature matches the approved endpoint-management publisher and runs through the managed deployment agent."
      },
      {
        "id": "SOC-1118-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Change ticket approves the exact firewall rule adjustment and limits it to the management subnet."
      },
      {
        "id": "SOC-1118-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Endpoint owner confirms the rollout; effective rules match the approved scope."
      },
      {
        "id": "SOC-1118-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1118, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1118-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Change ticket approves the exact firewall rule adjustment and limits it to the management subnet. Endpoint owner confirms the rollout; effective rules match the approved scope."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1118-e2",
        "SOC-1118-e3",
        "SOC-1118-e4"
      ],
      "explanation": "The script and effective change match an approved management operation. Administrative capability alone is not evidence of abuse."
    }
  },
  {
    "id": "SOC-1119",
    "title": "Credential-sensitive process memory accessed",
    "category": "Endpoint",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Endpoint monitoring",
    "user": "Avery Singh",
    "host": "LAB-073",
    "time": "11:00",
    "description": "Endpoint telemetry detects unusual memory access. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1119-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1119 subject=Avery Singh asset=LAB-073\nSource: Endpoint monitoring\nEndpoint telemetry detects unusual memory access.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1119-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "An unsigned process opens a credential-sensitive system process and writes a memory dump to a user-writable path."
      },
      {
        "id": "SOC-1119-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The dump is compressed and sent to cred-relay.example with a successful upload response."
      },
      {
        "id": "SOC-1119-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "IT and forensic teams deny collecting a dump; no authorized diagnostic ticket exists."
      },
      {
        "id": "SOC-1119-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1119, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1119-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The dump is compressed and sent to cred-relay.example with a successful upload response. IT and forensic teams deny collecting a dump; no authorized diagnostic ticket exists."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1119-e2",
        "SOC-1119-e3",
        "SOC-1119-e4"
      ],
      "explanation": "Unauthorized memory collection and upload support credential theft. Contain the endpoint, block the destination, secure identities exposed on the host, and escalate with the dump evidence preserved."
    }
  },
  {
    "id": "SOC-1120",
    "title": "New local administrator created",
    "category": "Endpoint",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Endpoint monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-074",
    "time": "11:00",
    "description": "Endpoint audit reports a privilege change. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1120-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1120 subject=Morgan Rivera asset=LAB-074\nSource: Endpoint monitoring\nEndpoint audit reports a privilege change.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1120-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A new local account is added to the administrators group by an unknown task."
      },
      {
        "id": "SOC-1120-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "No endpoint-management deployment matches the account creation; the task also enables remote login."
      },
      {
        "id": "SOC-1120-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "System owner denies the account, and a remote session subsequently authenticates with it."
      },
      {
        "id": "SOC-1120-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1120, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1120-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. No endpoint-management deployment matches the account creation; the task also enables remote login. System owner denies the account, and a remote session subsequently authenticates with it."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1120-e2",
        "SOC-1120-e3",
        "SOC-1120-e4"
      ],
      "explanation": "The unauthorized administrator and subsequent remote session establish persistence. Isolate the host, revoke the account through the response team, and investigate the creating task and access scope."
    }
  },
  {
    "id": "SOC-1121",
    "title": "Laptop disk full after backup failure",
    "category": "Endpoint",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Endpoint monitoring",
    "user": "Casey Kim",
    "host": "LAB-075",
    "time": "11:00",
    "description": "An employee reports severe slowdown. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1121-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1121 subject=Casey Kim asset=LAB-075\nSource: Endpoint monitoring\nAn employee reports severe slowdown.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1121-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Approved backup agent repeatedly writes temporary archives; disk usage reaches 99 percent."
      },
      {
        "id": "SOC-1121-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Backup jobs fail cleanup after a documented software update; no unknown process or external transfer is present."
      },
      {
        "id": "SOC-1121-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "IT confirms the known cleanup regression on several managed laptops."
      },
      {
        "id": "SOC-1121-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1121, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1121-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Backup jobs fail cleanup after a documented software update; no unknown process or external transfer is present. IT confirms the known cleanup regression on several managed laptops."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support"
      ],
      "evidence": [
        "SOC-1121-e2",
        "SOC-1121-e3",
        "SOC-1121-e4"
      ],
      "explanation": "A verified backup defect explains the slowdown. Route cleanup and the approved agent update through support rather than treating resource exhaustion as malware."
    }
  },
  {
    "id": "SOC-1122",
    "title": "Logon task persists an unsigned executable",
    "category": "Endpoint",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Endpoint monitoring",
    "user": "Jamie Ross",
    "host": "LAB-076",
    "time": "11:00",
    "description": "EDR flags a task with an innocuous maintenance name. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1122-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1122 subject=Jamie Ross asset=LAB-076\nSource: Endpoint monitoring\nEDR flags a task with an innocuous maintenance name.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1122-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Task named UserHealth launches an unsigned binary from a hidden user directory at every logon."
      },
      {
        "id": "SOC-1122-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The binary sends system inventory and accepts commands from user-health.example."
      },
      {
        "id": "SOC-1122-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Endpoint-management team confirms the task and binary are not approved health tooling."
      },
      {
        "id": "SOC-1122-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1122, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1122-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The binary sends system inventory and accepts commands from user-health.example. Endpoint-management team confirms the task and binary are not approved health tooling."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1122-e2",
        "SOC-1122-e3",
        "SOC-1122-e4"
      ],
      "explanation": "The innocuous name does not override unapproved persistence and remote-command behavior. Contain the endpoint, block the callback, and preserve the task and executable for response."
    }
  },
  {
    "id": "SOC-1123",
    "title": "User disables a protection control",
    "category": "Endpoint",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "Endpoint monitoring",
    "user": "Quinn Ali",
    "host": "LAB-077",
    "time": "11:00",
    "description": "Management monitoring reports endpoint protection disabled. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1123-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1123 subject=Quinn Ali asset=LAB-077\nSource: Endpoint monitoring\nManagement monitoring reports endpoint protection disabled.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1123-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Employee uses a local administration exception to stop a protection component without approval."
      },
      {
        "id": "SOC-1123-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee admits disabling it to install a game; the exception policy does not permit this."
      },
      {
        "id": "SOC-1123-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "No malicious execution or sensitive data access is observed; the management agent can restore the policy."
      },
      {
        "id": "SOC-1123-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1123, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1123-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee admits disabling it to install a game; the exception policy does not permit this. No malicious execution or sensitive data access is observed; the management agent can restore the policy."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "support",
        "educate",
        "escalate"
      ],
      "evidence": [
        "SOC-1123-e2",
        "SOC-1123-e3",
        "SOC-1123-e4"
      ],
      "explanation": "This is a confirmed unauthorized control change, not established malware infection. Escalate the policy incident and use support to restore protection; guide the employee without inventing data loss or unnecessary isolation."
    }
  },
  {
    "id": "SOC-1124",
    "title": "Remote execution uses the endpoint management account",
    "category": "Endpoint",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Endpoint monitoring",
    "user": "Drew Carter",
    "host": "LAB-078",
    "time": "11:00",
    "description": "A management identity launches a task outside the normal pipeline. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1124-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1124 subject=Drew Carter asset=LAB-078\nSource: Endpoint monitoring\nA management identity launches a task outside the normal pipeline.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1124-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Management service account signs in from an unapproved workstation rather than the management server."
      },
      {
        "id": "SOC-1124-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The session deploys an unsigned executable to three hosts; executable behavior includes command polling to manage-relay.example."
      },
      {
        "id": "SOC-1124-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Management owner denies the job and confirms the credential source is unauthorized."
      },
      {
        "id": "SOC-1124-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1124, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1124-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The session deploys an unsigned executable to three hosts; executable behavior includes command polling to manage-relay.example. Management owner denies the job and confirms the credential source is unauthorized."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1124-e2",
        "SOC-1124-e3",
        "SOC-1124-e4"
      ],
      "explanation": "A legitimate management identity was abused for deployment. Contain affected hosts, secure the service credential and sessions, block the confirmed callback identified in analysis, and scope all deployed targets."
    }
  },
  {
    "id": "SOC-1125",
    "title": "Developer debugger triggers a process-access alert",
    "category": "Endpoint",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Endpoint monitoring",
    "user": "Skyler Park",
    "host": "LAB-079",
    "time": "11:00",
    "description": "EDR detects sensitive process inspection on a development host. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1125-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1125 subject=Skyler Park asset=LAB-079\nSource: Endpoint monitoring\nEDR detects sensitive process inspection on a development host.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1125-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Signed debugger accesses only the developer test application process, not a credential-sensitive system process."
      },
      {
        "id": "SOC-1125-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Session matches an approved debugging task and the tool hash matches the corporate inventory."
      },
      {
        "id": "SOC-1125-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Developer confirms the documented test; no dump upload, persistence, or unrelated process access appears."
      },
      {
        "id": "SOC-1125-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1125, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1125-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Session matches an approved debugging task and the tool hash matches the corporate inventory. Developer confirms the documented test; no dump upload, persistence, or unrelated process access appears."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1125-e2",
        "SOC-1125-e3",
        "SOC-1125-e4"
      ],
      "explanation": "The bounded, verified debugging activity explains the alert. Evaluate the actual target process and authorization rather than the broad alert label."
    }
  },
  {
    "id": "SOC-1126",
    "title": "Shortcut on a removable drive launches a downloader",
    "category": "Endpoint",
    "difficulty": "Beginner",
    "severity": "High",
    "source": "Endpoint monitoring",
    "user": "Robin Diaz",
    "host": "LAB-080",
    "time": "11:00",
    "description": "An employee reports a USB document that opened nothing. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1126-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1126 subject=Robin Diaz asset=LAB-080\nSource: Endpoint monitoring\nAn employee reports a USB document that opened nothing.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1126-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Shortcut launches a script interpreter and writes an unsigned program to the user profile."
      },
      {
        "id": "SOC-1126-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated artifact analysis identifies the written program as a downloader connecting to usb-update.example."
      },
      {
        "id": "SOC-1126-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Process creation confirms the program ran; the USB drive was not company-issued."
      },
      {
        "id": "SOC-1126-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1126, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1126-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated artifact analysis identifies the written program as a downloader connecting to usb-update.example. Process creation confirms the program ran; the USB drive was not company-issued."
      }
    ],
    "hints": [
      "Identify the actual process, target, signer, and whether a change was authorized.",
      "Correlate execution or remote access with persistence, credential access, and network activity.",
      "Decide whether host isolation is supported and which account, permission, or configuration requires recovery."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1126-e2",
        "SOC-1126-e3",
        "SOC-1126-e4"
      ],
      "explanation": "The shortcut led to confirmed payload execution. Isolate the endpoint, block the callback, and escalate, preserving the removable-media evidence through approved handling."
    }
  },
  {
    "id": "SOC-1127",
    "title": "Account locked after a phone password change",
    "category": "End-user support",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "End-user support monitoring",
    "user": "Riley Adams",
    "host": "LAB-081",
    "time": "11:00",
    "description": "An employee account locks repeatedly after rotation. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1127-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1127 subject=Riley Adams asset=LAB-081\nSource: End-user support monitoring\nAn employee account locks repeatedly after rotation.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1127-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Failures begin after the password change and originate only from the registered mail app on the employee phone."
      },
      {
        "id": "SOC-1127-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee confirms not updating the saved phone password and denies unknown prompts."
      },
      {
        "id": "SOC-1127-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "No unfamiliar successful session appears; retries stop when the registered phone mail app is paused."
      },
      {
        "id": "SOC-1127-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1127, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1127-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee confirms not updating the saved phone password and denies unknown prompts. No unfamiliar successful session appears; retries stop when the registered phone mail app is paused."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "educate"
      ],
      "evidence": [
        "SOC-1127-e2",
        "SOC-1127-e3",
        "SOC-1127-e4"
      ],
      "explanation": "A stale saved password explains the lockout. Verify identity and update the client through support, then guide the employee. Do not request the password in a ticket."
    }
  },
  {
    "id": "SOC-1128",
    "title": "VPN fails after home router replacement",
    "category": "End-user support",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "End-user support monitoring",
    "user": "Noah Ellis",
    "host": "LAB-082",
    "time": "11:00",
    "description": "An employee cannot connect from home. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1128-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1128 subject=Noah Ellis asset=LAB-082\nSource: End-user support monitoring\nAn employee cannot connect from home.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1128-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "VPN client fails before authentication with a documented network reachability error."
      },
      {
        "id": "SOC-1128-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "VPN configuration and security agent remain approved and unchanged."
      },
      {
        "id": "SOC-1128-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee replaced the home router this morning; IT confirms its firewall setting blocks the required VPN transport."
      },
      {
        "id": "SOC-1128-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1128, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1128-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. VPN configuration and security agent remain approved and unchanged. Employee replaced the home router this morning; IT confirms its firewall setting blocks the required VPN transport."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support"
      ],
      "evidence": [
        "SOC-1128-e2",
        "SOC-1128-e3",
        "SOC-1128-e4"
      ],
      "explanation": "The pre-authentication network failure explains the issue. Route supported router or client configuration through IT without disabling security controls or demanding credentials."
    }
  },
  {
    "id": "SOC-1129",
    "title": "Browser notifications claim the device is infected",
    "category": "End-user support",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "End-user support monitoring",
    "user": "Avery Singh",
    "host": "LAB-083",
    "time": "11:00",
    "description": "An employee sees repeated antivirus-themed notifications. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1129-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1129 subject=Avery Singh asset=LAB-083\nSource: End-user support monitoring\nAn employee sees repeated antivirus-themed notifications.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1129-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Browser permission list grants notifications to ads-notify.example; no installed antivirus product uses that domain."
      },
      {
        "id": "SOC-1129-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Simulated page review shows scare messages pointing to a fraudulent payment page; no payload download is observed."
      },
      {
        "id": "SOC-1129-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee allowed browser notifications but did not pay or install software."
      },
      {
        "id": "SOC-1129-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1129, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1129-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Simulated page review shows scare messages pointing to a fraudulent payment page; no payload download is observed. Employee allowed browser notifications but did not pay or install software."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "block",
        "revoke",
        "educate"
      ],
      "evidence": [
        "SOC-1129-e2",
        "SOC-1129-e3",
        "SOC-1129-e4"
      ],
      "explanation": "The messages are a notification scam. Block the confirmed site, revoke its notification permission, and guide the employee. The available evidence does not establish host infection."
    }
  },
  {
    "id": "SOC-1130",
    "title": "Document access lost after team transfer",
    "category": "End-user support",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "End-user support monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-084",
    "time": "11:00",
    "description": "An employee can no longer open an old shared folder. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1130-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1130 subject=Morgan Rivera asset=LAB-084\nSource: End-user support monitoring\nAn employee can no longer open an old shared folder.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1130-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Group membership changed according to the approved team-transfer workflow."
      },
      {
        "id": "SOC-1130-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Folder access policy grants only the previous team and correctly denies the employee current identity."
      },
      {
        "id": "SOC-1130-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Folder owner confirms access now requires a new business-need approval; no account takeover evidence exists."
      },
      {
        "id": "SOC-1130-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1130, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1130-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Folder access policy grants only the previous team and correctly denies the employee current identity. Folder owner confirms access now requires a new business-need approval; no account takeover evidence exists."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "educate"
      ],
      "evidence": [
        "SOC-1130-e2",
        "SOC-1130-e3",
        "SOC-1130-e4"
      ],
      "explanation": "A valid permission change explains the denial. Route any necessary access request to the data owner and explain least privilege rather than bypassing it."
    }
  },
  {
    "id": "SOC-1131",
    "title": "Caller asks employee for an MFA code",
    "category": "End-user support",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "End-user support monitoring",
    "user": "Casey Kim",
    "host": "LAB-085",
    "time": "11:00",
    "description": "An employee reports a supposed help desk call. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1131-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1131 subject=Casey Kim asset=LAB-085\nSource: End-user support monitoring\nAn employee reports a supposed help desk call.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1131-e2",
        "tool": "User report",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Caller asks for a one-time MFA code and threatens account deletion; employee refuses and contacts the actual help desk."
      },
      {
        "id": "SOC-1131-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Help desk has no matching ticket or outbound call; the callback number is not in its directory."
      },
      {
        "id": "SOC-1131-e4",
        "tool": "Identity",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "No code was supplied and no new successful session or recovery change is observed."
      },
      {
        "id": "SOC-1131-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1131, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1131-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Help desk has no matching ticket or outbound call; the callback number is not in its directory. No code was supplied and no new successful session or recovery change is observed."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "educate",
        "escalate"
      ],
      "evidence": [
        "SOC-1131-e2",
        "SOC-1131-e3",
        "SOC-1131-e4"
      ],
      "explanation": "The call is social engineering despite no successful takeover. Guide the employee and escalate the impersonation attempt for organization-wide awareness and scope checks."
    }
  },
  {
    "id": "SOC-1132",
    "title": "Support ticket requests a reset for another employee",
    "category": "End-user support",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "End-user support monitoring",
    "user": "Jamie Ross",
    "host": "LAB-086",
    "time": "11:00",
    "description": "Help desk receives an urgent reset request through a third party. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1132-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1132 subject=Jamie Ross asset=LAB-086\nSource: End-user support monitoring\nHelp desk receives an urgent reset request through a third party.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1132-e2",
        "tool": "User report",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Requester claims to be an executive assistant and asks to bypass identity verification for another employee."
      },
      {
        "id": "SOC-1132-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Ticket contact address differs from the approved employee directory and lacks an authorized delegation record."
      },
      {
        "id": "SOC-1132-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Independent callback to the account owner confirms no reset was requested; no reset was performed."
      },
      {
        "id": "SOC-1132-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1132, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1132-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Ticket contact address differs from the approved employee directory and lacks an authorized delegation record. Independent callback to the account owner confirms no reset was requested; no reset was performed."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "educate",
        "escalate"
      ],
      "evidence": [
        "SOC-1132-e2",
        "SOC-1132-e3",
        "SOC-1132-e4"
      ],
      "explanation": "Independent verification exposes an attempted help desk takeover. Keep the reset blocked, document the attempt, and escalate without changing the targeted employee credentials unnecessarily."
    }
  },
  {
    "id": "SOC-1133",
    "title": "Mobile authenticator fails after a clock change",
    "category": "End-user support",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "End-user support monitoring",
    "user": "Quinn Ali",
    "host": "LAB-087",
    "time": "11:00",
    "description": "An employee cannot complete one-time-code authentication. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1133-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1133 subject=Quinn Ali asset=LAB-087\nSource: End-user support monitoring\nAn employee cannot complete one-time-code authentication.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1133-e2",
        "tool": "Endpoint",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Registered phone clock is seven minutes behind after manual adjustment."
      },
      {
        "id": "SOC-1133-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Failures involve code validation from the usual managed laptop; no unfamiliar source or factor enrollment appears."
      },
      {
        "id": "SOC-1133-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Employee confirms the clock change and IT documents time synchronization as the supported correction."
      },
      {
        "id": "SOC-1133-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1133, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1133-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Failures involve code validation from the usual managed laptop; no unfamiliar source or factor enrollment appears. Employee confirms the clock change and IT documents time synchronization as the supported correction."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support",
        "educate"
      ],
      "evidence": [
        "SOC-1133-e2",
        "SOC-1133-e3",
        "SOC-1133-e4"
      ],
      "explanation": "Clock drift explains the rejected codes. Restore supported time synchronization and guide the employee; do not weaken MFA or collect their codes."
    }
  },
  {
    "id": "SOC-1134",
    "title": "Printer queue contains duplicate invoices",
    "category": "End-user support",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "End-user support monitoring",
    "user": "Drew Carter",
    "host": "LAB-088",
    "time": "11:00",
    "description": "An employee reports many duplicate print jobs. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1134-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1134 subject=Drew Carter asset=LAB-088\nSource: End-user support monitoring\nAn employee reports many duplicate print jobs.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1134-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Approved print server records identical job IDs resubmitted by the usual client after a network interruption."
      },
      {
        "id": "SOC-1134-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "No new application or unauthorized destination appears; document hashes match the employee original invoice."
      },
      {
        "id": "SOC-1134-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Print support confirms a retry-queue defect and the printer remains inside the controlled office area."
      },
      {
        "id": "SOC-1134-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1134, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1134-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. No new application or unauthorized destination appears; document hashes match the employee original invoice. Print support confirms a retry-queue defect and the printer remains inside the controlled office area."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "support"
      ],
      "evidence": [
        "SOC-1134-e2",
        "SOC-1134-e3",
        "SOC-1134-e4"
      ],
      "explanation": "The retry defect explains duplicates. Route queue correction through print support and respect sensitive-document handling; there is no evidence of malware or external disclosure."
    }
  },
  {
    "id": "SOC-1135",
    "title": "Fake support chat obtains remote access",
    "category": "End-user support",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "End-user support monitoring",
    "user": "Skyler Park",
    "host": "LAB-089",
    "time": "11:00",
    "description": "An employee asks whether a web support chat was legitimate. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1135-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1135 subject=Skyler Park asset=LAB-089\nSource: End-user support monitoring\nAn employee asks whether a web support chat was legitimate.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1135-e2",
        "tool": "User report",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Employee follows a chat link from help-browser.example and installs its recommended remote tool."
      },
      {
        "id": "SOC-1135-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Remote session starts from an unknown operator and opens the company document folder."
      },
      {
        "id": "SOC-1135-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Corporate help desk denies operating that site; simulated tool report confirms an external relay at help-browser.example."
      },
      {
        "id": "SOC-1135-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1135, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1135-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Remote session starts from an unknown operator and opens the company document folder. Corporate help desk denies operating that site; simulated tool report confirms an external relay at help-browser.example."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1135-e2",
        "SOC-1135-e3",
        "SOC-1135-e4"
      ],
      "explanation": "The impersonated support interaction created unauthorized remote access. Contain the endpoint, block the relay, and assess what the operator accessed; the evidence does not yet prove credential theft."
    }
  },
  {
    "id": "SOC-1136",
    "title": "Approved support ticket contains a substituted download",
    "category": "End-user support",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "End-user support monitoring",
    "user": "Robin Diaz",
    "host": "LAB-090",
    "time": "11:00",
    "description": "An employee follows a link inside an otherwise real support ticket. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1136-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1136 subject=Robin Diaz asset=LAB-090\nSource: End-user support monitoring\nAn employee follows a link inside an otherwise real support ticket.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1136-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Ticket audit shows the original vendor download URL was edited by an unauthorized session to support-package.example."
      },
      {
        "id": "SOC-1136-e3",
        "tool": "Endpoint",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee executed the downloaded package; simulated analysis shows persistence and remote-command capability."
      },
      {
        "id": "SOC-1136-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Assigned technician denies the link edit and confirms the real vendor package has a different trusted signature."
      },
      {
        "id": "SOC-1136-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1136, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1136-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee executed the downloaded package; simulated analysis shows persistence and remote-command capability. Assigned technician denies the link edit and confirms the real vendor package has a different trusted signature."
      }
    ],
    "hints": [
      "Start with what the employee actually did and independently verify the support channel.",
      "Compare the reported symptom with identity, configuration, and endpoint evidence.",
      "Choose support guidance for verified faults, and containment for confirmed unauthorized access or execution."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "isolate",
        "block",
        "escalate"
      ],
      "evidence": [
        "SOC-1136-e2",
        "SOC-1136-e3",
        "SOC-1136-e4"
      ],
      "explanation": "A legitimate support context was used to deliver a malicious package. Contain confirmed execution and block the destination, then investigate ticket-system access and affected users. The existence of a valid ticket does not validate every edit."
    }
  },
  {
    "id": "SOC-1137",
    "title": "Employee creates an unapproved forwarding rule",
    "category": "Insider risk",
    "difficulty": "Intermediate",
    "severity": "High",
    "source": "Insider risk monitoring",
    "user": "Riley Adams",
    "host": "LAB-091",
    "time": "11:00",
    "description": "Mail monitoring detects a new forwarding destination. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1137-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1137 subject=Riley Adams asset=LAB-091\nSource: Insider risk monitoring\nMail monitoring detects a new forwarding destination.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1137-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Mailbox rule forwards all messages containing project terms to a personal external address."
      },
      {
        "id": "SOC-1137-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee admits creating the rule for convenience and has no data-owner exception."
      },
      {
        "id": "SOC-1137-e4",
        "tool": "Email",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Mail trace confirms restricted project messages were forwarded and delivered externally."
      },
      {
        "id": "SOC-1137-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1137, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1137-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee admits creating the rule for convenience and has no data-owner exception. Mail trace confirms restricted project messages were forwarded and delivered externally."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1137-e2",
        "SOC-1137-e3",
        "SOC-1137-e4"
      ],
      "explanation": "This is confirmed unauthorized forwarding and disclosure, regardless of the stated motive. Revoke the rule, escalate the delivered message scope, and explain approved access options."
    }
  },
  {
    "id": "SOC-1138",
    "title": "Large archive created for approved legal handoff",
    "category": "Insider risk",
    "difficulty": "Beginner",
    "severity": "Low",
    "source": "Insider risk monitoring",
    "user": "Noah Ellis",
    "host": "LAB-092",
    "time": "11:00",
    "description": "Monitoring flags bulk document collection. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1138-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1138 subject=Noah Ellis asset=LAB-092\nSource: Insider risk monitoring\nMonitoring flags bulk document collection.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1138-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Archive content and recipient match an approved legal discovery request with a restricted transfer channel."
      },
      {
        "id": "SOC-1138-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Legal owner confirms authorization, case identifier, and retention requirements."
      },
      {
        "id": "SOC-1138-e4",
        "tool": "Endpoint",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Approved collection tool created the archive on the designated managed system; no external unapproved upload exists."
      },
      {
        "id": "SOC-1138-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1138, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1138-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Legal owner confirms authorization, case identifier, and retention requirements. Approved collection tool created the archive on the designated managed system; no external unapproved upload exists."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1138-e2",
        "SOC-1138-e3",
        "SOC-1138-e4"
      ],
      "explanation": "The sensitive collection is authorized and bounded. Size alone is not evidence of insider theft; preserve the approval context and close."
    }
  },
  {
    "id": "SOC-1139",
    "title": "Restricted folder accessed with a borrowed account",
    "category": "Insider risk",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Insider risk monitoring",
    "user": "Avery Singh",
    "host": "LAB-093",
    "time": "11:00",
    "description": "Audit detects unusual access to confidential files. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1139-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1139 subject=Avery Singh asset=LAB-093\nSource: Insider risk monitoring\nAudit detects unusual access to confidential files.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1139-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Account authenticates on a coworker device while its owner is on approved leave."
      },
      {
        "id": "SOC-1139-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Owner confirms sharing the password with the coworker; the coworker has no authorization for the restricted folder."
      },
      {
        "id": "SOC-1139-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The borrowed account downloads restricted files that the coworker own account cannot access."
      },
      {
        "id": "SOC-1139-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1139, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1139-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Owner confirms sharing the password with the coworker; the coworker has no authorization for the restricted folder. The borrowed account downloads restricted files that the coworker own account cannot access."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "reset",
        "revoke",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1139-e2",
        "SOC-1139-e3",
        "SOC-1139-e4"
      ],
      "explanation": "Credential sharing enabled unauthorized access. Secure the shared account and sessions, revoke inappropriate access through the data owner, and escalate the downloads. Do not confuse the borrowed account permissions with the actual actor authorization."
    }
  },
  {
    "id": "SOC-1140",
    "title": "Unapproved automation scrapes the employee directory",
    "category": "Insider risk",
    "difficulty": "Intermediate",
    "severity": "Medium",
    "source": "Insider risk monitoring",
    "user": "Morgan Rivera",
    "host": "LAB-094",
    "time": "11:00",
    "description": "Directory monitoring detects unusual request volume. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1140-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1140 subject=Morgan Rivera asset=LAB-094\nSource: Insider risk monitoring\nDirectory monitoring detects unusual request volume.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1140-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Employee runs an unapproved automation job that enumerates all personnel details rather than their normal team view."
      },
      {
        "id": "SOC-1140-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee says it is for a personal mailing list; HR denies approval or a legitimate business purpose."
      },
      {
        "id": "SOC-1140-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The job exports the directory to a local CSV; no external upload is observed."
      },
      {
        "id": "SOC-1140-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1140, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1140-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee says it is for a personal mailing list; HR denies approval or a legitimate business purpose. The job exports the directory to a local CSV; no external upload is observed."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1140-e2",
        "SOC-1140-e3",
        "SOC-1140-e4"
      ],
      "explanation": "Unauthorized bulk collection is a policy incident even without proven external transmission. Revoke the automation access, escalate handling of the export, and explain approved directory use."
    }
  },
  {
    "id": "SOC-1141",
    "title": "Administrator erases audit records after a dispute",
    "category": "Insider risk",
    "difficulty": "Advanced",
    "severity": "Critical",
    "source": "Insider risk monitoring",
    "user": "Casey Kim",
    "host": "LAB-095",
    "time": "11:00",
    "description": "Audit monitoring detects deleted logs. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1141-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1141 subject=Casey Kim asset=LAB-095\nSource: Insider risk monitoring\nAudit monitoring detects deleted logs.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1141-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "A privileged administrator deletes audit records and disables collection outside any change window."
      },
      {
        "id": "SOC-1141-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "System owner and legal preservation owner deny the operation; a preservation hold was already in effect."
      },
      {
        "id": "SOC-1141-e4",
        "tool": "Identity",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Independent identity logs tie the changes to the administrator session; backup audit storage remains available."
      },
      {
        "id": "SOC-1141-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1141, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1141-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. System owner and legal preservation owner deny the operation; a preservation hold was already in effect. Independent identity logs tie the changes to the administrator session; backup audit storage remains available."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1141-e2",
        "SOC-1141-e3",
        "SOC-1141-e4"
      ],
      "explanation": "Confirmed unauthorized evidence destruction requires immediate privilege containment and escalation, preserving independent records. Do not attempt ad hoc restoration that overwrites remaining evidence."
    }
  },
  {
    "id": "SOC-1142",
    "title": "Offboarding archive matches retention policy",
    "category": "Insider risk",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Insider risk monitoring",
    "user": "Jamie Ross",
    "host": "LAB-096",
    "time": "11:00",
    "description": "Monitoring flags a departing employee data archive. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1142-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1142 subject=Jamie Ross asset=LAB-096\nSource: Insider risk monitoring\nMonitoring flags a departing employee data archive.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1142-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "HR-approved offboarding job archives corporate records to the approved retention vault."
      },
      {
        "id": "SOC-1142-e3",
        "tool": "Identity",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The job uses the dedicated retention identity; employee interactive sessions are already revoked."
      },
      {
        "id": "SOC-1142-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "HR and records owner confirm the job scope and no transfer to the departing employee occurred."
      },
      {
        "id": "SOC-1142-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1142, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1142-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The job uses the dedicated retention identity; employee interactive sessions are already revoked. HR and records owner confirm the job scope and no transfer to the departing employee occurred."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1142-e2",
        "SOC-1142-e3",
        "SOC-1142-e4"
      ],
      "explanation": "The approved retention process explains the archive. Departure alone does not imply insider theft, and the destination and identity establish the controlled workflow."
    }
  },
  {
    "id": "SOC-1143",
    "title": "Access exception used to obtain unrelated payroll data",
    "category": "Insider risk",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Insider risk monitoring",
    "user": "Quinn Ali",
    "host": "LAB-097",
    "time": "11:00",
    "description": "Data audit flags a broad query by a temporary reviewer. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1143-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1143 subject=Quinn Ali asset=LAB-097\nSource: Insider risk monitoring\nData audit flags a broad query by a temporary reviewer.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1143-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Temporary review grant is approved only for one project, but a mis-scoped role permits payroll tables."
      },
      {
        "id": "SOC-1143-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The reviewer deliberately queries payroll records outside the named project and exports the result."
      },
      {
        "id": "SOC-1143-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Review sponsor denies this access and confirms the records were not needed for the assignment."
      },
      {
        "id": "SOC-1143-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1143, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1143-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The reviewer deliberately queries payroll records outside the named project and exports the result. Review sponsor denies this access and confirms the records were not needed for the assignment."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "escalate"
      ],
      "evidence": [
        "SOC-1143-e2",
        "SOC-1143-e3",
        "SOC-1143-e4"
      ],
      "explanation": "The user exceeded approved scope using an overbroad grant. Revoke the excessive access and escalate the export and role defect. Technical ability is not the same as business authorization."
    }
  },
  {
    "id": "SOC-1144",
    "title": "Employee sends internal screenshots to a public forum",
    "category": "Insider risk",
    "difficulty": "Beginner",
    "severity": "Medium",
    "source": "Insider risk monitoring",
    "user": "Drew Carter",
    "host": "LAB-098",
    "time": "11:00",
    "description": "Monitoring identifies internal content in a public post. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1144-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1144 subject=Drew Carter asset=LAB-098\nSource: Insider risk monitoring\nMonitoring identifies internal content in a public post.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1144-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Public post includes screenshots with restricted customer information matching an internal dashboard."
      },
      {
        "id": "SOC-1144-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Employee confirms posting to ask for technical help and did not obtain sharing approval."
      },
      {
        "id": "SOC-1144-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "The post was publicly viewable before removal; data-owner policy prohibits this content outside approved support channels."
      },
      {
        "id": "SOC-1144-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1144, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1144-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Employee confirms posting to ask for technical help and did not obtain sharing approval. The post was publicly viewable before removal; data-owner policy prohibits this content outside approved support channels."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "escalate",
        "educate"
      ],
      "evidence": [
        "SOC-1144-e2",
        "SOC-1144-e3",
        "SOC-1144-e4"
      ],
      "explanation": "Accidental public disclosure still needs incident handling. Escalate exposure assessment and removal through the appropriate owners and teach approved, redacted support practices; intent is not established as hostile."
    }
  },
  {
    "id": "SOC-1145",
    "title": "Security researcher exports approved lab telemetry",
    "category": "Insider risk",
    "difficulty": "Intermediate",
    "severity": "Low",
    "source": "Insider risk monitoring",
    "user": "Skyler Park",
    "host": "LAB-099",
    "time": "11:00",
    "description": "DLP flags a telemetry archive sent externally. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1145-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1145 subject=Skyler Park asset=LAB-099\nSource: Insider risk monitoring\nDLP flags a telemetry archive sent externally.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1145-e2",
        "tool": "Logs",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Archive is generated from a dedicated fictional-data lab, and the approved publication review confirms it contains no production records."
      },
      {
        "id": "SOC-1145-e3",
        "tool": "User report",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "Research owner confirms the sanctioned conference submission and exact artifact hash."
      },
      {
        "id": "SOC-1145-e4",
        "tool": "Logs",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Destination and dataset match the approval; no additional production archive was transferred."
      },
      {
        "id": "SOC-1145-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1145, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1145-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. Research owner confirms the sanctioned conference submission and exact artifact hash. Destination and dataset match the approval; no additional production archive was transferred."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "benign",
      "actions": [
        "monitor"
      ],
      "evidence": [
        "SOC-1145-e2",
        "SOC-1145-e3",
        "SOC-1145-e4"
      ],
      "explanation": "Verified lab provenance and publication review establish an authorized disclosure. Preserve the artifact and approval linkage rather than treating all external sharing as abuse."
    }
  },
  {
    "id": "SOC-1146",
    "title": "Dormant contractor account used for bulk downloads",
    "category": "Insider risk",
    "difficulty": "Advanced",
    "severity": "High",
    "source": "Insider risk monitoring",
    "user": "Robin Diaz",
    "host": "LAB-100",
    "time": "11:00",
    "description": "File monitoring detects a dormant identity becoming active. Correlate the records to establish authorization, impact, and a proportionate response.",
    "evidence": [
      {
        "id": "SOC-1146-e1",
        "tool": "Logs",
        "time": "11:03",
        "title": "Alert context",
        "detail": "case=SOC-1146 subject=Robin Diaz asset=LAB-100\nSource: Insider risk monitoring\nFile monitoring detects a dormant identity becoming active.\nInvestigation window: 11:00–11:30. Records below are scoped to this subject or its assigned service."
      },
      {
        "id": "SOC-1146-e2",
        "tool": "Identity",
        "time": "11:06",
        "title": "Primary observation",
        "detail": "Contractor access should have expired last month, but the account authenticates from an unknown unmanaged device."
      },
      {
        "id": "SOC-1146-e3",
        "tool": "Logs",
        "time": "11:09",
        "title": "Correlated observation",
        "detail": "The session downloads restricted project folders unrelated to the completed contract."
      },
      {
        "id": "SOC-1146-e4",
        "tool": "User report",
        "time": "11:12",
        "title": "Independent verification",
        "detail": "Contract sponsor confirms no extension or download approval; the contractor denies initiating the session."
      },
      {
        "id": "SOC-1146-e5",
        "tool": "Logs",
        "time": "11:15",
        "title": "Scope and handling note",
        "detail": "For SOC-1146, the supplied snapshot contains only the recorded observations. Do not assume other hosts, accounts, or transfers are affected without corroboration. Preserve records and use the simulated response controls; no real action is executed."
      }
    ],
    "artifacts": [
      {
        "name": "SOC-1146-evidence-bundle.json",
        "type": "Evidence bundle",
        "verdict": "Correlated snapshot reviewed",
        "detail": "Prerecorded simulation, not live execution or an external lookup. The session downloads restricted project folders unrelated to the completed contract. Contract sponsor confirms no extension or download approval; the contractor denies initiating the session."
      }
    ],
    "hints": [
      "Compare the actor business authorization with technical permissions and documented exceptions.",
      "Establish whether data was merely collected, actually disclosed, or retained through an approved process.",
      "Do not infer hostile intent from an employment change or an accidental disclosure; respond to the verified event and impact."
    ],
    "answer": {
      "verdict": "malicious",
      "actions": [
        "revoke",
        "reset",
        "escalate"
      ],
      "evidence": [
        "SOC-1146-e2",
        "SOC-1146-e3",
        "SOC-1146-e4"
      ],
      "explanation": "The expired account and denied session support account compromise and unauthorized access. Revoke access and sessions, secure the account, and escalate download scope and the offboarding control failure."
    }
  }
];
