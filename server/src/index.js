'use strict';

const program = require('commander'),
    app = require('./app/index');

program
    .version(require('./package.json').version)
    .option('start', 'Start the app.')
    .option('stop', 'Stop the app.')
    .parse(process.argv);

if (program.start) app.start();

if (program.stop) {
    require('child_process').exec("killall -SIGINT " + app.name, 
        (error, stdout, stderr) => {
            if (stdout) console.log('stdout:' + stdout);
            if (stderr) console.log('stderr:' + stderr);
            if (error) console.log(error);
        });
}

