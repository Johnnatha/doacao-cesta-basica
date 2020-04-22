import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as creditCardType from 'credit-card-type'
import { Button, AppBar, makeStyles, Container } from '@material-ui/core';
import InputMask from 'react-input-mask';

const useStyles = makeStyles((theme) => ({
  appBarPaymentForm: {
    top: 'auto',
    bottom: 0,
    padding: 10,
    backgroundColor: '#fff',
    boxShadow: 'none',
    height: 66,
    display: 'flex',
    justifyContent: 'space-between'
  },
  btnContinue: {
    height: 44,
    float: 'right',
    minWidth: 140,
    ...theme.btnAccent
  },
  btnCancel: {
    height: 44,
    float: 'right',
    minWidth: 140,
    ...theme.btnAccent,
    color: theme.palette.primary.main,
    backgroundColor: '#dedede',
    marginRight: 14
  },
  '@media only screen and (min-width: 992px)': {
    appBarPaymentForm: {
      position: 'absolute'
    }
  }
}))

export default function PaymentForm({ settings, onClose, setCpfCnpj, setCardNumber, setExpDate, setCvv, setMessageSeverity, setMessage }) {
  const classes = useStyles()
  const [cpfCnpj, setCpfCnpjLocal] = React.useState('')
  const [cardNumber, setCardNumberLocal] = React.useState('')
  const [expDate, setExpDateLocal] = React.useState('')
  const [cvv, setCvvLocal] = React.useState('')
  const [alreadyTriedSubmit, setAlreadyTriedSubmit] = React.useState(false)

  React.useEffect(() => {
    creditCardType.addCard({
      niceType: 'Verdecard',
      type: 'verdecard',
      patterns: [
        627894,
        509156,
        604792
      ],
      lengths: [16],
      code: {
        name: 'CVV',
        size: 4
      }
    });

    creditCardType.changeOrder('verdecard', 0);
  }, [])

  const handleFocus = (name) => {
    if (name === 'cnpj') {
      setTimeout(() => {
        const field = document.getElementById('cnpj')

        if (field.value.length === 18) {
          const focusField = document.getElementById('cardNumber')
          focusField.focus()
        }  
      }, 1);
    }

    if (name === 'cardNumber') {
      setTimeout(() => {
        const field = document.getElementById('cardNumber')

        if (field.value.length === 19) {
          const focusField = document.getElementById('expDate')
          focusField.focus()
        }  
      }, 1);
    }

    if (name === 'expDate') {
      setTimeout(() => {
        const field = document.getElementById('expDate')

        if (field.value.length === 5 && field.value.indexOf('_') === -1) {
          const focusField = document.getElementById('cvv')
          focusField.focus()
        }
      }, 1);
    }
  }

  const handleClose = () => {
    if (!cardNumber || !cvv || !expDate || (settings && settings.requiredCpf && !cpfCnpj)) {
      return setAlreadyTriedSubmit(true)
    }

    let possibleCards = creditCardType(cardNumber.split(' ').join(''));

    if (possibleCards && possibleCards.length) {
      const firstPossibleCard = possibleCards[0]

      if (onClose) {        
        onClose(firstPossibleCard.type, cardNumber.substring(cardNumber.length - 4, cardNumber.length))
      }
    } else {
      setMessageSeverity('error')
      setMessage('Verifique os dados do cartão!')
    }
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {
          settings && !settings.requiredCpf &&
          <Grid item xs={12} md={6}>
            {
              cpfCnpj.length <= 14 &&
              <InputMask mask="999.999.999-999" maskChar="" value={cpfCnpj} onChange={event => { setCpfCnpjLocal(event.target.value); setCpfCnpj(event.target.value); handleFocus('cpf', event.target.value) }}>
                {inputProps =>
                  <TextField
                    {...inputProps}
                    required
                    id="cpf"
                    label="CPF ou CNPJ"
                    type="tel"
                    fullWidth
                    error={alreadyTriedSubmit && cpfCnpj === ''}
                    autoFocus
                  />
                }
              </InputMask>
            }
            
            {
              cpfCnpj.length > 14 &&
              <InputMask mask="99.999.999/9999-99" maskChar="" value={cpfCnpj} onChange={event => { setCpfCnpjLocal(event.target.value); setCpfCnpj(event.target.value); handleFocus('cnpj', event.target.value) }}>
                {inputProps =>
                  <TextField
                    {...inputProps}
                    required
                    id="cnpj"
                    label="CPF ou CNPJ"
                    type="tel"
                    fullWidth
                    error={alreadyTriedSubmit && cpfCnpj === ''}
                    autoFocus
                  />
                }
              </InputMask>
            }
          </Grid>
        }

        <Grid item xs={12} md={6}>
          <InputMask mask="9999 9999 9999 9999" maskChar="" value={cardNumber} onChange={event => { setCardNumberLocal(event.target.value); setCardNumber(event.target.value); handleFocus('cardNumber', event.target.value)}}>
            {inputProps =>
              <TextField
                {...inputProps}
                required
                id="cardNumber"
                label="Número do Cartão"
                type="tel"
                error={alreadyTriedSubmit && cardNumber === ''}
                fullWidth
              />
            }
          </InputMask>
        </Grid>
        <Grid item xs={4} md={4}>
          <InputMask mask="99/99" maskChar="_" value={expDate} onChange={event => { setExpDateLocal(event.target.value);setExpDate(event.target.value); handleFocus('expDate', event.target.value) }}>
            {inputProps =>
              <TextField
                {...inputProps}
                required
                id="expDate"
                label="Validade"
                minLength={4}
                value={expDate}
                error={alreadyTriedSubmit && expDate === ''}
                type="tel"
              />
            }
          </InputMask>
        </Grid>

        <Grid item xs={4} md={4}>
          <InputMask mask="9999" maskChar=" " value={cvv} onChange={event => { setCvvLocal(event.target.value); setCvv(event.target.value); handleFocus('cvv', event.target.value) }}>
            {inputProps =>
              <TextField
                {...inputProps}
                required
                id="cvv"
                error={alreadyTriedSubmit && cvv === ''}
                label="CVV"
                minLength={3}
              />
            }
          </InputMask>
        </Grid>
      </Grid>

      <AppBar
          position="fixed"
          color="default"
          className={classes.appBarPaymentForm} >

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              
              <Button
                onClick={handleClose}
                className={classes.btnContinue}
              >
                Continuar
              </Button>

              <Button
                onClick={onClose}
                className={classes.btnCancel}
                variant="outlined"
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </AppBar>
    </Container>
  );
}