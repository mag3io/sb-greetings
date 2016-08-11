'use strict';

var assert = require('chai').assert;

var sut = require('../greetings/GreetingsService');

var mocha = require('mocha'),
describe = mocha.describe,
id = mocha.it;

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
