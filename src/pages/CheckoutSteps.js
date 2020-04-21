import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoacaoForm from './DoacaoForm';
import PaymentForm from './PaymentForm';
import Success from './Success';
import Review from './Review';
import Grid from '@material-ui/core/Grid';
import cards from '../images/cards'
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import config from '../config';
import useSWR from 'swr';
import HomePage from './HomePage';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CheckoutService from '../services/CheckoutService';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.accentColor,
    color: '#fff'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  customPaper: {
    boxShadow: 'none',
  },
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    boxShadow: 'none',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  },
  payMethod: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  typography: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginLeft: theme.spacing(1),
    borderRadius: 50,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: '1.2em',
    height: 44,
    lineHeight: '20px',
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    paddingBottom: 8,
    paddingTop: 4
  },
  appBarStepConfirm: {
    top: 'auto',
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    boxShadow: 'none',
    height: 66,
    display: 'flex',
    justifyContent: 'space-between'
  },
  payCardIcon: {
    width: 50,
    maxHeight: 32,
    minHeight: 32,
  },
  payBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  payBoxFirst: {
    padding: '0 8px'
  },
  payMathod: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '&:after': {
      content: '""',
      width: 0,
      height: 0, 
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '8px solid #797979',
      position: 'absolute',
      right: 0
    }
  },
  payButtonWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 52,
  },
  smalLabel: {
    fontSize: 14,
    marginBottom: 4,
    display: 'block'
  },

  payDialog_appBar: {
    position: 'relative',
    backgroundColor: theme.palette.accentColor,
    color: '#fff'
  },
  payDialog_title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  payDialog_btnCustom: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  payDialog_content: {
    padding: 20
  },
  bgSuccess: {
    backgroundColor: theme.palette.accentColor,
    textAlign: 'center',
    height: '100vh'
  },
  btnBack: {
    width: 36,
    minWidth: 36,
    color: '#fff',
    borderRadius: '50%',
    marginLeft: -10
  },
  appBarTitle: {
    fontSize: 16
  }
}));

function getStepContent({
  step,
  handleNext,
  sessionId,
  data,
  setDonationValue,
  setSelectedCity,
  donationValue,
  selectedCity,
  settings,
  setEmail,
  setAllowUseName
}) {
  switch (step) {
    case 0: {
      return <HomePage next={handleNext} data={data} sessionId={sessionId} />;
    }
    case 1: {
      return <DoacaoForm 
                data={data}
                sessionId={sessionId}
                setDonationValue={setDonationValue}
                setSelectedCity={setSelectedCity}
                donationValue={donationValue}
                selectedCity={selectedCity}
                settings={settings}
              />;
    }
    case 2:
      {
        return <Review
                data={data}
                sessionId={sessionId}
                donationValue={donationValue}
                selectedCity={selectedCity}
                setEmail={setEmail}
                setAllowUseName={setAllowUseName}
                settings={settings}
              />;
      }
    case 3:
      {
        return <Success data={data} sessionId={sessionId} />;
      }

    default:
      throw new Error('Unknown step');
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckoutSteps() {
  // COMPONENT FIELDS
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messageSeverity, setMessageSeverity] = React.useState('')

  // DATA FIELDS
  const [donationValue, setDonationValue] = React.useState(null)
  const [selectedCity, setSelectedCity] = React.useState(null)
  const [allowUseName, setAllowUseName] = React.useState(false)
  const [email, setEmail] = React.useState('')

  let sessionId = null;
  let sourceId = null;
  let clientId = null;

  if (window && window.location) {
    const urlParams = new URLSearchParams(window.location.search);
    sessionId = urlParams.get('s');
    clientId = urlParams.get('clientId');
    sourceId = urlParams.get('src');
  }

  const { data } = useSWR(sessionId ? `${config.apiUrl}/initWebApp?s=${sessionId}&clientId=${clientId}` : null, config.fetcher, { suspense: true })

  const handleCheckout = async (callback) => {
    const requestData = {
      dadosPagamento: {
          valorPagamento: donationValue
      },
      dadosAutorizacao: {
          aceitaDivulgarNome: allowUseName,
          email: email
      },
      dadosDoacao: {
        cidadeDestino: {
          id: selectedCity.id
        }
      }
    }

    if (data && data.defaultCard) {
      requestData.dadosPagamento = Object.assign(requestData.dadosPagamento, { ...data.defaultCard })
    }

    const response = await CheckoutService.finish(sessionId, clientId, requestData)
    console.log(response)

    if (response.success && callback) {
      callback()
    }
  }

  const handleNext = () => {
    const next = () => setActiveStep(activeStep + 1);

    if (activeStep === 1 && donationValue === null) {
      setMessageSeverity('error')
      setMessage('Você deve preencher o valor da doação primeiro!')
      return
    }

    if (activeStep === 1 && !selectedCity || (selectedCity && !selectedCity.nome)) {
      setMessageSeverity('error')
      setMessage('Você deve selecionar a cidade para qual deseja doar!')
      return
    }

    if (activeStep === 2) {
      return handleCheckout(next)
    }

    next();
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTitle = () => {
    let title = ''

    if (activeStep === 2) {
      title = 'Confirme os dados de sua doação'
    }

    return title
  };

  const handleSnackbarClose = () => {
    setMessage('')
    setMessageSeverity('')
  }

  return (
    <React.Fragment>

      {activeStep != 3 && sourceId !== '1' && (

        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Button className={classes.btnBack} onClick={handleBack}>
              <ArrowBackIcon />
            </Button>

            <span className={classes.appBarTitle}>
              {getTitle()}
            </span>
          </Toolbar>
        </AppBar>
      )}

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullScreen
        TransitionComponent={Transition}
        open={open} onClose={handleClose}>

        <AppBar className={classes.payDialog_appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.payDialog_title}>
              Dados de pagamento
            </Typography>
          </Toolbar>
        </AppBar>

        <div className={classes.payDialog_content}>
          <PaymentForm settings={data.settings} />
        </div>
      </Dialog>

      <main className={activeStep !== 3 ? classes.layout : classes.bgSuccess}>
        <Paper className={activeStep !== 3 ? classes.paper : classes.customPaper}>
          <React.Fragment>
            {getStepContent({
              step: activeStep,
              data,
              sessionId,
              handleNext,
              setDonationValue,
              setSelectedCity,
              donationValue,
              selectedCity,
              settings: data.settings,
              setAllowUseName,
              setEmail
            })}
          </React.Fragment>
        </Paper>
      </main>

      {activeStep === 1 && (

        <AppBar
          position="fixed"
          color="default"
          className={classes.appBarBottom} >

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={8} onClick={handleClickOpen}>
              <Grid container>
                <Grid item xs={12} className={classes.payBoxFirst}>
                  <span className={classes.smalLabel}>Forma de pagamento</span>
                </Grid>

                <Grid item xs={3} className={classes.payBox}>
                  <img
                    src={cards[data.defaultCard && data.defaultCard.cardLabel ? data.defaultCard.cardLabel : 'Default']}
                    alt={`Imagem ${data.defaultCard && data.defaultCard.cardLabel ? data.defaultCard.cardLabel : 'Cartão'}`}
                    className={classes.payCardIcon} />

                </Grid>

                <Grid item xs={6} className={classes.payMathod}>
                  {
                    data.defaultCard && data.defaultCard.label ?
                      data.defaultCard.label
                    :
                      'Informe'
                  }
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4} className={classes.payButtonWrapper}>
              <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Doar
              </Button>
            </Grid>

          </Grid>

        </AppBar>

      )}

      {activeStep === 2 && (

        <AppBar
          position="fixed"
          color="default"
          className={classes.appBarStepConfirm} >

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >

            <Button
                variant="outlined"
                color="primary"
                onClick={handleBack}
                className={classes.button}
            >
              Cancelar
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              Confirmar
      </Button>

          </Grid>
        </AppBar>

      )}
    
      <Snackbar
        open={message !== ''}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Alert severity={messageSeverity}>
          {message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}