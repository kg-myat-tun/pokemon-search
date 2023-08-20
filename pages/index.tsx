// /pages/index.tsx

import { gql, useQuery, useMutation } from '@apollo/client';
import PokemonPage from '../feature/pokemons/ui';

function Home() {
    return <PokemonPage />;
}

export default Home;
