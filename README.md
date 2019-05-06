# pokemon-byob

pokemon byob and a api where users can grab there favorite gen 1 pokemon info. users who connect to the api can delete, get, and post to the api. 

## get 
### pokemon

to recieve all info the pokemon fetch the url
```
https://pokedexbyob.herokuapp.com/api/v1/pokemon
```

to recieve a specific pokemon attach an id to the end of the your
```
https://pokedexbyob.herokuapp.com/api/v1/pokemon/:id
```

### types
to recieve all info the pokemon type fetch the url
```
https://pokedexbyob.herokuapp.com/api/v1/types
```

to recieve a specific pokemon type attach an id to the end of the your
```
https://pokedexbyob.herokuapp.com/api/v1/types/:id
```

## post 
### pokemon

to add a pokemon fetch the url with the method post
```
https://pokedexbyob.herokuapp.com/api/v1/pokemon
```
within the body the keys you'll need will be name, pokedexNum, type, height, weight, and description

### types

to add a pokemon type fetch the url with the method post 
```
https://pokedexbyob.herokuapp.com/api/v1/types
```
within the body the keys you'll need will be name and a array of weakness

## delete 
### pokemon

to delete a specific pokemon attach an id to the end of the your url and use the delete method
```
https://pokedexbyob.herokuapp.com/api/v1/pokemon/:id
```
