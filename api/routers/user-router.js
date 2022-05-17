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

router.post("/register", (req, res) => {
  let user = req.body;

  //   const validateResult = validateUser(user);

  //   if (validateResult.isSuccessful === true) {
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  const token = Token.getJwt(user.email);

  Users.add(user)
    .then((saved) => {
      res.status(201).json({ id: saved.id, email: saved.email, token: token });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  //   } else {
  res.status(400).json({
    message: "Invalid user info, see errors",
    errors: validateResult.errors,
  });
  //   }
});