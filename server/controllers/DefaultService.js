'use strict';

var Greetings = require('../services/GreetingsService');

exports.greetingsGET = function (args, res, next) {

    /**
     * parameters expected in the args:
     * name (String)
     **/

    console.log(args);

    var examples = {};
    //var name = args.name.value || "World";
    //var message = "Hello " + name;
    var message = Greetings.sayHello(args.name.value)
    examples['application/json'] = "{" + message + "}";
    examples['when'] = new Date();

    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    }
    else {
        res.end();
    }

};

