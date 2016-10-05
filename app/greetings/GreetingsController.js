'use strict';

const greetings = require('./GreetingsService'),
  log = require('../common/Logging.js').controllerLog(__filename);

const getHello = (req, res) => {
  log().info('Getting "/Hello"');
  res.type('application/json');
  // res.send({
  //   messages: greetings.sayHello(req.query.name),
  //   when: new Date()
  // });
  res.end(JSON.stringify({
    messages: greetings.sayHello(req.query.name),
    when: new Date()
  }, null, 2));
};

const getBye = (req, res) => {
  res.type('application/json');
  res.end(JSON.stringify({
    messages: greetings.sayBye(req.query.name),
    when: new Date()
  }, null, 2));
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
