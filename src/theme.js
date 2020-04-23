import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e4637',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    accentColor: '#1e4637'
  },
  btnAccent: {
    background: '#1e4637',
    color: '#fff',
    borderRadius: 50,

    '& svg': {
      color: '#fff'
    }
  },
  mobileBackground: '#dce6bc'
});

export default theme;
