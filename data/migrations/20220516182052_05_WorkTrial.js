/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("work_trial", function (table) {
    table.uuid("id").unique();
    table.timestamp("created_at");
    table
      .uuid("applicant_id")
      .unsigned()

      .references("id")
      .inTable("applicant")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .uuid("post_id")
      .unsigned()

      .references("id")
      .inTable("job_post")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .uuid("user_id")
      .unsigned()

      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("start_date");
    table.string("aprox_end_date");
    table.string("total_hours");
    table.string("hourly_rate");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("work_trial");
};
