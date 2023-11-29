import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.table('fact_filing', (table) => {
    table.integer('deductions');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table('fact_filing', (table) => {
    table.dropColumn('deductions');
  });
}
