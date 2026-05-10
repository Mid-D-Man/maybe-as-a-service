const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.set('trust proxy', true);

const PORT = process.env.PORT || 3000;

// __dirname makes the path absolute regardless of where node is invoked from
const maybes = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'maybes.json'), 'utf-8')
);

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  keyGenerator: (req) => {
    return req.headers['cf-connecting-ip'] || req.ip;
  },
  message: { error: 'Too many requests, please try again later. (120 reqs/min/IP)' }
});

app.use(limiter);

app.get('/maybe', (req, res) => {
  const maybe = maybes[Math.floor(Math.random() * maybes.length)];
  res.json({ maybe });
});

const server = app.listen(PORT, () => {
  console.log(`Maybe-as-a-Service is running on port ${PORT}`);
  console.log(`...or maybe it isn't. Hard to say really.`);
});

module.exports = { app, server };
