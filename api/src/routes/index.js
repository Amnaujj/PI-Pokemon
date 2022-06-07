const { Router } = require('express');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {
    getPokemons,
    getPokeDetail,
    postPokemons,
    getPokeTypes
} = require('./controllers')


router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getPokeDetail);
router.post('/pokemons', postPokemons);
router.get('/types', getPokeTypes)


module.exports = router;
