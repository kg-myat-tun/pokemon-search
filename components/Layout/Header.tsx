// components/Layout/Header.tsx
import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'bgColor.main',
                boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px',
            }}
        >
            <Box
                component={'img'}
                src="/logo.png"
                sx={{
                    width: 100,
                    height: 'auto',
                }}
            />
        </Box>
    );
};

export default Header;
