'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect;
chai.use(chaiHttp);

describe("GET /hello", () => {
    it('with undefined "name" in the query string should return the default message', (done) => {
        chai
            .request('http://localhost:3000')
            .get('/greetings/hello')
            .end((err,res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
});