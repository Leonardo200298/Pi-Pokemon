const { Router } = require('express');
const pokemonsRoute = require('./pokemons')
const typeRoute = require('./types')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

//middlewares
router.use('/pokemons',pokemonsRoute)//http://localhost:3001/pokemon/cualquier cosa
router.use('/types',typeRoute)//http://localhost:3001/type/cualquier cosa

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
