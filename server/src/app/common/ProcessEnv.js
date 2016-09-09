'use strict';

let safeGet = (key, defaultValue) => {
  return process.env[key] || defaultValue;
};

let safeSet = (key, value) => {
  process.env[key] = process.env[key] || value;
};

let builkSet = (envs) => {
  Object.keys(envs).forEach((key) => { process.env[key] = envs[key]; });
};

module.exports = {
  builkSet: builkSet,
  safeGet: safeGet,
  safeSet: safeSet
};