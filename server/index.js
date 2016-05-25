const express = require('express');
const app = express();

const logConfig = require('./common/LogConfig.js');
const greetingsController = require('./greetings/GreetingsController.js');

app.use(logConfig);
app.use('/greetings', greetingsController);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
