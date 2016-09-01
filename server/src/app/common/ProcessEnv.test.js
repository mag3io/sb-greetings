'use strict';

const sut = require('./ProcessEnv');

describe('ProcessEnv', function () {
    
    describe('#safeGet()', function () {
        it('should return the value of a process.env variable when set.', function () {
            process.env.foo = 'bar';
            assert.equal(sut.safeGet('foo'), 'bar');
        });
        it('should return the value of a process.env variable when set even if a default value has been provided.', function () {
            process.env.foo = 'bar';
            assert.equal(sut.safeGet('foo','john'), 'bar');
        });
        it('should return the default value if a process.env variable if not set.', function () {
            assert.equal(sut.safeGet('foo','bar'), 'bar');
        });
    });
    
    describe('#safeSet()', function () {
        it('should not set process.env variable if that later is already set.', function () {
            process.env.foo = 'bar';
            sut.safeSet('foo','john')
            assert.equal(process.env.foo, 'bar');
        });
        it('should set process.env variable.', function () {
            sut.safeSet('foo','bar')
            assert.equal(process.env.foo, 'bar');
        });
    });

});
