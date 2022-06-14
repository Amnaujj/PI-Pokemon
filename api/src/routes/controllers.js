const { Pokemon, Type } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');


const getPokemons = async (req, res) => {
    try {
        const {nombre} = req.query;
        if(nombre){
            const pokeDatadb = await Pokemon.findAll({
                where:{
                    name: {
                        [Op.substring]:nombre.toLowerCase()
                    }
                },
                include: Type,
            })
            if(typeof pokeDatadb[0] == 'object'){
                let tipoArray = pokeDatadb[0].dataValues.Types.map(t => t.name);
                const pokemondb = {
                    id: pokeDatadb[0].dataValues.id,
                    name: pokeDatadb[0].dataValues.name,
                    hp: pokeDatadb[0].dataValues.hp,
                    atk: pokeDatadb[0].dataValues.atk,
                    def: pokeDatadb[0].dataValues.def,
                    spd: pokeDatadb[0].dataValues.spd,
                    height: pokeDatadb[0].dataValues.height,
                    weight: pokeDatadb[0].dataValues.weight,
                    img: pokeDatadb[0].dataValues.img,
                    types: tipoArray
                };
                res.send(pokemondb);
            } else {
                const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
                const { id, name, types, sprites, stats, height, weight } = await pokeData.data;
                const hp = stats.filter(s => s.stat.name === 'hp');
                const atk = stats.filter(s => s.stat.name === 'attack');
                const def = stats.filter(s => s.stat.name === 'defense');
                const spd = stats.filter(s => s.stat.name === 'speed');
                const tipos = types.map(t =>  t.type.name);
                const pokemon = {
                    id: id,
                    name: name,
                    types: tipos,
                    img: sprites.other['official-artwork'].front_default,
                    // img: sprites.other.dream_world.front_default,
                    hp: hp[0].base_stat,
                    atk: atk[0].base_stat,
                    def: def[0].base_stat,
                    spd: spd[0].base_stat,
                    height: height,
                    weight: weight
                }
                res.send(pokemon)
            }
        } else {
            const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=24') // ?offset=0&limit=40 //1st: 151 //2nd: 251
            const {results} = pokemons.data;
            let arrayPokemons = []
            for(i = 0; i < results.length; i++) {
                const pokeData = await axios.get(results[i].url);
                const {name, id, types, sprites, stats} = await pokeData.data;
                const atk = stats.filter(s => s.stat.name === 'attack');
                const tipos = types.map(t =>  t.type.name)
                arrayPokemons.push({
                    id: id,
                    name: name,
                    types: tipos,
                    img: sprites.other['official-artwork'].front_default,
                    // img: sprites.other.dream_world.front_default,
                    atk: atk[0].base_stat
                })
            }
            const pokemonsdb = await Pokemon.findAll({include: Type});
            for(i = 0; i < pokemonsdb.length; i++) {
                let tipoArray = pokemonsdb[i].dataValues.Types.map(t => t.name);
                arrayPokemons.push({
                    id: pokemonsdb[i].dataValues.id,
                    name: pokemonsdb[i].dataValues.name,
                    types: tipoArray,
                    img: pokemonsdb[i].dataValues.img
                });
            }
            res.send(arrayPokemons)
        }
    } catch (error) {
        res.send('No se encontro el pokemon')
    }
}

const getPokeDetail = async (req, res) => {
    const {idPokemon} = req.params;
    try {
        if(isNaN(idPokemon)){
            const pokeDatadb = await Pokemon.findByPk(idPokemon, {include: Type});
            let tipoArray = pokeDatadb.dataValues.Types.map(t => t.name);
            const pokemon = {
                id: pokeDatadb.dataValues.id,
                name: pokeDatadb.dataValues.name,
                hp: pokeDatadb.dataValues.hp,
                atk: pokeDatadb.dataValues.atk,
                def: pokeDatadb.dataValues.def,
                spd: pokeDatadb.dataValues.spd,
                height: pokeDatadb.dataValues.height,
                weight: pokeDatadb.dataValues.weight,
                img: pokeDatadb.dataValues.img,
                types: tipoArray
            }
            res.send(pokemon);
        } else {
            const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
            const { id, name, types, sprites, stats, height, weight } = await pokeData.data;
            const hp = stats.filter(s => s.stat.name === 'hp');
            const atk = stats.filter(s => s.stat.name === 'attack');
            const def = stats.filter(s => s.stat.name === 'defense');
            const spd = stats.filter(s => s.stat.name === 'speed');
            const tipos = types.map(t =>  t.type.name);
            const pokemon = {
                id: id,
                name: name,
                types: tipos,
                img: sprites.other['official-artwork'].front_default,
                // img: sprites.other.dream_world.front_default,
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
        res.send(error)
    }
}

const postPokemons = async (req, res) => {
    const { name, hp, atk, def, spd, height, weight, img, types } = req.body;
    try {
        let findPokemon = await Pokemon.findOne({
            where: {
                name: name.toLowerCase()
            }
        })
        if(findPokemon){
            return res.send({error: "Ya existe un pokemon con ese nombre"})
        } else {
            let infoPokemon = { name, hp, atk, def, spd, height, weight, img };
            let newPokemon = await Pokemon.create(infoPokemon);
            for (let i = 0; i < types.length; i++) {
                await newPokemon.addTypes(types[i]);
            }
            const pokeDatadb = await Pokemon.findAll({
                where:{
                    name: {
                        [Op.substring]:name.toLowerCase()
                    }
                },
                include: Type,
            })
            let tipoArray = pokeDatadb[0].dataValues.Types.map(t => t.name);
            const pokemondb = {
                id: pokeDatadb[0].dataValues.id,
                name: pokeDatadb[0].dataValues.name,
                hp: pokeDatadb[0].dataValues.hp,
                atk: pokeDatadb[0].dataValues.atk,
                def: pokeDatadb[0].dataValues.def,
                spd: pokeDatadb[0].dataValues.spd,
                height: pokeDatadb[0].dataValues.height,
                weight: pokeDatadb[0].dataValues.weight,
                img: pokeDatadb[0].dataValues.img,
                types: tipoArray
            };
            res.send(pokemondb)
        }
    } catch (error) {
        res.send(error)
    }
}

const getPokeTypes = async (req, res) => {
    try {
        const tipos = await Type.findAll();
        if(typeof tipos[0] == 'object'){
            res.send(tipos)
        } else {
            const types = await axios.get('https://pokeapi.co/api/v2/type');
            for(i = 0; i < types.data.results.length; i++){
                let name = types.data.results[i].name;
                await Type.create({name});
            }
            let pokeTypes = await Type.findAll();
            res.send(pokeTypes)
        }
    } catch (error) {
        res.send(error)
    }
}


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
// agregar un update y un delete?