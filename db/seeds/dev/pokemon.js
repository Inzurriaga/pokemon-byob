const data = require("../../../data");
const pokemon = data.pokemon;
const types = data.types;


let pokemonId = []
let typeId = []

const createPokemon = (knex, pokemon) => {
  return knex('pokemon').insert({
    pokedexNumber: pokemon.pokedexNumber,
    name: pokemon.name,
    description: pokemon.description,
    height: pokemon.height,
    weight: pokemon.weight
  }, 'id')
  .then(id => {
      pokemonId.push({type: pokemon.type, id: id[0]})
  })
};

const createPokemonType = (knex, typeId, pokemonId) => {
  return knex('pokemon_types').insert({types_id: typeId, pokemon_id: pokemonId}, "id")
}

const createTypes = (knex, type) => {
  return knex('types').insert(type, "id").then(id => {
    typeId.push({type: type.name, id: id[0]})
  });
};

exports.seed = (knex, Promise) => {
  return knex("pokemon").del()
    .then(() => knex("types").del())
    .then(() => knex("pokemon_types").del())
    .then(() => {
      let pokemonPromises = [];

      pokemon.forEach(pokemon => {
        pokemonPromises.push(createPokemon(knex, pokemon));
      });

      return Promise.all(pokemonPromises);
    })
    .then(() => {
      let typePromise = [];

      types.forEach(type => {
        typePromise.push(createTypes(knex, type))
      })

      return Promise.all(typePromise)
    }).then(() =>{
      let pokemonTypePromise = []
      pokemonId.forEach(pokemon => {
        pokemon.type.forEach(pokemonType => {
        let typeResult = typeId.find(type => type.type === pokemonType)
          if(typeResult){
            pokemonTypePromise.push(createPokemonType(knex, typeResult.id, pokemon.id))
          }
        })
      })

      return Promise.all(pokemonTypePromise)
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};