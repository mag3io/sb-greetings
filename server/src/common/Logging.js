const logSettings = { name: 'GreetingsApp' },
  bunyan = require('bunyan'),
  bunyan_log = bunyan.createLogger(logSettings),
  bunyan_request = require('bunyan-request-logger'),
  bunyan_request_log = bunyan_request(logSettings);

module.exports = {

  log: bunyan_log,

  createLogger: (name) => {
    return (req) => {
      return bunyan_log.child({
        handler: name,
        requestId: req.requestId
      })
    }
  },

  requestLogger: bunyan_request_log.requestLogger,

  errorLogger: bunyan_request_log.errorLogger
};
