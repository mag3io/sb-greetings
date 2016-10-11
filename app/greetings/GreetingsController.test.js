'use strict';

const 
    test = require('tape'),
    sinon = require('sinon'),
    proxyquire = require('proxyquire'),
    serviceStub = {};

const sut = proxyquire('./GreetingsController', {'./GreetingsService' : serviceStub});

const performTest = (assert) => {
    assert.plan(3)
    return (sutMethod, stubbing, message, name) => {

        const req = {}, res = {};
        req.query = {};
        if (name) req.query.name = name;
        res.type = sinon.spy();
        res.send = sinon.spy();

        stubbing(serviceStub);
        sut[sutMethod](req, res);

        assert.equal(true, res.send.calledOnce);
        assert.equal(true, res.type.withArgs('application/json').calledOnce, 
            'The expected response body type is "application/json"');
        assert.equal(message, res.send.args[0][0].messages, 
            'The expected repsonse body is: ' + message);
}};

test('GreetingsController GET hello', function(assert) {
    performTest(assert)(
        'getHello', 
        (serviceStub) => {serviceStub.sayHello = sinon.stub().returns('Hello World');}, 
        'Hello World');
});

test('GreetingsController GET hello?name=Richard', function(assert) {
    performTest(assert)(
        'getHello', 
        (serviceStub) => {serviceStub.sayHello = sinon.stub().returns('Hello Richard');}, 
        'Hello Richard',
        'Richard');
});

test('GreetingsController GET bye', function(assert) {
    performTest(assert)(
        'getBye', 
        (serviceStub) => {serviceStub.sayBye = sinon.stub().returns('Bye World');}, 
        'Bye World');
    assert.end();
});

test('GreetingsController GET bye?name=Richard', function(assert) {
    performTest(assert)(
        'getBye', 
        (serviceStub) => {serviceStub.sayBye = sinon.stub().returns('Bye Richard');}, 
        'Bye Richard',
        'Richard');
    assert.end();
});
