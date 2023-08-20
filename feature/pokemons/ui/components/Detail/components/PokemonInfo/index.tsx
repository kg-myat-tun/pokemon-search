import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Grid, Typography, Stack } from '@mui/material';

import { Pokemon } from '../../../../../types/queryType';
import getTypeColor from '../../../../../utils/getTypeColor';

interface Props {
    pokemon: Pokemon;
}

const PokemonInfo = ({ pokemon }: Props) => {
    return (
        <>
            <Box sx={{ mb: 3 }}>
                <Typography
                    sx={{ fontWeight: 600, textAlign: 'center' }}
                    component={'span'}
                >
                    {'Details'}
                </Typography>
            </Box>
            <Box>
                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'Name'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'span'}>
                            {`: ${pokemon.name}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'Number'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'span'}>
                            {`: #${pokemon.number}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'Weight'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'p'}>
                            {`: min - ${pokemon.weight.minimum}`}
                        </Typography>
                        <Typography component={'p'}>
                            {`: max - ${pokemon.weight.maximum}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'Height'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'p'}>
                            {`: min - ${pokemon.height.minimum}`}
                        </Typography>
                        <Typography component={'p'}>
                            {`: max - ${pokemon.height.maximum}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>
                            {'Classification'}
                        </Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'span'}>
                            {`: ${pokemon.classification}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'Type'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            {': '}
                            {pokemon.types.map((type) => (
                                <Box
                                    sx={{
                                        width: '20%',
                                        height: 15,
                                        backgroundColor:
                                            getTypeColor(type).bgColor,
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
                                            color: getTypeColor(type).color,
                                        }}
                                    >
                                        {type}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>
                            {'Resistant'}
                        </Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            {': '}
                            {pokemon.resistant.map((type) => (
                                <Box
                                    sx={{
                                        width: '20%',
                                        height: 15,
                                        backgroundColor:
                                            getTypeColor(type).bgColor,
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
                                            color: getTypeColor(type).color,
                                        }}
                                    >
                                        {type}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>
                            {'Weaknesses'}
                        </Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        >
                            {': '}
                            {pokemon.weaknesses.map((type) => (
                                <Box
                                    sx={{
                                        width: '20%',
                                        height: 15,
                                        backgroundColor:
                                            getTypeColor(type).bgColor,
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
                                            color: getTypeColor(type).color,
                                        }}
                                    >
                                        {type}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                <Grid container mb={1} spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'FleeRate'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'span'}>
                            {`: ${pokemon.fleeRate}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'MaxCP'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'span'}>
                            {`: ${pokemon.maxCP}`}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <Typography component={'span'}>{'MaxHP'}</Typography>
                    </Grid>
                    <Grid item xs={9.5}>
                        <Typography component={'span'}>
                            {`: ${pokemon.maxHP}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default PokemonInfo;
