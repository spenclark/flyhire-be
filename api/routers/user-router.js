const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/user-model");
const Token = require("../helpers/auth-helpers.js");

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = Token.getJwt(user.email);
        res.status(200).json({
          id: user.id,
          email: user.email,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
