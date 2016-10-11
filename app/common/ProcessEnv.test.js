'use strict';

const sut = require('./ProcessEnv');

const test = require('tape');

test('ProcessEnv#safeGet should return the value of a process.env variable when set.', function(assert) {
    process.env.foo = 'bar';
    assert.equal('bar', sut.safeGet('foo'));
    assert.end();
})

test('ProcessEnv#safeGet should return the value of a process.env variable when set even if a default value has been provided.', function(assert) {
    process.env.foo = 'bar';
    assert.equal(sut.safeGet('foo','john'), 'bar');
    assert.end();
});

test('ProcessEnv#safeGet should return the default value if a process.env variable if not set.', function(assert) {
    assert.equal('bar', sut.safeGet('foo','bar'));
    assert.end();
});

test('ProcessEnv#safeSet should not set process.env variable if that later is already set.', function(assert) {
    process.env.foo = 'bar';
    sut.safeSet('foo','john');
    assert.equal('bar', process.env.foo);
    assert.end();
});

test('ProcessEnv#safeSet should set process.env variable.', function(assert) {
    sut.safeSet('foo','bar');
    assert.equal('bar', process.env.foo);
    assert.end();
});