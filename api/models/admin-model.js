const db = require("../../data/db-config");

module.exports = {
  getAll,
  findById,
  createUser,
  updateUser,
  deleteUser,
};

function getAll() {
  return db("users");
}

function findById(id) {
  return db("users").where("id", id).first();
} // should only be called through createUser.

function deleteUser() {
  return db("users").where("id", id).del();
}
