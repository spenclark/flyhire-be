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
  console.log(typeof id, "type of");
  console.log(id.toString(), "type of");
  return db('users')
    .where({ id })
    .first();
};

async function createUser(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function updateUser() {
  return db("users").where("id", id).update(user);
} 

function deleteUser() {
  return db("users").where("id", id).del();
}
