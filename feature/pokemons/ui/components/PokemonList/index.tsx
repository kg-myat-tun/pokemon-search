import React, { useState } from 'react';
import Link from 'next/link';

//mui
import { Box, Grid, Typography } from '@mui/material';

//components
import PokemonCard from './components/PokemonCard';

//interface
import { Pokemon } from '../../../types/queryType';

interface Props {
    pokemonList: Pokemon[];
    loadMore(): void;
}

const PokemonList = (props: Props) => {
    const { pokemonList, loadMore } = props;

    return (
        <Box
            sx={{
                mt: 3,
            }}
        >
            {pokemonList[0] !== null ? (
                <>
                    <Grid
                        container
                        columnSpacing={2}
                        rowSpacing={3}
                        columns={10}
                    >
                        {pokemonList.map((item) => (
                            <Grid item xs={1} md={3} lg={2}>
                                <Link href={`/pokemon/${item.name}`}>
                                    <PokemonCard pokemon={item} />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>

                    {pokemonList.length !== 1 && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 'max-content',
                                    padding: '10px 15px',
                                    backgroundColor: 'secondary.main',
                                    borderRadius: '6px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={loadMore}
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
                    )}
                </>
            ) : (
                <Box
                    sx={{
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: 'bgColor.main',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'gray',
                        }}
                    >
                        No Pokemon Matched Your Search!
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default PokemonList;
