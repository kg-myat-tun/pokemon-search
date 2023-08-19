//apollo client
import { useQuery } from '@apollo/client';

//queries
import GET_ALL_POKEMONS from '../../../query/getAllPokemons';

//redux
import { RootState } from './../../../../../redux/store';

const loadAllPokemons =
    () => (dispatch: Function, getStates: () => RootState) => {
        const states = getStates();
        const { searchKeyword, limit } = states.pokemonPageFeature;

        const { data, loading, error, fetchMore } = useQuery(GET_ALL_POKEMONS, {
            variables: { first: limit },
        });
    };

export default loadAllPokemons;
