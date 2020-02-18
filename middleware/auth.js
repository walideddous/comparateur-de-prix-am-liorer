const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  //chek if not token
  if (!token) {
    return res.status(401).send("Access denied. no token provided");
  }

  //verify token
  try {
    const decoded = jwt.verify(token, config.get("jsonSecretKey"));
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Token is not valid");
  }
};
