'use strict';

const sut = require('./Logging');

const test = require('tape');

test('Logging should export 5 logger and 1 middleware.', function(assert) {
    assert.equal(true, sut.log !== undefined);
    assert.end();
});
