import React, { useState } from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';

//mui
import { Box, Container } from '@mui/material';

//components
import Header from './components/Header';
import PokemonList from './components/PokemonList';

//interface
import { Pokemon } from '../types/queryType';

//query
import GET_ALL_POKEMONS from '../query/getAllPokemons';
import GET_POKEMON from '../query/getPokemon';

// const LIMIT = 15;

const PokemonPage = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [limit, setLimit] = useState<number>(15);

    const {
        data: allPokemonsData,
        loading: allPokemonsLoading,
        error: allPokemonsError,
        fetchMore,
    } = useQuery(GET_ALL_POKEMONS, {
        variables: { first: limit },
    });

    const {
        data: searchPokemonsData,
        loading: searchPokemonsLoading,
        error: searchPokemonsError,
    } = useQuery(GET_POKEMON, {
        variables: { name: searchKeyword },
        skip: searchKeyword === '',
    });

    //pokemon search handler
    const handleSearch = (value: string) => {
        setSearchKeyword(value);
    };

    if (allPokemonsLoading || searchPokemonsLoading) return <p>Loading...</p>;
    if (allPokemonsError) return <p>Error: {allPokemonsError.message}</p>;
    if (searchPokemonsError) return <p>Error: {searchPokemonsError.message}</p>;

    const pokemonList: Pokemon[] = searchKeyword
        ? [searchPokemonsData.pokemon]
        : allPokemonsData.pokemons;

    //load more data
    const fetchMorePokemon = () => {
        fetchMore({
            variables: { first: limit },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                setLimit((prev) => prev + 15);
                return {
                    pokemons: [...fetchMoreResult.pokemons],
                };
            },
        });
    };

    return (
        <Box
            sx={{
                py: 3,
            }}
        >
            {/* Header */}
            <Header onSearch={handleSearch} />

            {/* Pokemon list */}
            <PokemonList
                pokemonList={pokemonList}
                loadMore={fetchMorePokemon}
            />
        </Box>
    );
};

export default PokemonPage;
