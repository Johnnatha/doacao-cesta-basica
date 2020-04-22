import React from 'react'
import { Button, Grid, makeStyles, lighten, LinearProgress, Typography } from '@material-ui/core'
import Util from '../services/Util'
import { withStyles } from '@material-ui/styles';
import BannerMobile from '../images/banner_app_320x380_view.png'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%'
  },
  labelFinal: {
    display: 'block',
    fontSize: 16,
    marginBottom: 16
  },
  labelFinalAccent: {
    display: 'block',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 16,
    marginTop: 22
  },
  containerDonate: {
    display: 'flex',
    flexDirection: 'column',
    padding: '34px !important'
  },
  bannerMobile: {
    display: 'none',
  },
  title: {
    marginBottom: 36
  },
  '@media only screen and (max-width: 992px)': {
    bannerMobile: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 24,

      '& img': {
        maxWidth: '100%'
      }
    },
    containerDonate: {
      padding: '22px 0 !important'
    }
  }
}))

const BorderLinearProgress = withStyles({
  root: {
    height: 15,
    backgroundColor: lighten('#bfbfbf', 0.5),
    marginBottom: 16
  },
  bar: {
    backgroundColor: '#26ab47',
  },
})(LinearProgress);

export default function HomePage({ data, next }) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} className={classes.containerDonate}>
          <Typography variant="h5" align="center" className={classes.title}>
            Campanha
          </Typography>

          <span className={classes.labelFinal} style={{textAlign: 'center'}}>
            Doado <strong>R$ {Util.formatMoney(data.campanha.vlrDoado)}</strong>
          </span>

          <BorderLinearProgress
            variant="determinate"
            color="secondary"
            value={data.campanha.percAtingimento}
          />

          <span className={classes.labelFinal} style={{textAlign: 'center'}}>
            Desafio <strong>R$ {Util.formatMoney(data.campanha.vlrDesafio)}</strong>
          </span>

          <span className={classes.labelFinalAccent}>
            Faltam <strong>{data.campanha.diasEncerramento} dias!</strong>
          </span>

          <Button
            onClick={next}
            fullWidth
            color="primary"
            variant="contained"
          >
            Doar
          </Button>

          <div className={classes.bannerMobile}>
            <img src={BannerMobile} alt="" /> 
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}