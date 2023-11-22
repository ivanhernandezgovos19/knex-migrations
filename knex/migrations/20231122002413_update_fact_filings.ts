import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('fact_filings', function(table) {
    // Create temporary columns for type conversion
    table.integer('temp_jurisdiction_id');
    table.integer('temp_location_id');
  });

  // Copy and cast data to the temporary columns
  await knex.raw('UPDATE fact_filings SET temp_jurisdiction_id = CAST(jurisdiction_code AS INTEGER)');
  await knex.raw('UPDATE fact_filings SET temp_location_id = CAST(location_code AS INTEGER)');

  // Drop old columns
  await knex.schema.table('fact_filings', function(table) {
    table.dropColumn('jurisdiction_code');
    table.dropColumn('location_code');
  });

  // Rename temporary columns to the desired names
  await knex.schema.table('fact_filings', function(table) {
    table.renameColumn('temp_jurisdiction_id', 'jurisdiction_id');
    table.renameColumn('temp_location_id', 'location_id');
    table.renameColumn('filing_id', 'businesstask_id');
    table.renameColumn('timestamp', 'filing_completed_timestamp');
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('fact_filings', function(table) {
    // Reverse column renames and add the old columns back
    table.renameColumn('businesstask_id', 'filing_id');
    table.renameColumn('filing_completed_timestamp', 'timestamp');
    table.string('jurisdiction_code');
    table.string('location_code');
  });

  // Copy data back to the old columns (may require type conversion)
  await knex.raw('UPDATE fact_filings SET jurisdiction_code = CAST(jurisdiction_id AS VARCHAR)');
  await knex.raw('UPDATE fact_filings SET location_code = CAST(location_id AS VARCHAR)');

  // Drop the new columns
  await knex.schema.table('fact_filings', function(table) {
    table.dropColumn('jurisdiction_id');
    table.dropColumn('location_id');
  });
}

