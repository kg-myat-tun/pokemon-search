import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ApiFetchStatus from '../../../../constants/loadStatus';
import type { PokemonList } from '../../types/pokemonPage';

//states
import initialState from './states';

const slice = createSlice({
    name: 'topologyEditInterconnection',
    initialState,
    reducers: {
        setInitial: (state) => (state = initialState),

        setPokemonList(state, action: PayloadAction<PokemonList[]>) {
            state.pokemonList = action.payload;
        },

        setLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload;
        },

        setSearchKeyword(state, action: PayloadAction<string>) {
            state.searchKeyword == action.payload;
        },

        setLoadPokemonApiStatus(state, action: PayloadAction<ApiFetchStatus>) {
            state.loadPokemonApiStatus = action.payload;
        },
    },
});

export default slice.reducer;
export const actions = slice.actions;
