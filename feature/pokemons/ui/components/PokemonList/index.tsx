import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

//components
import PokemonCard from './components/PokemonCard';

import { useQuery } from '@apollo/client';
import GET_ALL_POKEMONS, { Pokemon } from '../../../query/getAllPokemons';

const LIMIT = 15;

const PokemonList = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_ALL_POKEMONS, {
        variables: { first: LIMIT },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const pokemonList: Pokemon[] = data.pokemons;

    const fetchMorePokemon = () => {
        fetchMore({
            variables: { limit: LIMIT }, // Use the same limit
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return {
                    pokemons: [...prev.pokemons, ...fetchMoreResult.pokemons],
                };
            },
        });
    };

    return (
        <Box
            sx={{
                mt: 3,
            }}
        >
            <Grid container columnSpacing={2} rowSpacing={3} columns={10}>
                {pokemonList.map((item) => (
                    <Grid item xs={1} md={3} lg={2}>
                        <PokemonCard pokemon={item} />
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                <Box
                    sx={{
                        width: 'max-content',
                        padding: '10px 15px',
                        backgroundColor: 'secondary.main',
                        borderRadius: '6px',
                        textAlign: 'center',
                        cursor: 'pointer',
                    }}
                    onClick={fetchMorePokemon}
                >
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 500,
                        }}
                    >
                        Load more...
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default PokemonList;
