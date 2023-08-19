import React from 'react';

import { TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
    padding?: string | number;
    bgTransparent?: boolean;
    error?: boolean;
    border?: boolean;
    inputAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    readonly?: boolean;
};

const TextInput: React.FC<Props> = (props) => {
    return (
        <TextField
            error
            id={props.id}
            placeholder={props.placeholder ? props.placeholder : ''}
            variant="standard"
            fullWidth={props.fullWidth ? props.fullWidth : false}
            size="small"
            sx={{
                '& .Mui-focused': {
                    border: '1px solid',
                    borderColor: props.error ? 'error.main' : '#566080',
                },
            }}
            type={props.type ? props.type : 'text'}
            InputProps={{
                disableUnderline: true,
                sx: {
                    p: props.padding ? props.padding : '10px',
                    bgcolor: props.bgTransparent
                        ? 'transparent'
                        : 'bgColor.light.900',
                    fontSize: 14,
                    fontWeight: 500,
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: props.error
                        ? props.border
                            ? 'mute.main'
                            : 'error.main'
                        : 'transparent',
                    '& .MuiInputBase-input': {
                        pt: 0,
                    },

                    ...props.sx,
                },
                startAdornment: props.inputAdornment,
                endAdornment: props.endAdornment,
                readOnly: props.readonly,
            }}
            inputProps={props.inputProps}
            disabled={props.disabled}
            inputRef={props.inputRef}
            onClick={props.onClick}
            onChange={props.onChange}
            autoFocus={props.autoFocus}
            value={props.value}
            defaultValue={props.defaultValue}
            aria-readonly={props.readonly}
            autoComplete={props.autoComplete}
        />
    );
};

export type { Props };
export default TextInput;
