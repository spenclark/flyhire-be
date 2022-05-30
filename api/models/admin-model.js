const db = require("../../data/db-config");

module.exports = {
  getAll,
  findWhere,
  deleteUser,
  getAllApplicants,
};

function getAll() {
  return db("users");
}


function getAllApplicants() {
  return db("applicant");
}

function deleteUser() {
  return db("users").where("id", id).del();
}

function findWhere(where) {
  return db("users").where({ where });
}
