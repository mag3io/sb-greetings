'use strict';

const log = require('../common/Logging.js').childLog(__filename);

exports.sayBye = (name) => {
    log.info({param: name});
    return "Bye " + (name || "World");
};

exports.sayHello = (name) => {
    log.debug({param: name});
    return "Hello " + (name || "World");
};
