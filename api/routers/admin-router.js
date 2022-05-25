const router = require("express").Router();
const Admin = require("../models/admin-model");

router.get("/user", (req, res) => {
  Admin.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


module.exports = router;
