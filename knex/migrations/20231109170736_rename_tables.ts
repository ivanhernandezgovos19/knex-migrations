import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  // Renaming tables
  return knex.schema
    .renameTable('dim_business', 'dim_businesses')
    .then(function() {
      return knex.schema.renameTable('dim_jurisdiction', 'dim_jurisdictions');
    })
    .then(function() {
      return knex.schema.renameTable('dim_location', 'dim_locations');
    });
}


export async function down(knex: Knex): Promise<void> {
  // Reverting table names back to original
  return knex.schema
    .renameTable('dim_businesses', 'dim_business')
    .then(function() {
      return knex.schema.renameTable('dim_jurisdictions', 'dim_jurisdiction');
    })
    .then(function() {
      return knex.schema.renameTable('dim_locations', 'dim_location');
    });
}

