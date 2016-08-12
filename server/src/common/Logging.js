const logLevel = require('./ProcessEnv').safeGet('LOG_LEVEL', 'DEBUG');

const logSettings = { name: 'GreetingsApp', level: logLevel },
  bunyan = require('bunyan'),
  bunyan_log = bunyan.createLogger(logSettings),
  bunyan_request = require('bunyan-request-logger'),
  bunyan_request_log = bunyan_request(logSettings),
  path = require('path'),
  domain = require('domain');

logger = (layer) => {
    return (filename) => {
      return () => {
        const name = path.basename(filename, '.js');
        return bunyan_log.child({
          requestId: process.domain && process.domain._req && process.domain._req.requestId || 'none',
          layer: layer,
          module: name
        });
      };
    };
  };

domainMiddleware = () => {
    return function domainMiddleware(req, res, next) {
      const reqDomain = domain.create();
      reqDomain._req = req;
      reqDomain.add(req);
      reqDomain.add(res);
      reqDomain.run(next);
      reqDomain.on('error', function (err) {
        reqDomain.dispose(); // Once a domain is disposed, further errors from the emitters in that set will be ignored.
        next(err);
      });
      res.on('close', function () {
        reqDomain.dispose();
      });
      res.on('finish', function () {
        reqDomain.dispose();
      });
    };
  };

module.exports = {
  log: bunyan_log,
  domainLog: logger('DOMAIN'),
  controllerLog: logger('CONTROLLER'),
  requestLogger: bunyan_request_log.requestLogger,
  errorLogger: bunyan_request_log.errorLogger,
  domainMiddleware: domainMiddleware
};
