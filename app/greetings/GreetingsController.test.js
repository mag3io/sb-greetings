'use strict';

const sinon = require('sinon'),
    proxyquire = require('proxyquire'),
    serviceStub = {};

const sut = proxyquire('./GreetingsController', {'./GreetingsService' : serviceStub});

const test = (sutMethod, stubbing, message, name) => {

    const req = {}, res = {};
    req.query = {};
    if (name) req.query.name = name;
    res.type = sinon.spy();
    res.end = sinon.spy();

    stubbing(serviceStub);
    sut[sutMethod](req,res);

    assert.equal(res.type.withArgs('application/json').calledOnce, true);
    assert.equal(res.end.calledOnce, true);
    assert.equal(JSON.parse(res.end.args[0][0]).messages, message);
    
};

describe('GreetingsController', function () {
    
    describe('GET hello', function () {
        it('should return "Hello World" if the parameter name is "undefined"', function () {
            test('getHello', 
                (serviceStub) => {serviceStub.sayHello = sinon.stub().returns('Hello World');}, 
                'Hello World');
        });     
        it('should return "Hello Richard" if the parameter name is "Richard"', function () {
             test('getHello', 
                (serviceStub) => {serviceStub.sayHello = sinon.stub().returns('Hello Richard');}, 
                'Hello Richard', 
                'Richard');
        });
    });

    describe('GET bye', function () {
        it('should return "Bye World" if the parameter name is "undefined"', function () {
            test('getBye', 
                (serviceStub) => {serviceStub.sayHello = sinon.stub().returns('Hello World');}, 
                'Bye World');
        });
        it('should return "Bye Richard" if the parameter name is "Richard"', function () {
            test('getBye', 
                (serviceStub) => {serviceStub.sayHello = sinon.stub().returns('Hello World');}, 
                'Bye Richard', 
                'Richard');
        });
    });

});
