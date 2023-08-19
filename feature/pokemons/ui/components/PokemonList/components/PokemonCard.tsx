import React from 'react';
//mui
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Divider, Typography, Grid } from '@mui/material';

//constants
import PokemonTypeColors from '../../../../constants/pokemonTypesColor';

//utils
import getTypeColor from '../../../../utils/getTypeColor';
import { Pokemon } from '../../../../query/getAllPokemons';

interface Props {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
    return (
        <Card
            sx={{
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    '& .img': {
                        transform: 'translateY(-10px)',
                        boxShadow: 'rgba(33, 35, 38, 0.3) 0px 10px 10px -10px',
                    },
                },
                height: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box
                    component={'img'}
                    sx={{
                        height: '150px',
                        width: 'auto',
                        objectFit: 'contain',
                        transition: 'all 0.3s ease-in-out',
                    }}
                    src={pokemon.image}
                    className="img"
                />
                {/* <Divider sx={{ width: '60% ' }} /> */}
            </Box>

            <Box>
                <Typography
                    component={'p'}
                    sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        cursor: 'text',
                        textAlign: 'center',
                        mt: 3,
                    }}
                >
                    {pokemon.name}
                </Typography>
                <Typography
                    component={'p'}
                    sx={{
                        color: '#A9A9A9',
                        fontSize: 14,
                        fontWeight: 500,
                        textAlign: 'center',
                        cursor: 'text',
                    }}
                >
                    #{pokemon.number}
                </Typography>

                <Grid container spacing={1} mt={2} justifyContent={'center'}>
                    {pokemon.types.map((type) => (
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: 15,
                                    backgroundColor: getTypeColor(type),
                                    borderRadius: 10,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 12,
                                        lineHeight: 1,
                                    }}
                                >
                                    {type}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Card>
    );
};

export default PokemonCard;
