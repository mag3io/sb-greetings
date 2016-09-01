'use strict';
require('../app/common/ProcessEnv').safeSet('LOG_LEVEL', 'ERROR');
global.assert = require('chai').assert;