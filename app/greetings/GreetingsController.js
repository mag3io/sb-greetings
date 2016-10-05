'use strict';

const greetings = require('./GreetingsService'),
  log = require('../common/Logging.js').controllerLog(__filename);

const getHello = (req, res) => {
  log().info('Getting "/Hello"');
  res.type('application/json');
  res.send({
    messages: greetings.sayHello(req.query.name),
    when: new Date()
  });
};

const getBye = (req, res) => {
  res.type('application/json');
  res.send({
    messages: greetings.sayBye(req.query.name),
    when: new Date()
  });
};

const routes = (router) => {
  router.get('/hello', getHello);
  router.get('/bye', getBye);
  return router;
}

module.exports = {
  routes: routes,
  getHello: getHello,
  getBye: getBye
}
