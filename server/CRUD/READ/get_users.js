const { DB } = require("../../config/DB");

module.exports = async (req, res, next) => {
  let { limit } = req.query;
  if (!limit) limit = 10;

  if (typeof limit === "string") {
    limit = Number(limit);
  }

  try {
    const users = DB.get("users").value();

    return res.status(200).json(users);
  } catch (err) {
    let errors = {};
    errors.get_users = "Failed to get users";
    errors.endpoint = "get_users";
    return res.status(500).json(errors);
  }
};
