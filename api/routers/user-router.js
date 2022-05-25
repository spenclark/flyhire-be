const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/user-model.js");
const Token = require("../helpers/auth-helpers.js");

router.post("/login", (req, res) => {
  let { primary_email, password } = req.body;

  Users.findByEmail(primary_email)
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = Token.getJwt(user.primary_email);
        res.status(200).json({
          id: user.id,
          primary_email: user.primary_email,
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

router.post("/register", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  // const token = Token.getJwt(user.primary_email);

  Users.createUser(user)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      res.status(500).json(error.detail);
    });
});

module.exports = router;