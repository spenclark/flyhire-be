const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const adminRouter = require("./routers/admin-router");
server.use("/api/admin", adminRouter);

const userRouter = require("./routers/user-router");
server.use("/api/user", userRouter);

server.get("/", (req, res) => {
  res.json({
    status: "running",
    message: "OpenOffer Back-end",
  });
});

module.exports = server;


// postgres://jtgarnpzfemxvn:3bb528f1a7f7357d127a167e6571c077af22b517a4947032a174f51c2fbb438d@ec2-3-231-82-226.compute-1.amazonaws.com:5432/d2pvfqfjhnjbr