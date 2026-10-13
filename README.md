# CyberSecurityAnalystSim — Analyst Lab

A free, local, single-user cybersecurity analyst practice app inspired by SOC investigation workflows. All organizations, users, logs, and artifacts are fictional. No third-party services or accounts are required.

## Run

Install Node.js 20 or later, then run from this repository:

```sh
npm start
```

Open `http://localhost:3000` in your browser. Keep the server running while practicing. Set `PORT` to use another port. The server binds to loopback for local use.

```sh
npm test
```

There are no runtime npm dependencies or build step.

## Practice

1. Select and claim an alert.
2. Review the summary and optional hints.
3. Search evidence and filter by email, endpoint, identity, logs, or user reports. Bookmark records that support your decision.
4. Analyze supplied artifacts in the simulated sandbox.
5. Record your timeline and findings in case notes.
6. Select a verdict, incident category, and response actions. Write a conclusion and close the case.
7. Review scoring, the expected response, and the evidence explanation. Retry a case or view your progress.

The five original scenarios cover credential phishing, benign impossible travel, a malware downloader, stale-password account lockouts, and a browser support scam. The additional 100 independently authored fictional investigations span ten topics: phishing, identity, malware, network, data protection, cloud, web application, endpoint, end-user support, and insider risk. These new cases include 29 beginner, 39 intermediate, and 32 advanced investigations, with both benign events and confirmed security incidents. Use the queue filters to select a difficulty and topic. Topic filters intentionally disclose the training category; use All topics when you want to classify the case without that assistance.

## Scoring and persistence

Verdict: 30 points; category: 15; response: 25; key evidence bookmarks: 20; documentation length: 10. Unsupported actions subtract five response points each. Hints do not reduce the score. Documentation scoring measures length, not correctness: compare your prose with the case explanation. Case retries replace the previous attempt.

Progress and notes are stored in localStorage for the browser and site origin. Use the same hostname and port to keep the same workspace. Clearing site data deletes progress. There is no cloud sync or login. Export your progress from My progress to download a JSON backup; import it on another browser or computer. Import validates the backup and recomputes scores, then asks before replacing the cases included. Cases absent from the backup are preserved. Backups include your notes, so store them appropriately. My progress also shows completion and average scores by topic. If browser storage is unavailable, the app displays a warning and progress lasts for that session only.

## Sandbox boundaries

Sandbox reports are prerecorded fictional analysis. The new training pack supplies correlated evidence-bundle reports; the original cases also include simulated URL, file, IP, and application analysis. No real malware executes; URLs and IPs are never queried; containment choices do not perform real actions. This first version has no arbitrary uploads, shell, or real isolated containers.

## Development

`src/cases.js` contains the original scenarios and joins the library with `src/training-pack.js` (100 additional investigations); `src/persistence.js` validates portable progress backups; `src/engine.js` contains grading and closure rules; `src/app.js` contains the interface; `styles.css` contains responsive styles. Answer keys live in client-side code, so this is a personal practice tool rather than a protected exam platform. Add scenarios using the existing schema and run the tests to validate evidence IDs and scoring.

## Interpreting verdicts

“Malicious / unauthorized activity” includes confirmed policy violations and accidental unauthorized exposure. It labels the security event, not an accusation about an employee’s intent. Read each explanation for the established impact and uncertainty. Advanced cases require distinguishing session replay, federated trust abuse, consent grants, persistence, actual exfiltration, and legitimate authorized changes.
