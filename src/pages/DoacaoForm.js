import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

import { makeStyles } from '@material-ui/core/styles';

import DialogSelectCity from './selectCity'

const useStyles = makeStyles((theme) => ({
    typography: {
        marginTop: theme.spacing(1),
        color: '#383838',
        fontWeight: 400,
    },

    typographyEnd: {
      marginTop: theme.spacing(3),
      color: '#383838',
      fontWeight: 400,
    },

    textField: {
        fontSize: '1.5em',
        textAlign: 'center',
        marginTop: 22,

        '& input': {
          textAlign: 'center',
          paddingRight: 15
        }
    }
  }));

export default function DoacaoForm({ data, sessionId, donationValue, selectedCity, setDonationValue, setSelectedCity }) {
  const classes = useStyles()
  const [value, setValue] = React.useState(donationValue || null)

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.typography}>
      Qual o valor de sua <strong>doação</strong>?
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <CurrencyTextField
            className={classes.textField}
            variant="standard"
            value={value}
            decimalCharacter=","
            digitGroupSeparator="."
            decimalPlaces={2}
            decimalPlacesShownOnFocus={2}
            currencySymbol="R$"
            onChange={(event, value)=> { setValue(value); setDonationValue(value) }}
            fullWidth
            autoComplete='off'
            id="vlrDoacao"
            name="vlrDoacao"
            minimumValue="0"
          />
        </Grid>

        <Typography variant="h6"className={classes.typographyEnd} >
            Escolha a <strong>cidade</strong> para onde<br />
            quer destinar
        </Typography>

        <Grid item xs={12} sm={6}>
          <DialogSelectCity sessionId={sessionId} clientId={data.clientId} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
        </Grid>  
      </Grid>      
    </React.Fragment>
  );
}