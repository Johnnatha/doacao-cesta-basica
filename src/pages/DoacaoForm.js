import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DialogSelectCity from './selectCity'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

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
  const [value, setValue] = React.useState(donationValue || '')

  const handleCurrencyChange = actualValue => {
    setValue(actualValue);
    setDonationValue(actualValue)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.typography}>
      Qual o valor de sua <strong>doação</strong>?
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          <CurrencyTextField
            className={classes.textField}
            variant="standard"
            value={value}
            currencySymbol="R$"
            onChange={(event, value)=> handleCurrencyChange(value)}
            id="vlrDoacao"
            name="vlrDoacao"
            fullWidth
            autoComplete='off'
            decimalPlaces={2}
            digitGroupSeparator="."
            minimumValue="1"
            selectOnFocus={false}
            decimalCharacter=","
          />
        </Grid>

        <Typography variant="h6"className={classes.typographyEnd} >
            Escolha a <strong>cidade</strong> para onde<br />
            quer destinar
        </Typography>

        <Grid item xs={12}>
          <DialogSelectCity sessionId={sessionId} clientId={data && data.clientId ? data.clientId : null} setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
        </Grid>  
      </Grid>      
    </React.Fragment>
  );
}