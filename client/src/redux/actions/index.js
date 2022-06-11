import axios from 'axios';

export const GET_TYPES = 'GET_TYPES';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const POST_POKEMON = 'POST_POKEMON';
export const RESET = 'RESET';
export const RESET_DETAIL = 'RESET_DETAIL';
export const SET_FILTER_NAME = 'SET_FILTER_NAME';
export const SET_FILTER_ATK = 'SET_FILTER_ATK';
export const GET_POKEMONS_BY_TYPE = 'GET_POKEMONS_BY_TYPE';
export const GET_API_DB = 'GET_API_DB';



export function getTypes () {
    return async function (dispatch) {
        return fetch('http://localhost:3001/types')
        .then(r => r.json())
        .then((types) => {
            dispatch({
                type: 'GET_TYPES',
                payload: types
            })
        })
    }
}

export function getPokemons () {
    return async function (dispatch) {
        return fetch('http://localhost:3001/pokemons')
        .then(r => r.json())
        .then(pokemons => {
            dispatch({
                type: 'GET_POKEMONS',
                payload: pokemons
            })
        })
    }
}

export function getPokemonByName (name) {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/pokemons?nombre=${name}`)
        .then(r => r.json())
        .then(pokemon => {
            dispatch({
                type: 'GET_POKEMON_BY_NAME',
                payload: pokemon
            })
        })
    }
}

export function getPokemonDetail (id) {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/pokemons/${id}`)
        .then(r => r.json())
        .then(pokemonDetail => {
            dispatch({
                type: 'GET_POKEMON_DETAIL',
                payload: pokemonDetail
            })
        })
    }
}

export function postPokemon (name, hp, atk, def, spd, height, weight, img, type) {
    return async function (dispatch) {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', {
                name:name,
                hp:hp,
                atk:atk,
                def:def,
                spd:spd,
                height:height,
                weight:weight,
                img:img,
                type:type
            });
            dispatch({
                type: 'POST_POKEMON',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function reset () {
    return {
        type: 'RESET'
    }
}

export function resetDetail () {
    return {
        type: 'RESET_DETAIL'
    }
}

export function setFilterName (pokemons, filter) {
    let pokeOrder;
    if (filter === 'a-z') {
        pokeOrder = pokemons.sort(function(a, b) {
            if( a.name < b.name ) return -1;
            if( a.name > b.name ) return 1;
            return 0;
        })
    } else if (filter === 'z-a') {
        pokeOrder = pokemons.sort(function(a, b) {
            if( a.name > b.name ) return -1;
            if( a.name < b.name ) return 1;
            return 0;
        })
    }
    return {
        type: 'SET_FILTER_NAME',
        payload: pokeOrder
    }
}

export function setFilterAtk (pokemons, filter) {
    let pokeOrder;
    if (filter === 'atk-') {
        pokeOrder = pokemons.sort(function(a, b) {
            if(a.atk < b.atk) return -1;
            if(a.atk > b.atk) return 1;
            return 0;
        })
    } else if (filter === 'atk+') {
        pokeOrder = pokemons.sort(function(a, b) {
            if(a.atk > b.atk) return -1;
            if(a.atk < b.atk) return 1;
            return 0;
        })
    }
    return {
        type: 'SET_FILTER_ATK',
        payload: pokeOrder
    }
}

export function getPokemonsByType (pokemons, filter) {
    let pokemons_types = pokemons.filter(p => p.types.includes(filter))
    console.log(pokemons_types)
    return {
        type: 'GET_POKEMONS_BY_TYPE',
        payload: pokemons_types
    }
}

export function getApiDB (pokemons, filter) {
    let pokeOrder;
    if(filter === 'pokemons-creados'){
        pokeOrder = pokemons.filter(p => isNaN(p.id))
    } else if (filter === 'pokemons-existentes') {
        pokeOrder = pokemons.filter(p => !isNaN(p.id))
    }
    return {
        type: 'GET_API_DB',
        payload: pokeOrder
    }
}