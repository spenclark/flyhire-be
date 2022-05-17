const db = require("../../data/db-config");

module.exports = {
  getAll,
  findById,
  createUser,
  updateUser,
  deleteUser,
};

function findById(id) {
  return db("users").where("id", id).first();
} // should only be called through createUser.

async function createUser(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function updateUser() {
  return db("users").where("id", id).update(user);
} 

