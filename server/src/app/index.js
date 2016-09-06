// -- Create the application
const app = require('express')(),
  env = process.env,
  port = env.app_port || 3000,
  appName = env.app_name || require('../package.json').name;

// -- Configure the log
require('./common/ProcessEnv').builkSet({ 'LOG_LEVEL': 'DEBUG' });
const logging = require('./common/Logging.js'),
  log = logging.log;
app.use(logging.requestLogger());
app.use(logging.domainMiddleware());

// -- Configure the endpoints
const greetingsController = require('./greetings/GreetingsController.js');
app.use('/greetings', greetingsController);

// -- Configure error logging has to be put after routing.
app.use(logging.errorLogger);

const start = () => {
  process.title = appName;
  const stop = stopServer(app.listen(port, () => {
    log.info("App started and listening on port", port);
  }));
  process.on('SIGTERM', stop);
  return stop;
};

const stopServer = (server) => {
  return () => {
    log.info("Try to gracefully shutdown.");
    server.close(() => {
      log.info("App closed.");
      process.exit(0);
    });
    setTimeout(() => {
      console.log("Force shutdown.");
      process.exit(1);
    }, 4000);
  };
};

module.exports = {
  name: appName,
  start: start
};
