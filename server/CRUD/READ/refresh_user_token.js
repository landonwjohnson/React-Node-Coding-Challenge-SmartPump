const jwt = require("jsonwebtoken");
const { DB } = require("../../config/DB");
const { secretOrKey } = require("../../config/keys");

module.exports = refresh_user_token = async (req, res, next) => {
  const { secretOrKey } = require("../../config/keys");

  try {
    let expiresIn = 1000 * 60 * 60 * 24 * 365;

    let user = DB.get("users").find({ _id: req.user._id }).value();

    let payload = {
      _id: user._id,
      guid: user.guid,
      isActive: user.isActive,
      balance: user.balance,
      age: user.age,
      eyeColor: user.eyeColor,
      name: user.name,
      company: user.company,
      email: user.email,
      phone: user.phone,
      address: user.address,
    };
    // Sign Token
    jwt.sign(
      payload,
      secretOrKey,
      {
        expiresIn,
      },
      (err, token) => {
        if (err) {
          return res.status(500).json(err.toString);
        }
        return res.status(200).json({
          success: true,
          refreshUserToken: true,
          token: "Bearer " + token,
        });
      }
    );
  } catch (err) {
    let errors = {};
    errors.refresh_user_token = "Failed to refresh_user_token";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }
};
