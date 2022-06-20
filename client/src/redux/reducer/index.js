import {
    GET_TYPES,
    GET_POKEMONS,
    GET_POKEMON_BY_NAME,
    GET_POKEMON_DETAIL,
    POST_POKEMON,
    DELETE_POKEMON,
    RESET,
    RESET_DETAIL,
    SET_FILTER_NAME,
    SET_FILTER_ATK,
    GET_POKEMONS_BY_TYPE,
    GET_POKEMON_API_DB,
    PAGE_EDIT
} from '../actions';

const initialState = {
    pokemons: [],
    pokemons2: [],
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
            }
            return {
                ...state,
                pokemons: action.payload,
                pokemons2: action.payload,
                pokemon: [],
            };
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
                pokemon: [],
                page: 1,
                pokemons: [...state.pokemons, action.payload],
                pokemons2: [...state.pokemons2, action.payload]
            }
        case DELETE_POKEMON:

            return {
                ...state,
                pokemons: state.pokemons.filter(p => p.id !== action.payload),
                pokemons2: state.pokemons2.filter(p => p.id !== action.payload)
            }
        case RESET:
            return {
                ...state,
                pokemon: [],
                pokemons: state.pokemons2,
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
                pokemons: action.payload,
                page: 1
            }
        case SET_FILTER_ATK:
            return {
                ...state,
                pokemon: [],
                pokemons: action.payload,
                page: 1
            }
        case GET_POKEMONS_BY_TYPE:
            if(action.payload && action.payload.length < 1) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    pokemon: [],
                    pokemons: action.payload,
                    page: 1
                }
            }
        case GET_POKEMON_API_DB:
            if(action.payload && action.payload.length < 1) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    pokemon: [],
                    pokemons: action.payload,
                    page: 1
                }
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