import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
return knex.schema
    .dropTableIfExists('fact_filings')
    .then(function () {
      // Creates the new table with snake case column names
      return knex.schema.createTable('fact_filings', function(table) {
        table.increments('id').primary();
        table.integer('filing_id').notNullable();
        table.timestamp('timestamp');
        table.string('jurisdiction_code', 50).notNullable();
        table.string('location_code', 50).notNullable();
        table.integer('business_id').notNullable();
        table.float('sales');
      });
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
      .dropTableIfExists('fact_filings')
      .then(function () {
        // Recreates the original camel case table
      	return knex.schema.createTable('fact_filings', function(table) {
        	table.increments('id').primary();
        	table.integer('filingId').notNullable();
        	table.timestamp('timestamp');
        	table.string('jurisdictionCode', 50).notNullable();
        	table.string('locationCode', 50).notNullable();
        	table.integer('businesId').notNullable();
        	table.float('sales');
      });
    });
}

