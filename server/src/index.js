// -- Create the application
const app = require('express')(),
  env = process.env,
  port = env.myapp_port || 3000;

// -- Configure the log
require('./common/ProcessEnv').builkSet({'LOG_LEVEL': 'DEBUG'});
const logging = require('./common/Logging.js'),
  log = logging.log;
app.use(logging.requestLogger());
app.use(logging.domainMiddleware());

// -- Configure the endpoints
const greetingsController = require('./greetings/GreetingsController.js');
app.use('/greetings', greetingsController);

// -- Configure error logging has to be put after routing.
app.use(logging.errorLogger);

// Start the application
app.listen(port, () => {
  log.info("App started and listening on port", port);
});
