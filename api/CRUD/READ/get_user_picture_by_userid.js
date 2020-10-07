const { DB } = require("../../config/DB");
const isEmpty = require("../../utils/is-empty");

const validateReqParams = (data) => {
  let errors = {};
  data.userid = !isEmpty(data.userid) ? data.userid : "";

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = async (req, res, next) => {
  const { errors, isValid } = validateReqParams(req.params);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    let user = DB.get("users")
      .find({ _id:req.params.userid })
      .value().picture

    if (user) {
        return res.status(200).json(user)
     
    
    } else {
      errors.user = `There's no user with the id id ${req.params.userid}`;
      return res.status(500).json(errors);
    }
  } catch (err) {
    let errors = {};
    errors.err = err.toString();
    errors.login_user = "Failed to get user picture";
    errors.endpoint = req.originalUrl;
    return res.status(500).json(errors);
  }
};
