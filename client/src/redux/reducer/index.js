import { GET_TYPES, GET_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_DETAIL, POST_POKEMON, RESET, RESET_DETAIL } from '../actions';

const initialState = {
    pokemons: [],
    types: [],
    pokemon: [],
    pokemonDetail: {},
    page: 1
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            };
        case GET_POKEMONS:
            if(state.pokemons?.length > 1) {
                return {
                    ...state,
                    pokemon: []
                }
            } else {
                return {
                    ...state,
                    pokemons: action.payload,
                    pokemon: []
                };
            }
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                pokemon: [action.payload],
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
                reset: false,
                pokemon: []
            }
        case RESET_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }
        default:
            return {
                state,
            };
    }
}