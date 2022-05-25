/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').createTable("users", function (table) {
    table
      .uuid("id")
      .primary()
      .unique()
      .defaultTo(String(knex.raw("uuid_generate_v4()")));
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.string("primary_email").unique();
    table.string("password");
    table.string("website");
    table.string("bio");
    table.string("employee_count");
    table.string("hq_location");
    table.string("company_name");

    table.string("interview_process");
    table.string("project_type");
    table.string("candidate_availability");
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .raw('drop extension if exists "uuid-ossp"');
};
