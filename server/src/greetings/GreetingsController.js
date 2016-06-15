'use strict';

const express = require('express');
const router = express.Router();

const greetings = require('./GreetingsService');

router.get('/hello', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    messages: greetings.sayHello(req.query.name),
    when: new Date()

  }, null, 2));
});

router.get('/bye', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    messages: greetings.sayBye(req.query.name),
    when: new Date()

  }, null, 2));
});

module.exports = router;
