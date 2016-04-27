'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.greetingsGET = function greetingsGET (req, res, next) {
  Default.greetingsGET(req.swagger.params, res, next);
};
