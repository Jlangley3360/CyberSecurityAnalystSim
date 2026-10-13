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

The five initial scenarios cover credential phishing, benign impossible travel, a malware downloader, stale-password account lockouts, and a browser support scam. Alert category is selected by the analyst rather than disclosed during the investigation.

## Scoring and persistence

Verdict: 30 points; category: 15; response: 25; key evidence bookmarks: 20; documentation length: 10. Unsupported actions subtract five response points each. Hints do not reduce the score. Documentation scoring measures length, not correctness: compare your prose with the case explanation. Case retries replace the previous attempt.

Progress and notes are stored in localStorage for the browser and site origin. Use the same hostname and port to keep the same workspace. Clearing site data deletes progress. There is no cloud sync or login. If browser storage is unavailable, the app displays a warning and progress lasts for that session only.

## Sandbox boundaries

Sandbox reports are prerecorded fictional analysis. No real malware executes; URLs and IPs are never queried; containment choices do not perform real actions. This first version has no arbitrary uploads, shell, or real isolated containers.

## Development

`src/cases.js` contains scenario data and expected responses; `src/engine.js` contains grading and closure rules; `src/app.js` contains the interface; `styles.css` contains responsive styles. Answer keys live in client-side code, so this is a personal practice tool rather than a protected exam platform. Add scenarios using the existing schema and run the tests to validate evidence IDs and scoring.
