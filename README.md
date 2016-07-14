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
npm start
```
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
