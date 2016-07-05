[![Build Status](https://travis-ci.org/mag3io/sb-greetings.svg?branch=master)](https://travis-ci.org/mag3io/sb-greetings)

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
