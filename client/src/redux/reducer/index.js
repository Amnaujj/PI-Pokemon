import { GET_TYPES, GET_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_DETAIL, POST_POKEMON, RESET } from '../actions';

const initialState = {
    pokemons: [],
    types: [],
    pokemon: {},
    pokemonDetail: {},
    reset: false
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            };
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemon: action.payload,
                reset: true
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case POST_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        case RESET:
            return {
                ...state,
                reset: false
            }
        default:
            return {
                state,
            };
    }
}