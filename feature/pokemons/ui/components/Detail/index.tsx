import React, { useState } from 'react';
//next
import Link from 'next/link';
//apollo client
import { useQuery } from '@apollo/client';
//types
import type { Pokemon, PokemonEvaluation } from '../../../types/queryType';
//queries
import GET_POKEMON from '../../../query/getPokemon';
import GET_EVOLUTIONS from '../../../query/getEvolutions';
//mui
import { Box, Grid, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
//utils
import getTypeColor from '../../../utils/getTypeColor';
//commponents
import PokemonAttacks from './components/PokemonAttacks';
import PokemonInfo from './components/PokemonInfo';
import PokemonEvolutions from './components/PokemonEvolutions';

interface Props {
    name: string | string[];
}

const PokemonDetail = ({ name }: Props) => {
    const [openEvolutionDialog, setOpenEvolutionDialog] =
        useState<boolean>(false);

    const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(
        GET_POKEMON,
        {
            variables: { name },
        }
    );

    const {
        data: evolutionsData,
        loading: evolutionLoading,
        error: evolutionError,
    } = useQuery<{ pokemon: PokemonEvaluation }>(GET_EVOLUTIONS, {
        variables: { name },
    });

    if (loading || evolutionLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (evolutionError) return <p>Error: {evolutionError.message}</p>;

    const pokemon = data?.pokemon!;
    const evolutions = evolutionsData?.pokemon!;

    if (pokemon === null || !pokemon) return <p>Not Found</p>;

    const handleOpenEvolutions = () => {
        setOpenEvolutionDialog(true);
    };

    const handleClose = () => {
        setOpenEvolutionDialog(false);
    };

    return (
        <Box sx={{ my: 3 }}>
            <Grid container spacing={3} columnSpacing={5}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            px: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        <Box sx={{ mb: 3 }}>
                            <Typography
                                sx={{ fontWeight: 600 }}
                                component={'span'}
                            >
                                {pokemon.name}
                            </Typography>
                            <Typography
                                sx={{ fontWeight: 600, color: 'mute.light' }}
                                component={'span'}
                            >
                                {` - #${pokemon.number}`}
                            </Typography>
                        </Box>
                        <Box
                            component={'img'}
                            sx={{
                                height: 'auto',
                                maxHeight: 400,
                                width: '60%',
                                objectFit: 'contain',
                                transition: 'all 0.3s ease-in-out',
                            }}
                            src={pokemon.image}
                            className="img"
                        />

                        <Link href="/">
                            <KeyboardBackspaceIcon
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    cursor: 'pointer',
                                }}
                            />
                        </Link>
                    </Box>

                    {/* Attacks */}
                    <PokemonAttacks id={pokemon.id} name={pokemon.name} />
                </Grid>

                {/* Pokemon detail information */}
                <Grid item xs={12} md={6}>
                    <PokemonInfo pokemon={pokemon} />

                    {evolutions.evolutions !== null && evolutions && (
                        <>
                            {/* Evolutions */}
                            <Box mt={3}>
                                <Typography
                                    sx={{ fontWeight: 600 }}
                                    component={'span'}
                                >
                                    Evolutions
                                </Typography>

                                <Box
                                    sx={{
                                        backgroundColor: getTypeColor(
                                            pokemon.types[0]
                                        ).bgColor,
                                        width: 'max-content',
                                        p: '5px 20px',
                                        borderRadius: 10,
                                        cursor: 'pointer',
                                        mt: 1,
                                    }}
                                    onClick={handleOpenEvolutions}
                                >
                                    <Typography
                                        sx={{
                                            color: getTypeColor(
                                                pokemon.types[0]
                                            ).color,
                                            lineHeight: 1,
                                        }}
                                        component={'span'}
                                    >
                                        Evolutions
                                    </Typography>
                                </Box>
                            </Box>

                            <PokemonEvolutions
                                open={openEvolutionDialog}
                                close={handleClose}
                                evolutions={evolutions}
                            />
                        </>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default PokemonDetail;
