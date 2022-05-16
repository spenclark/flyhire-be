/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable("applicant", function (table) {
     table.uuid("id");
     table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
     table.string("email");
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
