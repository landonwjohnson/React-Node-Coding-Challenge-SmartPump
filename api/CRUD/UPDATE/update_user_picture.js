const { DB } = require("../../config/DB");
const isEmpty = require("../../utils/is-empty");

const validateReqBody = (data) => {
  let errors = {};
  data.userid = !isEmpty(data.userid) ? data.userid : "";
  data.picture = !isEmpty(data.picture) ? data.picture : "";

  if (isEmpty(data.userid)) {
    errors.userid = "userid is required";
  }
  if (isEmpty(data.picture)) {
    errors.picture = "picture is required";
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
    let user = DB.get("users").find({ _id: req.body.userid }).value();

    if (user._id.toString() === req.body.userid.toString()) {
      let payload = {
        picture: req.body.picture,
      };

      console.log(payload, "this is payload");
      let updatedUser = DB.get("users")
        .find({ _id: req.user._id })
        .assign(payload)
        .write();

      return res.status(204).json({ message: "success" });
    }
  } catch (err) {
    let errors = {};
    errors.err = err.toString();
    errors.update_user_picture = "Failed to update user picture";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }
};
