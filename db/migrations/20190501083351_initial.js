
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('types', function(table) {
            table.increments('id').primary();
            table.string("name");
            table.specificType('weakness', 'text ARRAY');
      
            table.timestamps(true, true);
          }),

        knex.schema.createTable("pokemon", function(table) {
          table.increments("id").primary();
          table.string("pokedexNumber");
          table.string("name");
          table.string("description");
          table.string("height");
          table.string("weight");
    
          table.timestamps(true, true);
        }),

        knex.schema.createTable("pokemon_types", function(table){
            table.increments('id').primary();
            table.integer("types_id").unsigned()
            table.foreign("types_id")
              .references("types.id");
            table.integer("pokemon_id").unsigned()
            table.foreign("pokemon_id")
              .references("pokemon.id");
          }),
      ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable("pokemon"),
        knex.schema.dropTable("types"),
        knex.schema.dropTable("pokemon_types")
      ]);
};
