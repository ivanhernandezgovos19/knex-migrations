import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('fact_filing', table => {
    table.integer('licensed_dealer_sales');
    table.integer('wholesale_sales');
    table.integer('outside_of_colorado');
    table.integer('out_of_taxing_area');
    table.integer('service');
    table.integer('govt_charitable_sales');
    table.integer('prescription_prosthetic');
    table.integer('exempt_entities');
    table.integer('gas');
    table.integer('drugs_medical_devices');
    table.integer('tradeins');
    table.integer('bad_debt');
    table.integer('utilities_restaurant');
    table.integer('agricultural_sales');
    table.integer('agricultural_compounds');
    table.integer('computer_software');
    table.integer('other_deduction');
    table.integer('food');
    table.integer('machinery');
    table.integer('electricity');
    table.integer('farm_equipment');
    table.integer('low_emit_vehicle');
    table.integer('school_related_sales');
    table.integer('cigarettes');
    table.integer('renewable_energy_components');
    table.integer('space_flight');
    table.integer('retail_marijuana');
    table.integer('other_exemption');
    table.integer('returns');
    table.integer('gas_and_cigarettes');
    table.integer('vehicles');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('fact_filing', table => {
    table.dropColumn('licensed_dealer_sales');
    table.dropColumn('wholesale_sales');
    table.dropColumn('outside_of_colorado');
    table.dropColumn('out_of_taxing_area');
    table.dropColumn('service');
    table.dropColumn('govt_charitable_sales');
    table.dropColumn('prescription_prosthetic');
    table.dropColumn('exempt_entities');
    table.dropColumn('gas');
    table.dropColumn('drugs_medical_devices');
    table.dropColumn('tradeins');
    table.dropColumn('bad_debt');
    table.dropColumn('utilities_restaurant');
    table.dropColumn('agricultural_sales');
    table.dropColumn('agricultural_compounds');
    table.dropColumn('computer_software');
    table.dropColumn('other_deduction');
    table.dropColumn('food');
    table.dropColumn('machinery');
    table.dropColumn('electricity');
    table.dropColumn('farm_equipment');
    table.dropColumn('low_emit_vehicle');
    table.dropColumn('school_related_sales');
    table.dropColumn('cigarettes');
    table.dropColumn('renewable_energy_components');
    table.dropColumn('space_flight');
    table.dropColumn('retail_marijuana');
    table.dropColumn('other_exemption');
    table.dropColumn('returns');
    table.dropColumn('gas_and_cigarettes');
    table.dropColumn('vehicles');
  });
}
