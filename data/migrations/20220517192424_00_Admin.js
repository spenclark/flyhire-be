/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("admin", function (table) {
    table.uuid("id").unique();
    table.timestamp("created_at");
    table.string("email");
    table.string("password");
    table.integer("hierarchy");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("admin");
};
