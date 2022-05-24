const db = require("../../data/db-config");

module.exports = {
  findById,
  findByEmail,
  createUser,
  updateUser,
  deleteUser,
};

function findByEmail(where) {
  return db("users").where({ primary_email: where });
}
function findById(id) {
  return db("users").where("id", id).first();
} // should only be called through createUser.

async function createUser(user) {
  const [email] = await db("users").insert(user, "primary_email");
  return findByEmail(email);
  
}

function updateUser() {
  return db("users").where("id", id).update(user);
} 

function deleteUser() {
  return db("users").where("id", id).del();
}
