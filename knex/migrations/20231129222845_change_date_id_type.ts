import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.transaction(async trx => {
        await trx.schema.createTable('dim_date_new', table => {
            table.integer('date_id');
            table.integer('day');
            table.integer('month');
            table.string('month_name', 255);
            table.integer('year');
            table.integer('quarter');
            table.string('day_of_week', 255);
            table.integer('week_of_year');
            table.boolean('is_weekend');
            table.boolean('is_weekday');
            table.integer('fiscal_month');
            table.integer('fiscal_quarter');
            table.integer('fiscal_year');
        });

        await trx.schema.raw(`INSERT INTO dim_date_new (date_id, day, month, month_name, year, quarter, day_of_week, week_of_year, is_weekend, is_weekday, fiscal_month, fiscal_quarter, fiscal_year)
        SELECT cast(to_char(date_id, 'YYYYMMDD') as INTEGER) as date_id, day, month, month_name, year, quarter, day_of_week, week_of_year, is_weekend, is_weekday, fiscal_month, fiscal_quarter, fiscal_year
        FROM dim_date`);

        await trx.schema.renameTable('dim_date', 'dim_date_old');
        await trx.schema.renameTable('dim_date_new', 'dim_date');

        await trx.schema.dropTable('dim_date_old');
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.transaction(async trx => {
        await trx.schema.createTable('dim_date_new', table => {
            table.date('date_id');
            table.integer('day');
            table.integer('month');
            table.string('month_name', 255);
            table.integer('year');
            table.integer('quarter');
            table.string('day_of_week', 255);
            table.integer('week_of_year');
            table.boolean('is_weekend');
            table.boolean('is_weekday');
            table.integer('fiscal_month');
            table.integer('fiscal_quarter');
            table.integer('fiscal_year');
        });

        await trx.schema.raw(`INSERT INTO dim_date_new (date_id, day, month, month_name, year, quarter, day_of_week, week_of_year, is_weekend, is_weekday, fiscal_month, fiscal_quarter, fiscal_year)
        SELECT to_date(date_id, 'YYYYMMDD') as date_id, day, month, month_name, year, quarter, day_of_week, week_of_year, is_weekend, is_weekday, fiscal_month, fiscal_quarter, fiscal_year
        FROM dim_date`);

        await trx.schema.renameTable('dim_date', 'dim_date_old');
        await trx.schema.renameTable('dim_date_new', 'dim_date');

        await trx.schema.dropTable('dim_date_old');
    });
}

