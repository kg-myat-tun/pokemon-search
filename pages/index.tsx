// /pages/index.tsx

import { gql, useQuery, useMutation } from '@apollo/client';
import PokemonPage from '../feature/pokemons/ui';

function Home() {
    // const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    //     variables: { first: 1000 },
    // });

    // return (
    //     <div>
    //         {loading ? (
    //             <span>Loading</span>
    //         ) : (
    //             <span>{data.pokemons[0].name}</span>
    //         )}
    //     </div>
    // );

    return <PokemonPage />;
}

export default Home;
