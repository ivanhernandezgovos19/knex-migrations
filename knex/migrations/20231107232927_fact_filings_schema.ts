import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
   return knex.schema.withSchema('public').createTable('fact_filings', function(table) {
    table.increments('id').primary();
    table.integer('filingId').notNullable();
    table.timestamp('timestamp');
    table.string('jurisdictionCode', 50).notNullable();
    table.string('locationCode', 50).notNullable();
    table.integer('businesId').notNullable();
    table.float('sales');
  });
}


export async function down(knex: Knex): Promise<void> {
	return knex.schema.withSchema('public').dropTableIfExists('fact_filings');
}
