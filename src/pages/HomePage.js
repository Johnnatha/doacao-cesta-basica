import React from 'react'
import {Button, Grid, makeStyles, lighten, LinearProgress} from '@material-ui/core'
import Util from '../services/Util'
import {withStyles} from '@material-ui/styles';
import BannerMobile from '../components/Image/banner-home-mobile'
import BannerAgradecimentoMobile from '../components/Image/banner-home-agradecimento-mobile'
import Advent from '../components/Image/advent'
import QueroQueroVerdecard from '../components/Image/qq-vc'
import Pessoas from '../components/Image/pessoas'

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
        marginTop: 8
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
    qqLogo: {
        height: 90,

        '& img': {
            maxWidth: '100%',
        },

        '& .gatsby-image-wrapper': {
            height: '100% !important',
            width: '72% !important',
            marginTop: 8,

            '& img': {
                objectFit: 'unset !important'
            }
        },
    },
    adventLogo: {
        height: 82,
        paddingTop: 15,

        '& img': {
            maxWidth: '100%'
        },

        '& .gatsby-image-wrapper': {
            height: '100% !important',
            width: '92% !important',

            '& img': {
                objectFit: 'unset !important'
            }
        },
    },
    publicLogo: {
        height: 92,
        paddingTop: 15,
        textAlign: 'center',

        '& img': {
            maxWidth: '100%'
        },

        '& .gatsby-image-wrapper': {
            height: '100% !important',
            width: '50% !important',

            '& img': {
                objectFit: 'unset !important'
            }
        },
    },
    progressWrapperContainer: {
        height: 154
    },
    progressWrapper: {
        position: 'relative',
    },
    progressValue: {
        position: 'absolute',
        bottom: 18,
        left: 14,
    },
    '@media only screen and (max-width: 992px)': {
        progressWrapperContainer: {
            height: 122
        },
        qqLogo: {
            height: 60
        },
        adventLogo: {
            height: 58
        },
        publicLogo: {
            height: 68,

            '& .gatsby-image-wrapper': {
                width: '60% !important'
            }
        },
        btnCancelDoacao: {},
        bannerMobile: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: -26,
            marginBottom: 24,

            marginLeft: -26,
            width: '116%',

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

const defaultProgress = {
    root: {
        height: 25,
        marginBottom: 16,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    bar: {}
}

const ProgressBarQQ = withStyles(theme => ({
    root: {
        ...defaultProgress.root,
        backgroundColor: lighten('#538136', 0.5),

    },
    bar: {
        ...defaultProgress.bar,
        backgroundColor: '#538136',
    }
}))(LinearProgress);

const ProgressBarAdvent = withStyles(theme => ({
    root: {
        ...defaultProgress.root,
        backgroundColor: lighten('#cbb667', 0.5),

    },
    bar: {
        ...defaultProgress.bar,
        backgroundColor: '#cbb667',
    },
    '@media only screen and (max-width: 992px)': {
        root: {
            backgroundColor: lighten(theme.mobileBackground, 0.5),
        }
    }
}))(LinearProgress);

const ProgressBarPublic = withStyles(theme => ({
    root: {
        ...defaultProgress.root,
        backgroundColor: lighten('#618fba', 0.5),

    },
    bar: {
        ...defaultProgress.bar,
        backgroundColor: '#618fba'
    },
    '@media only screen and (max-width: 992px)': {
        root: {
            backgroundColor: lighten(theme.mobileBackground, 0.5),
        }
    }
}))(LinearProgress);

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
                        {campanha.diasEncerramento > 0 && (
                            <BannerMobile className={classes.imageMobile}/>
                        )}
                        {campanha.diasEncerramento <= 0 && (
                            <BannerAgradecimentoMobile className={classes.imageMobile}/>
                        )}
                    </div>

                    {campanha.exibeLabelVlrDesafio == 1 && (
                        <span className={classes.labelFinal} style={{textAlign: 'right'}}>
                        Desafio <strong>R$ {Util.formatMoney(campanha.vlrDesafio)}</strong>
                      </span>
                    )}

                    <Grid container className={classes.progressWrapperContainer}>
                        <Grid item xs={4} className={classes.progressWrapper}>
                            <div className={classes.qqLogo}>
                                <QueroQueroVerdecard />
                            </div>

                            <ProgressBarQQ
                                variant="determinate"
                                color="secondary"
                                value={campanha.percAtingimento}
                            />

                            <span className={classes.progressValue} style={{color: '#fff'}}>
                                {'R$ ' + Util.formatMoney(campanha.vlrDoadoQq)}
                            </span>
                        </Grid>

                        <Grid item xs={4} className={classes.progressWrapper}>
                            <div className={classes.adventLogo}>
                                <Advent />
                            </div>

                            <ProgressBarAdvent
                                variant="determinate"
                                color="secondary"
                                value={campanha.percAtingimento}
                            />

                            <span className={classes.progressValue}>
                                {'R$ ' + Util.formatMoney(campanha.vlrDoadoAdvt)}
                            </span>
                        </Grid>

                        <Grid item xs={4} className={classes.progressWrapper}>
                            <div className={classes.publicLogo}>
                                <Pessoas />
                            </div>

                            <ProgressBarPublic
                                variant="determinate"
                                color="secondary"
                                value={campanha.percAtingimentoPopular || 0}
                            />

                            <span className={classes.progressValue}>
                                {'R$ ' + Util.formatMoney(campanha.vlrDoadoPublico)}
                            </span>
                        </Grid>
                    </Grid>

                    <span className={classes.labelFinal} style={{textAlign: 'right'}}>
                        Total <strong>R$ {Util.formatMoney(campanha.vlrDoado)}</strong>
                    </span>

                    {campanha.diasEncerramento > 0 && (
                        <React.Fragment>
                            {campanha.diasEncerramento == 1 && (
                                <span className={classes.labelFinalAccent}>
                                    Falta <strong>{campanha.diasEncerramento} dia!</strong>
                                </span>
                            )}
                            {campanha.diasEncerramento > 1 && (
                                <span className={classes.labelFinalAccent}>
                                     Faltam <strong>{campanha.diasEncerramento} dias!</strong>
                                </span>
                            )}
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
                        </React.Fragment>
                    )}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}