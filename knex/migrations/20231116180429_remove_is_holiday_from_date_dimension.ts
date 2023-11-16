import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('dim_date', table => {
    table.dropColumn('is_holiday');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('dim_date', table => {
    table.boolean('is_holiday').defaultTo(false);
  });
}

