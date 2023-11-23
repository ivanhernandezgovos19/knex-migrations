import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('fact_filings', table => {
    table.dropColumn('temp_jurisdiction_id');
    table.dropColumn('temp_location_id');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('fact_filings', table => {
    table.integer('temp_jurisdiction_id').nullable();
    table.integer('temp_location_id').nullable();
  });
}

