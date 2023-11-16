import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.renameTable('date_dimension', 'dim_date');
};

export async function down(knex: Knex): Promise<void> {
  return knex.schema.renameTable('dim_date', 'date_dimension');
};
