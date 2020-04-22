import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26ab47',
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
    accentColor: '#037649'
  },
  btnAccent: {
    background: '#f7b900',
    color: '#fff',
    borderRadius: 50,
    boxShadow: '0 14px 44px rgba(0,0,0,0.20), 0 4px 10px rgba(0,0,0,0.22)',

    '&:hover': {
      background: '#188e35'
    },

    '& svg': {
      color: '#fff'
    }
  },
});

export default theme;
