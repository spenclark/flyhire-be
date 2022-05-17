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
    process.env.JWT_SECRET ||
    "9CB45284A63AED35EB91D56181FE7D3D92510A3DA2DD76A007A312180B18E2E4";

  const options = {
    expiresIn: "31d",
  };

  return jwt.sign(payload, secret, options);
}
