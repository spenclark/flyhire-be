const jwt = require("jsonwebtoken");

module.exports = {
  getJwt,
};

function getJwt(email) {
  const payload = {
    email,
    // Get hiearchy
  };

  const secret =
    process.env.JWT_SECRET || "Let me tell you a myth about secrets..";

  const options = {
    expiresIn: "124d",
  };

  return jwt.sign(payload, secret, options);
}
