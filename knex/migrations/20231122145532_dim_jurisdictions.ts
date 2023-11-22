import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('dim_jurisdictions', function(table) {
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('dim_jurisdictions', function(table) {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  });
}

