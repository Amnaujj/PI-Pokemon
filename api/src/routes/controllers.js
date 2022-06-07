const { Pokemon, Type } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');



const getPokemons = async (req, res) => {
    try {
        const {nombre} = req.query;
        if(nombre){
            let arrayPokemons = [];
            const pokeDatadb = await Pokemon.findAll({
                where:{
                    name: {
                        [Op.substring]:nombre
                    }
                }
            })
            if(typeof pokeDatadb === 'object') {
                arrayPokemons.push(pokeDatadb)
            }
            const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
            if(pokeData){
                const { id, name, types, sprites, stats, height, weight } = await pokeData.data;
                const hp = stats.filter(s => s.stat.name === 'hp');
                const atk = stats.filter(s => s.stat.name === 'attack');
                const def = stats.filter(s => s.stat.name === 'defense');
                const spd = stats.filter(s => s.stat.name === 'speed');
                const pokemon = {
                    id: id,
                    name: name,
                    types: types,
                    img: sprites.other.dream_world.front_default,
                    hp: hp[0].base_stat,
                    atk: atk[0].base_stat,
                    def: def[0].base_stat,
                    spd: spd[0].base_stat,
                    height: height,
                    weight: weight
                }
                arrayPokemons.push(pokemon)
            }
            res.send(arrayPokemons)
        } else {
            const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40') // ?offset=0&limit=40
            const {results} = pokemons.data;
            let arrayPokemons = []
            for(i = 0; i < results.length; i++) {
                const pokeData = await axios.get(results[i].url);
                const {name, id, types, sprites} = await pokeData.data;
                arrayPokemons.push({
                    id: id,
                    name: name,
                    type: types,
                    img: sprites.other.dream_world.front_default
                })
            }
            res.send(arrayPokemons)
        }
    } catch (error) {
        res.send(error)
    }
}

const getPokeDetail = async (req, res) => {
    const {idPokemon} = req.params;
    try {
        if(isNaN(idPokemon)){
            // const pokeData = await Pokemon.findByPk(idPokemon)
            // console.log(pokeData)
            // const { id, name, types, sprites, stats, height, weight } = await pokeData;
        } else {
            const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const { id, name, types, sprites, stats, height, weight } = await pokeData.data;
            const hp = stats.filter(s => s.stat.name === 'hp');
            const atk = stats.filter(s => s.stat.name === 'attack');
            const def = stats.filter(s => s.stat.name === 'defense');
            const spd = stats.filter(s => s.stat.name === 'speed');
            const pokemon = {
                id: id,
                name: name,
                types: types,
                img: sprites.other.dream_world.front_default,
                hp: hp[0].base_stat,
                atk: atk[0].base_stat,
                def: def[0].base_stat,
                spd: spd[0].base_stat,
                height: height,
                weight: weight
            }
            res.send(pokemon)
        }
    } catch (error) {
        res.send(':o')
    }
}
// [ ] Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
// [ ] Número de Pokemon (id)
// [ ] Estadísticas (vida, ataque, defensa, velocidad)
// [ ] Altura y peso
// Obtener el detalle de un pokemon en particular
// Debe traer solo los datos pedidos en la ruta de detalle de pokemon
// Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes

const postPokemons = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getPokeTypes = async (req, res) => {
    try {
        const types = await axios.get('https://pokeapi.co/api/v2/type');
        for(i = 0; i < types.data.results.length; i++){
            let name = types.data.results[i].name;
            await Type.create({name});
        }
        let pokeTypes = await Type.findAll();
        res.send(pokeTypes)
    } catch (error) {
        res.send(error)
    }
}
// Obtener todos los tipos de pokemons posibles
// En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí


module.exports = {
    getPokemons,
    getPokeDetail,
    postPokemons,
    getPokeTypes
}


// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type


// preguntar para agregar atk y def especial, y preguntar por ordenamiento a-z z-a si solo estan los primeros 40 pokemons