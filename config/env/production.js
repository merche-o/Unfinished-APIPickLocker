/**
 * Production environment settings
 * @description :: This section overrides all other config values ONLY in production environment
 */

module.exports = {
  port: process.env.PORT || 80,
  log: {
    level: 'info'
    },
  models: {
    connection: 'postgresql'
  }
};
