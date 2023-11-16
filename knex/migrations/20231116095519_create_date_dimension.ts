import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('date_dimension', table => {
    table.date('date_id').primary();
    table.integer('day').notNullable();
    table.integer('month').notNullable();
    table.string('month_name').notNullable();
    table.integer('year').notNullable();
    table.integer('quarter').notNullable();
    table.string('day_of_week').notNullable();
    table.integer('week_of_year').notNullable();
    table.boolean('is_holiday').defaultTo(false);
    table.boolean('is_weekend').defaultTo(false);
    table.boolean('is_weekday').defaultTo(true);
    table.integer('fiscal_month').notNullable();
    table.integer('fiscal_quarter').notNullable();
    table.integer('fiscal_year').notNullable();
    table.string('season').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('date_dimension');
}
