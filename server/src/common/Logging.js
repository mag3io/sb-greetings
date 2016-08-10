const logSettings = { name: 'GreetingsApp' },
  bunyan = require('bunyan'),
  bunyan_log = bunyan.createLogger(Object.assign(logSettings, {level: 'DEBUG'})),
  bunyan_request = require('bunyan-request-logger'),
  bunyan_request_log = bunyan_request(logSettings),
  path = require('path');

module.exports = {

  log: bunyan_log,

  requestLogger: bunyan_request_log.requestLogger,

  errorLogger: bunyan_request_log.errorLogger,

  childLog: (filename) => {
    const name = path.basename(filename, '.js');
    return bunyan_log.child({module: name});
  },

  childRequestLog: (filename) => {
    return (req) => {
      if (!req) {throw new Error('"request" is required')}
      const name = path.basename(filename, '.js');
      return bunyan_log.child({
        module: name,
        requestId: req.requestId
      })
    }
  }
};
