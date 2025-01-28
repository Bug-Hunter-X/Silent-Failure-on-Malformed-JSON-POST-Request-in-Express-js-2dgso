# Silent Failure on Malformed JSON POST Request
This repository demonstrates a common, yet often overlooked, error in Express.js applications: the silent failure when handling malformed JSON in POST requests.

## The Bug
The `bug.js` file contains an Express.js app that accepts POST requests to `/user`.  It attempts to parse the request body as JSON using `express.json()`, but it lacks proper error handling. If a client sends a malformed JSON payload, the application won't explicitly report the error, potentially leading to unexpected behavior or crashes.

## The Solution
The `bugSolution.js` demonstrates how to robustly handle JSON parsing errors.  It uses a `try...catch` block to capture parsing errors and sends an appropriate error response to the client.