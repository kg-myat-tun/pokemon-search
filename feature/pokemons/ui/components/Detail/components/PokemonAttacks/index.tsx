import React from 'react';
//apollo client
import { useQuery } from '@apollo/client';
//mui
import { Box, Grid, Typography, Stack } from '@mui/material';
//utils
import getTypeColor from '../../../../../utils/getTypeColor';
//types
import type { PokemonAttacks as PokemonAttacksType } from '../../../../../types/queryType';
//queries
import GET_ATTACK_RATING from '../../../../../query/getAttackRating';

interface Props {
    id: string;
    name: string;
}

const PokemonAttacks = ({ id, name }: Props) => {
    const { data, loading, error } = useQuery<{
        pokemon: PokemonAttacksType;
    }>(GET_ATTACK_RATING, {
        variables: { id, name },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const pokemonAttacks = data?.pokemon;

    if (pokemonAttacks === null || !pokemonAttacks) return <p>Not Found</p>;

    return (
        <Grid container spacing={2} mt={3} pl={5}>
            <Grid item xs={12} lg={6}>
                <Box>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 600,
                            lineHeight: 1,
                        }}
                    >
                        {'Fast Attacks'}
                    </Typography>
                </Box>

                <Grid container spacing={1} mt={1}>
                    {pokemonAttacks.attacks.fast.map((fast) => (
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                                }}
                            >
                                <Stack spacing={1} alignItems={'center'}>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 600,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {fast.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            lineHeight: 1,
                                            color: 'mute.light',
                                        }}
                                    >
                                        name
                                    </Typography>
                                </Stack>
                                <Stack
                                    spacing={1}
                                    alignItems={'center'}
                                    width={'27%'}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 15,
                                            backgroundColor: getTypeColor(
                                                fast.type
                                            ).bgColor,
                                            borderRadius: 10,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            ml: 1,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 12,
                                                lineHeight: 1,
                                                color: getTypeColor(fast.type)
                                                    .color,
                                            }}
                                        >
                                            {fast.type}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            lineHeight: 1,
                                            color: 'mute.light',
                                        }}
                                    >
                                        type
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} alignItems={'center'}>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 600,
                                            lineHeight: 1,
                                            color: 'secondary.main',
                                        }}
                                    >
                                        {fast.damage}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            lineHeight: 1,
                                            color: 'mute.light',
                                        }}
                                    >
                                        damage
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid item xs={12} lg={6}>
                <Box>
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 600,
                            lineHeight: 1,
                        }}
                    >
                        {'Special Attacks'}
                    </Typography>
                </Box>
                <Grid container spacing={1} mt={1}>
                    {pokemonAttacks.attacks.special.map((special) => (
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                                }}
                            >
                                <Stack spacing={1} alignItems={'center'}>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 600,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {special.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            lineHeight: 1,
                                            color: 'mute.light',
                                        }}
                                    >
                                        name
                                    </Typography>
                                </Stack>
                                <Stack
                                    spacing={1}
                                    alignItems={'center'}
                                    width={'27%'}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 15,
                                            backgroundColor: getTypeColor(
                                                special.type
                                            ).bgColor,
                                            borderRadius: 10,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            ml: 1,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 12,
                                                lineHeight: 1,
                                                color: getTypeColor(
                                                    special.type
                                                ).color,
                                            }}
                                        >
                                            {special.type}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            lineHeight: 1,
                                            color: 'mute.light',
                                        }}
                                    >
                                        type
                                    </Typography>
                                </Stack>
                                <Stack spacing={1} alignItems={'center'}>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 600,
                                            lineHeight: 1,
                                            color: 'secondary.main',
                                        }}
                                    >
                                        {special.damage}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            lineHeight: 1,
                                            color: 'mute.light',
                                        }}
                                    >
                                        damage
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PokemonAttacks;
