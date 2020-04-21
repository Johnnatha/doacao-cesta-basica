import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Check from '../images/check.png';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  bg: {
    paddingTop: 30,
    backgroundColor: '#037649',
    textAlign: 'center'
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: '#fff'
  },
  check: {
    width: 150
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    color: '#037649'
  }
}));

export default function Confirm() {
  const classes = useStyles();

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
              Doação Confirmada
       </Typography>
          </Grid>

          <Grid item xs={12} >
            <img src={Check} className={classes.check} />

          </Grid>
          <Grid item xs={12} >

          <Typography variant="h6" className={classes.title}>
              Obrigado!
       </Typography>
          </Grid>

          <Grid item xs={12} >

          <Button
                variant="outlined"
                color="primary"
                className={classes.button}
              >
                Ok!
            </Button>

            </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
}