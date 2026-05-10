const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');

// Use a dedicated test port so it never conflicts with a running dev server
process.env.PORT = '3099';

// Suppress startup logs during test run
const originalLog = console.log;
console.log = () => {};

const { server } = require('../index.js');

after(async () => {
  await new Promise((resolve) => server.close(resolve));
  console.log = originalLog;
});

const BASE = 'http://localhost:3099';

test('GET /maybe returns HTTP 200', async () => {
  const res = await fetch(`${BASE}/maybe`);
  assert.equal(res.status, 200);
});

test('GET /maybe returns JSON content-type', async () => {
  const res = await fetch(`${BASE}/maybe`);
  const ct = res.headers.get('content-type') ?? '';
  assert.ok(ct.includes('application/json'), `Expected JSON, got: ${ct}`);
});

test('GET /maybe response has a non-empty string maybe field', async () => {
  const res = await fetch(`${BASE}/maybe`);
  const body = await res.json();
  assert.ok(Object.hasOwn(body, 'maybe'), 'Response must have a maybe field');
  assert.equal(typeof body.maybe, 'string', 'maybe must be a string');
  assert.ok(body.maybe.length > 0, 'maybe must not be empty');
});

test('GET /maybe returns varied responses across 10 calls', async () => {
  const results = await Promise.all(
    Array.from({ length: 10 }, () =>
      fetch(`${BASE}/maybe`).then((r) => r.json()).then((b) => b.maybe)
    )
  );
  const unique = new Set(results);
  // With 200+ entries, hitting the same one 10 times in a row is astronomically unlikely
  assert.ok(unique.size > 1, `Expected varied responses, got ${unique.size} unique value(s)`);
});

test('GET /maybe response only contains expected keys', async () => {
  const res = await fetch(`${BASE}/maybe`);
  const body = await res.json();
  const keys = Object.keys(body);
  assert.deepEqual(keys, ['maybe'], `Expected only [maybe], got [${keys.join(', ')}]`);
});

test('GET unknown route returns 404', async () => {
  const res = await fetch(`${BASE}/definitely`);
  assert.equal(res.status, 404);
});
