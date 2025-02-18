// passportConfig.js
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://localhost:5002/auth/twitter/callback'
},
function(token, tokenSecret, profile, done) {
  // Handle user profile and authentication here
  return done(null, profile);
}));

module.exports = passport;
