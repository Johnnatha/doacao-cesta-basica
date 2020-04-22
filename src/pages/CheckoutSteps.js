import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoacaoForm from './DoacaoForm';
import PaymentForm from './PaymentForm';
import DonationFinish from './DonationFinish';
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
import { Snackbar, Container } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CheckoutService from '../services/CheckoutService';
import BannerDesktop from '../images/banner_desk_840x745_view.png'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.accentColor,
    color: '#fff',
    display: 'none'
  },
  layout: {
    width: 'auto'
  },
  customPaper: {
    boxShadow: 'none',
  },
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    boxShadow: 'none',
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
  activeStepBarWrapper: {
    position: 'relative',
    marginTop: 75
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
    paddingBottom: 8,
    paddingTop: 4,
    position: 'absolute'
  },
  appBarStepConfirm: {
    top: 'auto',
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    boxShadow: 'none',
    height: 66,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute'
  },
  payCardIcon: {
    width: 50,
    maxHeight: 32,
    minHeight: 32,
  },
  payBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-8px',
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
    justifyContent: 'flex-end',
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
  },
  image: {
    left: 0,
    position: 'absolute',
    maxWidth: '58%',
    top: 0,
    height: '100%'
  },
  modalRoot: {
    marginLeft: '58%'
  },
  '@media only screen and (max-width: 992px)' : {
    appBar: {
      display: 'block'
    },
    image: {
      display: 'none'
    },
    appBarBottom: {
      position: 'fixed'
    },
    appBarStepConfirm: {
      position: 'fixed'
    },
    imageWrapper: {
      display: 'none'
    },
    layout: {
      '& > div': {
        backgroundColor: theme.mobileBackground,
      }
    },
    modalRoot: {
      marginLeft: 0,
      
      '& div[role="dialog"]': {
        backgroundColor: theme.mobileBackground
      }
    },
    '@global': {
      body: {
        backgroundColor: theme.mobileBackground,
      }
    }
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
  setAllowUseName,
  checkoutResponse
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
        return <DonationFinish data={data} sessionId={sessionId} checkoutResponse={checkoutResponse} />;
      }

    default:
      throw new Error('Unknown step');
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CheckoutSteps() {
  const isSSR = typeof window === "undefined"

  // COMPONENT FIELDS
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [messageSeverity, setMessageSeverity] = React.useState('')
  const [checkoutResponse, setCheckoutResponse] = React.useState({})

  // DATA FIELDS
  const [donationValue, setDonationValue] = React.useState(null)
  const [selectedCity, setSelectedCity] = React.useState(null)
  const [allowUseName, setAllowUseName] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [cpfCnpj, setCpfCnpj] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')
  const [expDate, setExpDate] = React.useState('')
  const [cvv, setCvv] = React.useState('')
  const [defaultCard, setDefaultCard] = React.useState({})

  let sessionId = null;
  let sourceId = null;
  let clientId = null;

  if (typeof window !== 'undefined' && window.location) {
    const urlParams = new URLSearchParams(window.location.search);
    sessionId = urlParams.get('s');
    clientId = urlParams.get('clientId');
    sourceId = urlParams.get('src');
  }

  const { data } = useSWR(sessionId ? `${config.apiUrl}/initWebApp?s=${sessionId}&clientId=${clientId}` : null, config.fetcher, { suspense: !isSSR })

  React.useEffect(() => {
    if (data && data.defaultCard) {
      setDefaultCard(data.defaultCard)
    }
  }, [])

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

    if (cpfCnpj) {
      requestData.dadosPagamento.cpf = cpfCnpj
    }

    if (cardNumber) {
      requestData.dadosPagamento.numeroCartao = cardNumber
    }

    if (expDate) {
      requestData.dadosPagamento.dataValidade = expDate
    }

    if (cvv) {
      requestData.dadosPagamento.cvv = cvv
    }

    const response = await CheckoutService.finish(sessionId, clientId, requestData)

    if (callback) {
      callback()
      setCheckoutResponse(response)
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

  const handleNewCardClose = (cardName, cardFinal) => {
    setDefaultCard({
      cardLabel: cardName,
      label: `Final ${cardFinal}`
    })

    setOpen(false)
  }

  return (
    <React.Fragment>

      {activeStep != 3 && activeStep != 0 && sourceId !== '1' && (

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
        open={open}
        onClose={handleClose}
        classes={{
          root: classes.modalRoot,
        }}
      >

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
          <PaymentForm
            settings={data && data.settings ? data.settings : {}}
            onClose={handleNewCardClose}
            setCpfCnpj={setCpfCnpj}
            setCardNumber={setCardNumber}
            setExpDate={setExpDate}
            setCvv={setCvv}
          />
        </div>
      </Dialog>

      <main className={activeStep !== 3 ? classes.layout : classes.bgSuccess}>
        <Paper className={activeStep !== 3 ? classes.paper : classes.customPaper}>
          <Container maxWidth={false}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={7} className={classes.imageWrapper}>
                <img src={BannerDesktop} className={classes.image} />
              </Grid>

              <Grid item xs={12} md={5}>
                {getStepContent({
                  step: activeStep,
                  data,
                  sessionId,
                  handleNext,
                  setDonationValue,
                  setSelectedCity,
                  donationValue,
                  selectedCity,
                  settings: data && data.settings ? data.settings : {},
                  setAllowUseName,
                  setEmail,
                  checkoutResponse
                })}
              </Grid>

              <Grid item xs={false} md={7}></Grid>

              <Grid item xs={12} md={5}>
              <div className={classes.activeStepBarWrapper}>
                  {activeStep === 1 && (

                  <AppBar
                    color="default"
                    className={classes.appBarBottom} >
                    <Container>
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

                            <Grid item xs={3} md={2} className={classes.payBox}>
                              <img
                                src={cards[defaultCard && defaultCard.cardLabel ? defaultCard.cardLabel.toLowerCase() : 'Default']}
                                alt={`Imagem ${defaultCard && defaultCard.cardLabel ? defaultCard.cardLabel : 'Cartão'}`}
                                className={classes.payCardIcon}
                                />
                            </Grid>

                            <Grid item xs={6} md={4} className={classes.payMathod}>
                              {
                                defaultCard && defaultCard.label ?
                                  defaultCard.label
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
                    </Container>

                  </AppBar>

                  )}

                  {activeStep === 2 && (

                  <AppBar
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
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>

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