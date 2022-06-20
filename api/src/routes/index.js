const { Router } = require('express');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {
    getPokemons,
    getPokeDetail,
    postPokemons,
    getPokeTypes,
    deletePokemon
} = require('./controllers')


router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getPokeDetail);
router.post('/pokemons', postPokemons);
router.get('/types', getPokeTypes)
router.delete('/pokemons/:id', deletePokemon)


module.exports = router;
