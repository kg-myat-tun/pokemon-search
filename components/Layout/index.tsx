import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface Props {
    children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
            }}
        >
            <Header />

            <Container
                maxWidth={false}
                sx={{
                    px: {
                        lg: 7,
                        md: 2,
                    },
                    py: 1,
                }}
            >
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
