'use strict';

const sut = require('./GreetingsService');

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

    describe('#sayBye()', function () {
        it('should return "Bye World" if the parameter name is "undefined"', function () {
            var name;
            assert.equal('Bye World', sut.sayBye(name));
        });
        it('should return "Bye Richard" if the parameter name is "Richard"', function () {
            var name = 'Richard';
            assert.equal('Bye Richard', sut.sayBye(name));
        });
    });

});
