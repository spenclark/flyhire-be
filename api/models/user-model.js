const db = require("../../data/db-config");

module.exports = {
  findById,
  findByEmail,
  createUser,
  updateUser,
  deleteUser,
};

function findByEmail(where) {
  return db("users").where({ primary_email: where }).returning("*");
}
function findById(id) {
  return db("users").where({ id }).first();
};

function createUser(newItem) {
  return db("users").insert(newItem).returning("*");
}

function updateUser() {
  return db("users").where("id", id).update(user);
} 

function deleteUser() {
  return db("users").where("id", id).del();
}
