
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable("pokemon", function(table) {
          table.increments("id").primary();
          table.string("pokedexNumber");
          table.string("name");
          table.string("description");
          table.string("height");
          table.string("weight");
          table.foreign("types_id")
            .references("types.id");
    
          table.timestamps(true, true);
        }),
    
        knex.schema.createTable('types', function(table) {
          table.increments('id').primary();
          table.string("name");
          table.string("weakness")
    
          table.timestamps(true, true);
        })
      ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('pokemon'),
        knex.schema.dropTable('types')
      ]);
};
