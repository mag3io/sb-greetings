'use strict';

exports.sayBye = (name) => {
    return "Bye " + (name || "World");
};

exports.sayHello = (name) => {
    return "Hello " + (name || "World");
};
