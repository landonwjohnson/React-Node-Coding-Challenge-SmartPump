const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const { DB } = require("./db");
const keys = require("./keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      let user = DB.get("users").find({ _id: jwt_payload._id }).value();

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
  );
};
