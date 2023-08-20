import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import React, { useState } from 'react';

interface Props {
    onSearch(value: string): void;
}

const Header = ({ onSearch }: Props) => {
    const [value, setValue] = useState<string>('');

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(value);
        }
    };

    return (
        <Box>
            {/* <SearchInput placeholder="Search with name" onChange={() => {}} /> */}

            <TextField
                id="searchInput"
                label="Search"
                variant="outlined"
                placeholder="Search with name"
                size="small"
                onChange={handleChangeValue}
                value={value}
                onKeyDown={handleKeyPress}
            />
            <Button
                variant="outlined"
                sx={{ py: '7px', ml: 1 }}
                onClick={onSearch.bind(null, value)}
            >
                <SearchIcon />
            </Button>
        </Box>
    );
};

export default Header;
