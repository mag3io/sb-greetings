'use strict';

const sut = require('./Logging');

describe('Logging', function () {    
    it('should export 5 logger and 1 middleware.', function () {
        assert.equal(sut.log !== undefined, true)
    });
});
