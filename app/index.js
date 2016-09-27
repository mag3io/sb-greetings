'use strict';

const program = require('commander'),
  logging = require('./common/Logging.js'),
  log = logging.log,
  env = process.env,
  appName = env.app_name || require('../package.json').name,
  appVersion = require('../package.json').version;

program
  .version(appVersion)
  .option('start', 'Start the app.')
  .option('stop', 'Stop the app.')
  .parse(process.argv);

if (program.stop) {
  require('child_process').exec('killall -SIGINT ' + appName, 
  (error, stdout, stderr) => {
    if (stdout) log.info(stdout);
    if (stderr) log.error(error, stderr);
  });
}

if (program.start) {
  // -- Create the application
  const app = require('express')(),
    port = env.app_port || 3000;

  // -- Configure the log
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
    const server = app.listen(port, () => {
      log.info('App started and listening on port', port);
    });
    process.on('SIGTERM', () => {
      log.info('Try to gracefully shutdown.');
      server.close(() => {
        log.info('App closed.');
        process.exit(0);
      });
      setTimeout(() => {
        process.exit(1);
      }, 4000);
    });
  };
  start();
}
