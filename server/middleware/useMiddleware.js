const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");

module.exports = function useMiddleware(app) {
    app.use(cors());
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
    app.use(bodyParser.json({ limit: "500mb", extended: true }));

    app.use(express.urlencoded({ extended: false }));

    app.use(express.json());
    app.use(passport.initialize());
    require('../config/passport')(passport)
    return app;
  };