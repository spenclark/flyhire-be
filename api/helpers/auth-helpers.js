const jwt = require("jsonwebtoken");

module.exports = {
  validateUser,
  getJwt,
};

function validateUser(user) {
  //   For example if banned or bot errors.push()
}

function getJwt(email) {
  const payload = {
    email,
  };

  const secret =
    process.env.JWT_SECRET || "Let me tell you a myth about secrets..";

  const options = {
    expiresIn: "31d",
  };

  return jwt.sign(payload, secret, options);
}