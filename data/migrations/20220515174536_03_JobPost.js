/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable("job_post", function (table) {
     table.uuid("id");
     table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
     table
       .uuid("user_id")
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("users")
       .onUpdate("CASCADE")
       .onDelete("CASCADE");
     table.string("job_title");
     table.string("job_type");
     table.string("exp_level");
     table.string("visa_sponsorship");
     table.string("location");
     table.string("remote_status");
     table.jsonb("tags");

     //  Comp
     table.integer("salary_min");
     table.integer("salary_max");

     // Trial
     // WE need timezone buy not in v1
     table.string("interview_process");
     table.string("project_type");
     table.string("candidate_availability"); // drop down a) aviabale to nights and weekends b) align with day hours
     table.string("total_work_days");
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("jobPost");
};
