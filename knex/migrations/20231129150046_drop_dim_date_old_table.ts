import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('dim_date_old');
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.createTable('dim_date_old', (table) => {
    table.date('date_id').notNullable().primary();
    table.integer('day').notNullable();
    table.integer('month').notNullable();
    table.string('month_name', 255).notNullable();
    table.integer('year').notNullable();
    table.integer('quarter').notNullable();
    table.string('day_of_week', 255).notNullable();
    table.integer('week_of_year').notNullable();
    table.boolean('is_weekend');
    table.boolean('is_weekday');
    table.integer('fiscal_month').notNullable();
    table.integer('fiscal_quarter').notNullable();
    table.integer('fiscal_year').notNullable();
    table.string('season', 255).notNullable();
  });
}
