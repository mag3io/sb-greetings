'use strict';

const log = require('../common/Logging.js').domainLog(__filename);

const say = (what) => {
    return (name) => {
        log().info({ param: name });
        return what + " " + (name || "World");
    };
};

exports.sayBye = say("Bye");

exports.sayHello = say("Hello");