const { json } = require('body-parser');
const { response } = require('express');
const express = require('express');
const router = express.Router();
const {getAllPokemons,getPokemonById} = require('../controllersFunctions/apiFunctions')
const {createPokemon} = require('../controllersFunctions/dbFuntions')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.get('/',getAllPokemons);
router.get('/:id',getPokemonById)
router.post('/',createPokemon);



module.exports = router;
