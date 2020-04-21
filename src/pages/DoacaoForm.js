import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import DialogSelectCity from './selectCity'

const useStyles = makeStyles((theme) => ({
    typography: {
        marginTop: theme.spacing(3),
        color: '#9B9A9B',
        fontWeight: 400,
    },

    textField: {
        fontSize: '1.5em',
        textAlign: 'center'
    }
  }));

export default function DoacaoForm(props) {
    const classes = useStyles();
    const cidades = props.cidades;

    const handleSelectCity = () => {
      console.log('foi...');
    };

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.typography}>
      Qual o valor de sua <strong>doação</strong>?
      </Typography>

      <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            required
            id="vlrDoacao"
            name="vlrDoacao"
            fullWidth
            type="number"
            autoComplete='off'
          />
        </Grid>

        <Typography variant="h6"className={classes.typography} >
             Escolha a <strong>cidade</strong> para onde quer destinar
        </Typography>

      <Grid item xs={12} sm={6}>
         <DialogSelectCity cidades={cidades} />
        </Grid>        

    </React.Fragment>
  );
}