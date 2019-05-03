const express = require("express");
const cors = require("cors");

const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
 
app.use(express.json())
app.use(cors())

app.set('port', process.env.PORT || 3000)

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on http://localhost:3000")
})

app.get("/api/v1/pokemon", (request, response) => {
    database('pokemon').select()
      .then((pokemon) => {
        response.status(200).json(pokemon);
      })
      .catch((error) => {
        response.status(500).json({ error });
      });
  })

app.get("/api/v1/pokemon/:id", (request, response) => {
    database("pokemon").where("id", request.params.id).select()
      .then(pokemon => {
        if (pokemon.length) {
          response.status(200).json(pokemon);
        } else {
          response.status(404).json({ 
            error: `Could not find paper with id ${request.params.id}`
          });
        }
      })
      .catch(error => {
        response.status(500).json({ error });
      });
  })

app.get("/api/v1/types", (request, response) => {
    database("types").select()
      .then((types) => {
        response.status(200).json(types);
      })
      .catch((error) => {
        response.status(500).json({ error });
      });
  })

app.get("/api/v1/types/:id", (request, response) => {
    database("types").where("id", request.params.id).select()
      .then(types => {
        if (types.length) {
          response.status(200).json(types);
        } else {
          response.status(404).json({ 
            error: `Could not find paper with id ${request.params.id}`
          });
        }
      })
      .catch(error => {
        response.status(500).json({ error });
      });
  })