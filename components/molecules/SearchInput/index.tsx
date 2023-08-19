import React from 'react';

import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SxProps } from '@mui/system';

interface Props {
    darkBackground?: boolean;
    disabled?: boolean;
    placeholder: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    containerSx?: SxProps;
    iconSx?: SxProps;
    inputSx?: SxProps;
}

const SearchIconInput: React.FC<Props> = (props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid',
                borderColor: props.darkBackground ? 'white' : 'mute.main',
                borderRadius: '100px',
                py: '3px',
                px: '8px',
                minWidth: '150px',
                width: '240px',
                height: '40px',
                opacity: props.disabled ? 0.4 : 1,
                ...props.containerSx,
            }}
        >
            <SearchIcon
                sx={{
                    color: props.darkBackground ? 'white' : 'text.primary',
                    ...props.iconSx,
                }}
                fontSize="small"
            />
            <TextField
                disabled={props.disabled}
                placeholder={props.placeholder}
                onChange={props.onChange}
                variant="standard"
                sx={{
                    pr: 1.2,
                    '& .Mui-focused': {
                        border: 'none',
                    },
                }}
                InputProps={{
                    disableUnderline: true,
                    sx: {
                        fontSize: 14,
                        fontWeight: 500,
                        color: props.darkBackground ? 'white' : 'text.primary',
                        mb: '3px',
                        ml: '1px',
                        ...props.inputSx,
                    },
                }}
            />
        </Box>
    );
};

export default SearchIconInput;
