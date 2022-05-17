/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("users").insert([
    { primary_email: "spen@clark.com", password: "12we21" },
  ]);
};
