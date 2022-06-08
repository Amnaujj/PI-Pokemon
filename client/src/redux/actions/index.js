import axios from 'axios';

export const GET_TYPES = 'GET_TYPES';
export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL';
export const POST_POKEMON = 'POST_POKEMON';




export function getTypes () {
    return async function (dispatch) {
        return fetch('http://localhost:3001/types')
        .then(r => r.json())
        .then((types) => {
            dispatch({
                type: GET_TYPES,
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
                type: GET_POKEMONS,
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
                type: GET_POKEMON_BY_NAME,
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
                type: GET_POKEMON_DETAIL,
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
                type: POST_POKEMON,
                payload: response
            })
        } catch (error) {
            console.log(error)
        }
    }
}