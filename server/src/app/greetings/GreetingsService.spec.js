'use strict';

require('../common/ProcessEnv').safeSet('LOG_LEVEL', 'ERROR');

const mocha = require('mocha'),
    describe = mocha.describe,
    it = mocha.it;

const assert = require('chai').assert;

const sut = require('../greetings/GreetingsService');

describe('GreetingsService', function () {
    describe('#sayHello()', function () {
        it('should return "Hello World" if the parameter name is "undefined"', function () {
            var name;
            assert.equal('Hello World', sut.sayHello(name));
        });
        it('should return "Hello Richard" if the parameter name is "Richard"', function () {
            var name = 'Richard';
            assert.equal('Hello Richard', sut.sayHello(name));
        });
    });
});
