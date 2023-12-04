import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('fact_filing', table => {
        table.integer('filing_completed_date_id').nullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('fact_filing', table => {
        table.dropColumn('filing_completed_date_id');
    });
}
