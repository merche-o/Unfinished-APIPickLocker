/**
 * Development environment settings
 * @description :: This section overrides all other config values ONLY in development environment
 */

module.exports = {
  port: 3000,
  log: {
    level: 'silly'
  },
  models: {
   connection: 'postgresql'  
  }
};
