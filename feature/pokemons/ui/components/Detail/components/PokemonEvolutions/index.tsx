import React from 'react';
import Link from 'next/link';

//mui
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//types
import type { PokemonEvaluation } from '../../../../../types/queryType';
//utils
import getTypeColor from '../../../../../utils/getTypeColor';

interface Props {
    open: boolean;
    close(): void;
    evolutions: PokemonEvaluation;
}

const PokemonEvolutions = (props: Props) => {
    return (
        <Dialog
            fullWidth
            maxWidth={'md'}
            open={props.open}
            onClose={props.close}
        >
            <DialogTitle>Evolutions of {props.evolutions.name}</DialogTitle>
            <DialogContent
                sx={{
                    py: 5,
                }}
            >
                <Grid container spacing={3} justifyContent={'center'}>
                    {props.evolutions.evolutions.map((pokemon) => (
                        <>
                            <Grid item xs={12} md={6} lg={4}>
                                <Link href={`/pokemon/${pokemon.name}`}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                        }}
                                        onClick={props.close}
                                    >
                                        <Box
                                            component={'img'}
                                            sx={{
                                                height: '150px',
                                                width: 'auto',
                                                objectFit: 'contain',
                                                transition:
                                                    'all 0.3s ease-in-out',
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

                                        <Grid
                                            container
                                            spacing={1}
                                            mt={2}
                                            justifyContent={'center'}
                                        >
                                            {pokemon.types.map((type) => (
                                                <Grid item xs={4}>
                                                    <Box
                                                        sx={{
                                                            width: '100%',
                                                            height: 15,
                                                            backgroundColor:
                                                                getTypeColor(
                                                                    type
                                                                ).bgColor,
                                                            borderRadius: 10,
                                                            display: 'flex',
                                                            justifyContent:
                                                                'center',
                                                            alignItems:
                                                                'center',
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: 12,
                                                                lineHeight: 1,
                                                                color: getTypeColor(
                                                                    type
                                                                ).color,
                                                            }}
                                                        >
                                                            {type}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </Link>
                            </Grid>
                        </>
                    ))}
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default PokemonEvolutions;
