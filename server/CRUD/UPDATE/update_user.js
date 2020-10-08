const Validator = require("validator");
const { DB } = require("../../config/DB");
const isEmpty = require("../../utils/is-empty");

const validateReqBody = (data) => {
  let errors = {};
  data._id = !isEmpty(data._id) ? data._id : "";

  if (isEmpty(data._id)) {
    errors._id = "user._id is required";
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
    let user = DB.get("users").find({ _id: req.body._id }).value();

    if (user._id.toString() === req.body._id.toString()) {
      let payload = {};
      // Check to see what's in req.body
      // and add it to the payload
      // that we are going to use
      // to update the user
      if (req.body.isActive) payload.isActive = req.body.isActive;
      if (req.body.balance) payload.balance = req.body.balance;
      if (req.body.picture) payload.picture = req.body.picture;
      if (req.body.age) payload.age = req.body.age;
      if (req.body.eyeColor) payload.eyeColor = req.body.eyeColor;

      if (req.body.name) {
        let { last = "", first = "" } = req.body.name;
        let name = {
          first,
          last,
        };
        payload.name = name;
      }
      if (req.body.company) payload.company = req.body.company;
      if (req.body.email) payload.email = req.body.email;
      if (req.body.password) payload.password = req.body.password;
      if (req.body.phone) payload.phone = req.body.phone;
      if (req.body.address) payload.address = req.body.address;

      console.log(payload, "this is payload");
      let updatedUser = DB.get("users")
        .find({ _id: req.user._id })
        .assign(payload)
        .write();

      next();
    }
  } catch (err) {
    let errors = {};
    errors.err = err.toString();
    errors.update_user = "Failed to update user";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }
};
