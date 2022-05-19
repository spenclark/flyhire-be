// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/sqlite3.db3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  pool: {
    min: 2,
    max: 10,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: `${__dirname}/data/migrations`,
    },
    seeds: {
      directory:  `${__dirname}/data/seeds`,
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
