import {
    GET_TYPES,
    GET_POKEMONS,
    GET_POKEMON_BY_NAME,
    GET_POKEMON_DETAIL,
    POST_POKEMON, RESET,
    RESET_DETAIL,
    SET_FILTER_NAME,
    SET_FILTER_ATK,
    GET_POKEMONS_BY_TYPE,
    GET_POKEMON_API_DB,
    PAGE_EDIT
} from '../actions';

const initialState = {
    pokemons: [],
    // pokemons2: [],
    pokemonsByType: [],
    pokemonsApiDB: [],
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
                    ...state
                }
            } else {
                return {
                    ...state,
                    pokemons: action.payload,
                    // pokemons2: action.payload,
                    pokemon: [],
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
                pokemonDetail: action.payload,
                pokemon:[]
            }
        case POST_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        case RESET:
            let pokeOrder;
            pokeOrder = state.pokemons.sort(function(a, b) {
                if(isNaN(a.id) && isNaN(b.id)) return 0;
                if(isNaN(a.id)) return 1;
                if(isNaN(b.id)) return -1;
                if( a.id < b.id ) return -1;
                if( a.id > b.id ) return 1;
                return 0;
            })
            return {
                ...state,
                pokemon: [],
                pokemons: pokeOrder,
                pokemonsByType: [],
                pokemonsApiDB: [],
                page: 1
            }
        case RESET_DETAIL:
            return {
                ...state,
                pokemonDetail: {},
                pokemon: []
            }
        case SET_FILTER_NAME:
            return {
                ...state,
                pokemon: [],
                pokemonsByType: [],
                pokemonsApiDB: [],
                pokemons: action.payload,
                page: 1
            }
        case SET_FILTER_ATK:
            return {
                ...state,
                pokemon: [],
                pokemonsByType: [],
                pokemonsApiDB: [],
                pokemons: action.payload,
                page: 1
            }
        case GET_POKEMONS_BY_TYPE:
            return {
                ...state,
                pokemon: [],
                pokemonsApiDB: [],
                pokemonsByType: action.payload,
                page: 1
            }
        case GET_POKEMON_API_DB:
            return {
                ...state,
                pokemon: [],
                pokemonsByType: [],
                pokemonsApiDB: action.payload,
                page: 1
            }
        case PAGE_EDIT:
            return {
                ...state,
                page: action.payload
            }
        default:
            return {
                ...state,
            };
    }
}