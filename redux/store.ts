import { configureStore } from '@reduxjs/toolkit';

import { useAppSelector } from './hook';

//feature redux stores
import pokemonPageFeature from '../feature/pokemons/redux/pokemonPage/slice';

const store = configureStore({
    reducer: {
        pokemonPageFeature,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
