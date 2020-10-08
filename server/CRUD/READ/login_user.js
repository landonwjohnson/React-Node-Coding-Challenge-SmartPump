const Validator = require("validator");
const jwt = require("jsonwebtoken");
const { DB } = require("../../config/DB");
const isEmpty = require("../../utils/is-empty");
const { secretOrKey } = require("../../config/keys");

const validateReqBody = (data) => {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  console.log(data, 'this is data')
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = async (req, res, next) => {
  const { errors, isValid } = validateReqBody(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    let user = DB.get("users")
      .find({ email: req.body.email, password: req.body.password })
      .value();

    if (user) {
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
          expiresIn: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        },
        (err, token) => {
          if (err) {
            return res.status(500).json(err.toString);
          }
          return res.status(200).json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
    } else {
      errors.password = "Invalid login information";
      return res.status(500).json(errors);
    }
  } catch (err) {
    let errors = {};
    errors.err = err.toString();
    errors.login_user = "Failed to login_user";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }
};
