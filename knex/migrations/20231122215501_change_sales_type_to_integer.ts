import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  const tableName = 'fact_filings';
  
  // Add a new temporary integer column
  await knex.schema.alterTable(tableName, (table) => {
    table.integer('temp_sales');
  });

  // Copy the data to the new column with rounding or truncating as needed
  await knex.raw(`UPDATE ${tableName} SET temp_sales = CAST(sales AS INTEGER)`);

  // Drop the old sales column
  await knex.schema.alterTable(tableName, (table) => {
    table.dropColumn('sales');
  });

  // Rename the new column to sales
  await knex.schema.alterTable(tableName, (table) => {
    table.renameColumn('temp_sales', 'sales');
  });
}


export async function down(knex: Knex): Promise<void> {
  const tableName = 'fact_filings';
  
  // Add a new temporary real column
  await knex.schema.alterTable(tableName, (table) => {
    table.specificType('temp_sales', 'float4');
  });

  // Copy the data back to the new column
  await knex.raw(`UPDATE ${tableName} SET temp_sales = CAST(sales AS float4)`);

  // Drop the current integer sales column
  await knex.schema.alterTable(tableName, (table) => {
    table.dropColumn('sales');
  });

  // Rename the temporary column back to sales
  await knex.schema.alterTable(tableName, (table) => {
    table.renameColumn('temp_sales', 'sales');
  });
}

