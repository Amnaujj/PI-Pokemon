const { Pokemon, Type } = require('../db');
const axios = require('axios');



const getPokemons = async (req, res) => {
    try {
        let pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40') // ?offset=0&limit=40
        const {results} = pokemons.data;
        console.log(results.length)
        let arrayPokemons = []
        for(i = 0; i < results.length; i++) {
            const pokeData = await axios.get(results[i].url);
            const {name, id, types, sprites} = await pokeData.data;
            // console.log(pokeData)
            arrayPokemons.push({
                id: id,
                name: name,
                type: types,
                img: sprites.other
            })
        }
        res.send(arrayPokemons)
    } catch (error) {
        res.json(error)
    }
}

const getPokeDetail = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

const getPokemon = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const postPokemons = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getPokeTypes = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}


module.exports = {
    getPokemons,
    getPokeDetail,
    getPokemon,
    postPokemons,
    getPokeTypes
}


// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type