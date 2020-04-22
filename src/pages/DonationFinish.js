import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Check from '../images/check.png';
import CheckError from '../images/check-error.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  bg: {
    paddingTop: 30,
    textAlign: 'center'
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main
  },
  titleError: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
    color: '#c32222'
  },
  check: {
    width: 150
  },
  button: {
    borderRadius: 50,
    color: '#037649',
    width: 120,
    height: 50,
    marginTop: 30,
    fontSize: 18,
  },
  buttonError: {
    borderRadius: 50,
    color: '#c32222',
    width: 120,
    height: 50,
    marginTop: 30,
    fontSize: 18,
    borderColor: '#c32222'
  },
  '@media only screen and (max-width: 992px)': {
    bg: {
      backgroundColor: theme.mobileBackground
    }
  }
}));

export default function DonationFinish({ checkoutResponse }) {
  const classes = useStyles();

  const handleFinish = () => {
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage(JSON.stringify({ action: 'close'}), '*'); 
    }
  }

  return (
    <React.Fragment >
      <div className={classes.bg}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-center"
        >
        <Grid item xs={12}  >
          <Typography variant="h6" className={checkoutResponse && checkoutResponse.success ? classes.title : classes.titleError}>
            {checkoutResponse && checkoutResponse.mensagemRetorno ? checkoutResponse.mensagemRetorno : 'Erro'}
          </Typography>
        </Grid>

        <Grid item xs={12} >
          {
            checkoutResponse && checkoutResponse.success ?
              <img src={Check} className={classes.check} />
            :
              <img src={CheckError} className={classes.check} />
          }  
        </Grid>
      
        <Grid item xs={12} >

          <Typography variant="h6" className={checkoutResponse && checkoutResponse.success ? classes.title : classes.titleError}>
            {
              checkoutResponse && checkoutResponse.success ?
                'Obrigado!'
              :
                'Que pena!'
            }
          </Typography>
        </Grid> 

        <Grid item xs={12} >
          <Button
                variant="outlined"
                color="primary"
                className={checkoutResponse && checkoutResponse.success ? classes.button : classes.buttonError}
                onClick={handleFinish}
              >
                Ok!
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}