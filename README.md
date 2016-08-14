[![Build Status](https://travis-ci.org/mag3io/sb-greetings.svg?branch=master)](https://travis-ci.org/mag3io/sb-greetings)
[![bitHound Overall Score](https://www.bithound.io/github/mag3io/sb-greetings/badges/score.svg)](https://www.bithound.io/github/mag3io/sb-greetings)
# SandBox Greetings

## Overview
This example uses the [expressjs](http://expressjs.com/) framework.


## Running the server

### From source

To run the server, follow these simple steps:

```
cd server/src
npm install
npm start | bunyan -o short
```

Alternatively you can run `nodemon index.js | bunyan -o short`

### From container

`cd server`

To build the docker image run `docker build -t sb-greetings .`
To run the container run `docker run -d -p 3000:3000 --name sb-greetings sb-greetings`.
To remove the container `docker rm -f sb-greetings`

## REST API:

```
GET http://localhost:3000/greetings/hello?name=
```

```
GET http://localhost:3000/greetings/bye?name=
```

## Logging

Log is done with [bunyan](https://github.com/trentm/node-bunyan). Bunyan is "Logs for MAchines oriented, read this [post](https://journal.paul.querna.org/articles/2011/12/26/log-for-machines-in-json/)
for further details.

Driving ideas:
* [Logs for MAchines oriented](https://journal.paul.querna.org/articles/2011/12/26/log-for-machines-in-json/)
for further details.
* Each request should have a unique id present in all logs for better tracking of request processing. 
Use [domain](https://nodejs.org/api/domain.html) to get current request from anywhere in the code in order to add requestId to the log even if request is not in the arguments of the funciton
as describe in this [post](http://stackoverflow.com/questions/12575858/is-it-possible-to-get-the-current-request-that-is-being-served-by-node-js.
* All general ideas from [O'Reilly - Programming Javascript Application - Logging](http://chimera.labs.oreilly.com/books/1234000000262/ch07.html)


## Travis integration :

Travis integration is enabled through "Repo/Settings/Webhooks & services"

On Travis side repo hook should be as well [enabled](https://travis-ci.org/profile/oleg-korolenko).

.travis.yml contains all commands that Travis need to execute launch a build ([docs on NodeJS integration](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/))

Build details and logs can be checked on [Travis website](https://travis-ci.org/mag3io/sb-greetings/builds)

According to default configuration every push on every branch will trigger a build (pull requests merge as well).

Repo README.md contains a link to the latest build status which si shown as an icon:
 ```
 [![Build Status](https://travis-ci.org/mag3io/sb-greetings.svg?branch=master)](https://travis-ci.org/mag3io/sb-greetings)
 ```
