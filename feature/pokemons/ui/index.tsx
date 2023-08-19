import React from 'react';

import { gql, useQuery, useMutation } from '@apollo/client';

//mui
import { Box, Container } from '@mui/material';

//components
import Header from './components/Header';
import PokemonList from './components/PokemonList';

const PokemonPage = () => {
    return (
        <Box
            sx={{
                py: 3,
            }}
        >
            {/* Header */}
            <Header />

            {/* Pokemon list */}
            <PokemonList />
        </Box>
    );
};

export default PokemonPage;
