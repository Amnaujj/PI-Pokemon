const { Router } = require('express');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {
    getPokemons,
    getPokeDetail,
    getPokemon,
    postPokemons,
    getPokeTypes
} = require('./controllers')


router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getPokeDetail);
router.get('', getPokemon);
router.post('', postPokemons);
router.get('', getPokeTypes)


module.exports = router;
