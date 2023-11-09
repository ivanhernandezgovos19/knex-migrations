import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "redshift",
    debug: false,
    connection: {
      user: 'poc',
      database: 'cdor-poc',
      password: 'CDOR-poc-2023',
      port: 5439,
      host: 'cdor-poc.427656514443.us-west-2.redshift-serverless.amazonaws.com',
    },
    migrations: {
      tableName: "knex_migrations",
      disableTransactions: true,
      schemaName: "public"
    }
  },
};

module.exports = config;
