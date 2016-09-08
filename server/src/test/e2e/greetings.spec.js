'use strict';

describe("GET /hello", () => {
    const assert = (done, query) => {
        chai
            .request('http://localhost:3000')
            .get('/greetings/hello')
            .query(query)
            .end((err, res) => {
                if (err) done(err);
                expect(res).to.be.json;
                expect(res).to.have.status(200);
                expect(res.body).to.have.all.keys('messages', 'when');
                expect(res.body.messages).to.equal('Hello ' + ((query && query.name) || 'World'));
                expect(res.body.when).to.not.be.undefined;
                done();
            });
    };
    it('with undefined "name" in the query string should return the default message "Hello World"', (done) => {
        assert(done);
    })
    it('with "name=richard" in the query string should return the message "Hello richard"', (done) => {
        assert(done, {name: 'richard'});
    })
});