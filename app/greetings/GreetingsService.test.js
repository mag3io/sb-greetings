'use strict';

const test = require('tape');

const sut = require('./GreetingsService');

test('GreetingsService#sayHello() should return "Hello World" if the parameter name is "undefined"', function(assert) {
  assert.equal(sut.sayHello(), 'Hello World');
  assert.end();
});

test('GreetingsService#sayHello() should return "Hello Richard" if the parameter name is "Richard"', function(assert) {
  assert.equal(sut.sayHello('Richard'), 'Hello Richard');
  assert.end();
});

test('GreetingsService#sayBye() should return "Bye World" if the parameter name is "undefined"', function(assert) {
  assert.equal(sut.sayBye(), 'Bye World');
  assert.end();
});

test('GreetingsService#sayBye() should return "Bye Richard" if the parameter name is "Richard"', function(assert) {
  assert.equal(sut.sayBye('Richard'), 'Bye Richard');
  assert.end();
});
