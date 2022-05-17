/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable("application", function (table) {
     table.uuid("id");
     table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
     table
       .uuid("applicant_id")
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("applicant")
       .onUpdate("CASCADE")
       .onDelete("CASCADE");
     table
       .uuid("user_id")
       .unsigned()
       .notNullable()
       .references("id")
       .inTable("users")
       .onUpdate("CASCADE")
       .onDelete("CASCADE");
     table.string("status").defaultTo("pending"); // drop down a) aviabale to nights and weekends b) align with day hours
     table.boolean("available"); // drop down a) aviabale to nights and weekends b) align with day hours
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
