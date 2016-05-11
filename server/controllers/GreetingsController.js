'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.greetingsGET = function greetingsGET (req, res, next) {
  var message = Greetings.sayHello(args.name.value);
    res.writeHead(200, {"Content-Type": "application/json"});
    //res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      message,
      "when":new Date()
    }));
};
