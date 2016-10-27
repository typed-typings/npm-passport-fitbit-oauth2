import OAuth2Strategy = require('passport-oauth2');
import Store = require('passport-oauth2/lib/store/null');

/**
 * The Fitbit authentication strategy authenticates requests by delegating to
 * Fitbit using the OAuth 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `accessToken`,
 * `refreshToken` and service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Examples:
 *
 *     passport.use(new FitbitStrategy({
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/fitbit/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 */
declare class FitbitStrategy extends OAuth2Strategy<FitbitStrategy.Profile> {
  name: 'fitbit';

  constructor (options: FitbitStrategy.Options, verify: OAuth2Strategy.VerifyFunction<FitbitStrategy.Profile>);
}

declare namespace FitbitStrategy {
  export interface Options {
    authorizationURL?: string;
    tokenURL?: string;
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback?: boolean;
    scope?: string[];
    scopeSeparator?: string;
    state?: string;
    store?: Store;
    proxy?: boolean;
    skipUserProfile?: boolean;
  }

  export interface Profile {
    provider: 'fitbit';
    id: string;
    name: string;
    displayName: string;
    birthday: string;
    relationship: string;
    isPerson: boolean;
    isPlusUser: boolean;
    gender: string;
    picture: string;
    user?: any;
    _json: any;
  }

  export const Strategy: typeof FitbitStrategy;
}

export = FitbitStrategy;
