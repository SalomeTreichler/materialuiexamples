import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import { typography } from '@material-ui/system';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#373737"
        }
    },
    typography: {
        fontFamily: ['Krub', 'sans-serif'].join(',')
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA