import React from 'react';

import { useRouter } from 'next/router';

import PokemonDetail from '../../feature/pokemons/ui/components/Detail';

const PokemonDetailPage = () => {
    const router = useRouter();

    return <PokemonDetail name={router.query.id!} />;
};

export default PokemonDetailPage;
