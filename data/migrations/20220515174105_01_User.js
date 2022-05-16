/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id");
    table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
    table.string("primary_email");
    table.string("password");
    table.string("website");
    table.string("bio");
    table.string("employee_count");
    table.string("hq_location");

    table.string("interview_process");
    table.string("project_type");
    table.string("candidate_availability"); 
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
