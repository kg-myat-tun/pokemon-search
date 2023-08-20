import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Palette {
        bgColor: Palette['primary'];
    }

    interface PaletteOptions {
        bgColor: PaletteOptions['primary'];
    }

    interface Palette {
        mute: Palette['primary'];
    }

    interface PaletteOptions {
        mute: PaletteOptions['primary'];
    }
}

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1565C0',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        bgColor: {
            main: '#F5F5F5',
        },
        mute: {
            main: '#161515BF',
            light: '#A9A9A9',
        },
    },
});
export default theme;
