/// <reference path="bundle.d.ts" />

import Strategy = require('passport-fitbit-oauth2');

new Strategy.FitbitOAuth2Strategy(
  {
    clientID: 'abc',
    clientSecret: '123',
    callbackURL: 'http://yourdormain:3000/auth/fitbit/callback'
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, {});
  }
);
