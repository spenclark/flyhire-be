const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

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

