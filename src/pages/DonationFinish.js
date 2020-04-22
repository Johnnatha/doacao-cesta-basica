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
    color: '#fff'
  },
  check: {
    width: 150
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    color: '#037649',
    width: 120,
    height: 50,
    marginTop: 30,
    fontSize: 18,
  }
}));

export default function DonationFinish({ checkoutResponse }) {
  const classes = useStyles();

  const handleFinish = () => {
    if (window && window !== 'undefined') {
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
          <Typography variant="h6" className={classes.title}>
            {checkoutResponse.message || 'Erro'}
          </Typography>
        </Grid>

        <Grid item xs={12} >
          {
            checkoutResponse.success ?
              <img src={Check} className={classes.check} />
            :
              <img src={CheckError} className={classes.check} />
          }  
        </Grid>
      
        <Grid item xs={12} >

          <Typography variant="h6" className={classes.title}>
            {
              checkoutResponse.success ?
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
                className={classes.button}
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