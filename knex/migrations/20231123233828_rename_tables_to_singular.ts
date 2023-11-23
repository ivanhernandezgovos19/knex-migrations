import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.renameTable('dim_businesses', 'dim_business');
  await knex.schema.renameTable('dim_jurisdictions', 'dim_jurisdiction');
  await knex.schema.renameTable('dim_locations', 'dim_location');
  await knex.schema.renameTable('fact_filings', 'fact_filing');
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.renameTable('dim_business', 'dim_businesses');
  await knex.schema.renameTable('dim_jurisdiction', 'dim_jurisdictions');
  await knex.schema.renameTable('dim_location', 'dim_locations');
  await knex.schema.renameTable('fact_filing', 'fact_filings');
}
