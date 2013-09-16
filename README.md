# passport-readability

[![Build](https://travis-ci.org/eoinbrazil/passport-readability.png)](http://travis-ci.org/jeoinbrazil/passport-readability)
[![Coverage](https://coveralls.io/repos/eoinbrazil/passport-readability/badge.png)](https://coveralls.io/r/eoinbrazil/passport-readability)
[![Dependencies](https://david-dm.org/eoinbrazil/passport-readability.png)](http://david-dm.org/eoinbrazil/passport-readability)

## build based on [Passport](http://passportjs.org/) and particularly [Passport-Twitter](http://https://github.com/jaredhanson/passport-twitter)

[Passport](http://passportjs.org/) strategy for authenticating with [Readability](http://readability.com/)
using the OAuth 1.0a API.

This module lets you authenticate using Readability in your Node.js applications.
By plugging into Passport, Twitter authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-readability

## Usage

#### Configure Strategy

The Readability authentication strategy authenticates users using a Readability account
and OAuth tokens.  The strategy requires a `verify` callback, which receives the
access token and corresponding secret as arguments, as well as `profile` which
contains the authenticated user's Readability profile.   The `verify` callback must
call `done` providing a user to complete authentication.

In order to identify your application to Readability, specify the consumer key,
consumer secret, and callback URL within `options`.  The consumer key and secret
are obtained by [creating an application](http://www.readability.com/account/api) at
Readabilities's [app add-on page](http://www.readability.com/apps) site.

    passport.use(new ReadabilityStrategy({
        consumerKey: READABILITY_CONSUMER_KEY,
        consumerSecret: READABILITY_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/readability/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ twitterId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'readability'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/readability',
      passport.authenticate('readability'));
    
    app.get('/auth/readability/callback', 
      passport.authenticate('readability', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [signin example](https://github.com/jaredhanson/passport-readability/tree/master/examples/signin).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Eoin Brazil](http://github.com/eoinbrazil)
  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2013 Eoin Brazil <[http://github.com/eoinbrazil/](http://github.com/eoinbrazil)>
Copyright (c) 2011-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
