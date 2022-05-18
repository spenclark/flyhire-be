/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable("application", function (table) {
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
     table.string("status").defaultTo("pending"); // drop down a) aviabale to nights and weekends b) align with day hours
     table.boolean("available"); 
     table.string("cover_letter");
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
      return knex.schema.dropTableIfExists("application");
};
