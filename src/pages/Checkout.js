import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import DoacaoForm from './DoacaoForm';
import PaymentForm from './PaymentForm';
import Success from './Success';
import Review from './Review';
import Grid from '@material-ui/core/Grid';
import Verdecard from '../images/Verdecard.png'
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';

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
    fontSize: '1.2em'
  },
  appBarBottom: {
    top: 'auto',
    bottom: 0,
  },
  appBarStepConfirm: {
    top: 'auto',
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    boxShadow: 'none'
  },
  payCardIcon: {
    width: 50
  },
  payBox: {
    paddingLeft: 10,
    paddingTop: 10
  },
  payMathod: {

  },
  smalLabel: {
    fontSize: 12
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
    textAlign: 'center'
  }

}));

const steps = ['City', 'Review', 'Success'];

const cidadeList = [
  {nome: 'Porto Alegre', uf: 'Rio Grade do Sul'},
  {nome: 'Santo Cristo', uf: 'Rio Grade do Sul'},
  {nome: 'Cachoeirinha', uf: 'Rio Grade do Sul'},
]

function getStepContent({step, cidades, handleGetResult}) {
  switch (step) {
    case 0: {
      return <DoacaoForm cidades={cidades}  />;
    }
    case 1:
      {
        return <Review />;
      }
    case 2:
      {
        return <Success />;
      }

    default:
      throw new Error('Unknown step');
  }
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
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

  const handleSelectCity = () => {
    console.log('foi...');
  };
  return (
    <React.Fragment>

      {activeStep != 2 && (

        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>

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
          <PaymentForm />

        </div>

      </Dialog>

      <main className={activeStep !== 2 ? classes.layout : classes.bgSuccess}>
        <Paper className={activeStep !== 2 ? classes.paper : classes.customPaper}>
          <React.Fragment>
          <React.Fragment>
                  {getStepContent({
                    step: activeStep, 
                    cidades: cidadeList
                  })}
                </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>

      {activeStep === 0 && (

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

            <Grid item xs={3} className={classes.payBox}>

              <img
                src={Verdecard}
                alt="ola"
                className={classes.payCardIcon} />

            </Grid>

            <Grid item xs={4} className={classes.payMathod}>

              <Typography onClick={handleClickOpen}>
                <span className={classes.smalLabel}>Forma de pagamento</span><br />Final 5509
            </Typography>
            </Grid>

            <Grid item xs={5} className={classes.buttons}>

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

      {activeStep === 1 && (

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
     
    </React.Fragment>
  );
}