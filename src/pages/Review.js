import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Doacao from '../images/logo_campanha.png';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Util from '../services/Util';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  typography: {
    marginTop: theme.spacing(3),
    color: '#9B9A9B',
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '1.5em'
  },
  title: {
    marginTop: theme.spacing(3),
    color: '#303030',
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '1.2em'
  },
  imgWrapper: {
    marginTop: theme.spacing(3)
  },
  spacerTop: {
    marginTop: 25,
    width: '100%'
  },
  wrapper: {
    paddingBottom: 130
  },
  emailField: {
    '& input': {
      textAlign: 'center'
    }
  }
}));

export default function Review({ donationValue, selectedCity, setEmail, setAllowUseName, settings }) {
  const classes = useStyles();
  const [ allowUseName, setAllowUseNameLocal ] = React.useState(false)
  const [ email, setEmailLocal ] = React.useState('')

  const handleChange = () => {
    setAllowUseNameLocal(!allowUseName)
    setAllowUseName(!allowUseName)
  }

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.wrapper}
      >

        <Typography variant="h6" className={classes.typography}>
          Doação no valor de <br />
          <strong>R$ {Util.formatMoney(donationValue)}</strong> de cestas<br />
          básicas para cidade de<br />
          <strong>{selectedCity && selectedCity.nome ? selectedCity.nome : ''} - {selectedCity && selectedCity.siglaUf ? selectedCity.siglaUf : ''} </strong>
        </Typography>

        <div className={classes.imgWrapper}>
          <img src={Doacao} />
        </div>

        <Typography variant="h6" className={classes.typography}>
            Informe seu e-mail e receba<br />
            informações sobre a campanha
        </Typography>

        <div className={classes.spacerTop}>
          <TextField
            value={email}
            onChange={event => { setEmailLocal(event.target.value); if (setEmail) { setEmail(event.target.value) } }}
            fullWidth
            type="email"
            placeholder="e-mail"
            className={classes.emailField}
            required={settings && settings.requiredEmailAutorizacao}
          />
        </div>

        <div className={classes.spacerTop}>
          <FormControlLabel
            control={
              <Checkbox
                checked={allowUseName}
                onChange={handleChange}
                name="allowUseName"
                color="primary"
                icon={<CheckBoxOutlineBlankIcon style={{fontSize: 32}} />}
                checkedIcon={<CheckBoxIcon style={{fontSize: 32}} />}
              />
            }
            label="Autorizo a divulgação do meu nome como Doador"
          />
        </div>
      </Grid>

    </React.Fragment>
  );
}