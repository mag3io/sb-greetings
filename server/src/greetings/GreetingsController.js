'use strict';

const router = require('express').Router(),
  greetings = require('./GreetingsService'),
  log = require('../common/Logging.js').childRequestLog(__filename);

router.get('/hello', (req, res) => {
  log(req).info('Getting "/Hello"');
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
