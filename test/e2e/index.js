'use strict';

const chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = chai.expect;
chai.use(chaiHttp);

global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();

const exec = require('child_process').exec;

setTimeout(function () {
    before((done) => {
        exec('npm start', (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (err) throw err;
        });
        setTimeout(() => {
            done();
        }, 1000);
    });
    after(() => {
        exec('npm stop', (err, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (err) throw err;
        });
    });
    run();
}, 200);