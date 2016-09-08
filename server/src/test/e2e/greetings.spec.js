'use strict';

describe("GET /hello", () => {
    it('with undefined "name" in the query string should return the default message', (done) => {
        chai
            .request('http://localhost:3000')
            .get('/greetings/hello')
            .end((err,res) => {
                if (err) done(err);
                expect(res).to.have.status(200);
                done();
            });
    })
});