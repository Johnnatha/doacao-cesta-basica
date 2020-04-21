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
});

export default theme;
