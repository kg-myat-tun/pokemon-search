import { Box } from '@mui/material';
import React from 'react';
import SearchInput from '../../../../../components/molecules/SearchInput';

const Header = () => {
    return (
        <Box>
            <SearchInput placeholder="Search with name" onChange={() => {}} />
        </Box>
    );
};

export default Header;
