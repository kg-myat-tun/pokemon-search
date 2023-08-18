import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//states
import initialState from './states';

const slice = createSlice({
    name: 'topologyEditInterconnection',
    initialState,
    reducers: {
        setInitial: (state) => (state = initialState),

        setPokemonList(state, action: PayloadAction<[]>) {
            state.pokemonList = action.payload;
        },
    },
});

export default slice.reducer;
export const actions = slice.actions;
