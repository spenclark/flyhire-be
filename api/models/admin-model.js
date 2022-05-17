const db = require("../../data/db-config");

module.exports = {
  getAll,
  findWhere,
  deleteUser,
};

function getAll() {
  return db("users");
}

function findWhere(where) {
  return db("users").where({ where });
}

function deleteUser() {
  return db("users").where("id", id).del();
}
