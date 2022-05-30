const db = require("../../data/db-config");

module.exports = {
  findById,
  findByEmail,
  createApplicant,
  updateApplicant,
  deleteApplicant,
};

function findByEmail(where) {
  return db("applicant").where({ primary_email: where }).returning("*");
}
function findById(id) {
  return db("applicant").where({ id }).first();
}

function createApplicant(newItem) {
  return db("applicant").insert(newItem).returning("*");
}

function updateApplicant(data) {
  return db("applicant").where("id", id).update(data);
}

function deleteApplicant() {
  return db("applicant").where("id", id).del();
}
