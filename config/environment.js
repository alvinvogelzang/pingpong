/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pingpong',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // Only change this line to switch between mirage/backend
    const useMirage = true;

    // Can't touch this, Hammertime
    ENV['ember-cli-mirage'] = { enabled: useMirage };
    if (!useMirage) ENV.API_HOST = 'http://backend.com';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
