import React from 'react'
import {Button, Grid, makeStyles, lighten, LinearProgress, Typography} from '@material-ui/core'
import Util from '../services/Util'
import {withStyles} from '@material-ui/styles';
import BannerMobile from '../components/Image/banner-home-mobile'

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
    btnDoar: {
        borderRadius: 50,
    },
    containerDonate: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15% 34px !important'
    },
    bannerMobile: {
        display: 'none',
    },
    btnCancelDoacao: {
        display: 'none',
        borderRadius: 50,
        marginTop: 20
    },
    '@media only screen and (max-width: 992px)': {
        btnCancelDoacao: {
            display: 'block',
        },
        bannerMobile: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: -24,
            marginBottom: 24,
            height: 360,

            '& img': {
                maxWidth: '100%'
            },

            '& .gatsby-image-wrapper': {
                height: '100% !important',
                width: '100%',

                '& img': {
                    objectFit: 'unset !important'
                }
            },
        },
        containerDonate: {
            padding: '22px 0 !important'
        },
        imageMobile: {
            maxWidth: '58% !important',
            height: '100% !important',
            width: '100%',
        },
    }
}))

const BorderLinearProgress = withStyles({
    root: {
        height: 15,
        backgroundColor: lighten('#1D5F31', 0.5),
        marginBottom: 16
    },
    bar: {
        backgroundColor: '#1D5F31',
        borderRadius: 10
    },
})(LinearProgress);

export default function HomePage({data, next}) {
    const classes = useStyles()

    let campanha = {};

    if (data && data.campanha) {
        campanha = data.campanha
    }

    const handleCloseApp = () => {
        if (typeof window !== 'undefined' && window.parent) {
            window.parent.postMessage(JSON.stringify({action: 'close'}), '*');
        }
    }

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} className={classes.containerDonate}>
                    <div className={classes.bannerMobile}>
                        <BannerMobile className={classes.imageMobile}/>
                    </div>


                    <span className={classes.labelFinal} style={{textAlign: 'left'}}>
                            Doado <strong>R$ {Util.formatMoney(campanha.vlrDoado)}</strong>
                        </span>


                    <BorderLinearProgress
                        variant="determinate"
                        color="secondary"
                        value={campanha.percAtingimento}
                    />

                    {campanha.exibeLabelVlrDesafio == 1 && (
                        <span className={classes.labelFinal} style={{textAlign: 'right'}}>
                        Desafio <strong>R$ {Util.formatMoney(campanha.vlrDesafio)}</strong>
                      </span>
                    )}
                    <span className={classes.labelFinalAccent}>
            Faltam <strong>{campanha.diasEncerramento} dias!</strong>
          </span>

                    <Button
                        className={classes.btnDoar}
                        onClick={next}
                        fullWidth
                        color="primary"
                        variant="contained"
                    >
                        Doar
                    </Button>

                    <Button
                        className={classes.btnCancelDoacao}
                        onClick={handleCloseApp}
                        fullWidth
                        color="primary"
                        variant="outlined"
                    >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}