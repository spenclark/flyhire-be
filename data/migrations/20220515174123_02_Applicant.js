/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema
     .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
     .createTable("applicant", function (table) {
       table
         .uuid("id")
         .primary()
         .unique()
         .defaultTo(knex.raw("uuid_generate_v4()"));
       table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
       table.string("email").unique();
       table.string("password");
       table.string("first_name");
       table.string("last_name");
       table.string("website");
       table.string("linkedin");
       table.string("job_title");
       table.string("recent_employeer");
       table.string("bio");
       table.string("search_status");
       table.string("next_job_letter");
       table.string("exp_level");
       table.string("currency");
       table.string("salary_expectation");
     });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("applicant");
};
