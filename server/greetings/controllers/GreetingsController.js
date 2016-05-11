'use strict';

var url = require('url');


var Greetings = require('../services/GreetingsService');


module.exports.greetingsGET = function greetingsGET (req, res, next) {
  //console.log(req.params);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    messages: Greetings.sayHello(req.swagger.params.name.value),
    when: new Date()

  }, null, 2));


};
