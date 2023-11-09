import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .withSchema('public')
        .createTable('dim_location', table => {
            table.increments('id');
            table.string('code', 32);
            table.string('name', 75);
        })
        .createTable('dim_jurisdiction', table => {
            table.increments('id');
            table.string('code', 32);
            table.string('name');
        })
        .createTable('dim_business', table => {
            table.increments('id');
            table.integer('business_id');
            table.string('name', 80);
            table.string('fein', 32);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .withSchema('public')
        .dropTable('dim_location')
        .dropTable('dim_jurisdiction')
        .dropTable('dim_business');
}

