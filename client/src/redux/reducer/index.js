

const initialState = {
    pokemons: [],
    types: []
}

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        default:
            return {
                state,
            };
    }
}