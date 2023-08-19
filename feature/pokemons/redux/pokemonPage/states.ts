import ApiFetchStatus from '../../../../constants/loadStatus';
import type { PokemonList } from '../../types/pokemonPage';

interface States {
    /**Pokemon list */
    pokemonList: PokemonList[];
    /**limit to load data */
    limit: number;
    /**search value to load data */
    searchKeyword: string;

    /**load api status */
    loadPokemonApiStatus: ApiFetchStatus;
}

const states: States = {
    pokemonList: [],

    limit: 20,

    searchKeyword: '',

    loadPokemonApiStatus: ApiFetchStatus.Initial,
};

export default states;
