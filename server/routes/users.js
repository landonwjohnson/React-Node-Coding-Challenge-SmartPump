const passport = require("passport");
const get_users = require("../CRUD/READ/get_users");
const express = require("express");
const login_user = require("../CRUD/READ/login_user");
const update_user = require("../CRUD/UPDATE/update_user");
const refresh_user_token = require("../CRUD/READ/refresh_user_token");
const update_user_picture = require("../CRUD/UPDATE/update_user_picture");
const get_user_picture_by_userid = require("../CRUD/READ/get_user_picture_by_userid")
const router = express.Router();


// @route api/users
// @method GET
// @desc allows someone to get a list of users
// @access Public
router.get("/", get_users);


// @route api/users/picture/userid
// @method GET
// @desc allows someone to get the picture for that user
// @access Public
router.get("/picture/:userid", get_user_picture_by_userid);

// @route api/users/login
// @method GET
// @desc allows someone to login into their account
// @access Public
router.post("/login", login_user);


// @route api/users/picture
// @method PATCH
// @desc allows user to update their picture using userid and picture in req.body
// @access Private
router.patch('/picture', 
passport.authenticate("jwt", {
  session: false,
}),
update_user_picture
)

// @route api/users
// @method POST
// @desc allows user to update multiple fields
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  update_user,
  refresh_user_token
);

module.exports = router;
