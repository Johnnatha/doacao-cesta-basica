import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as creditCardType from 'credit-card-type'
import { Button, AppBar, makeStyles } from '@material-ui/core';
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
  }
}))

export default function PaymentForm({ settings, onClose, setCpfCnpj, setCardNumber, setExpDate, setCvv }) {
  const classes = useStyles()
  const [cpfCnpj, setCpfCnpjLocal] = React.useState('')
  const [cardNumber, setCardNumberLocal] = React.useState('')
  const [expDate, setExpDateLocal] = React.useState('')
  const [cvv, setCvvLocal] = React.useState('')
  const [invalidCard, setInvalidCard] = React.useState(false)

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
        size: 3
      }
    });

    creditCardType.changeOrder('verdecard', 0);
  }, [])

  const handleClose = () => {
    let possibleCards = creditCardType(cardNumber);

    if (possibleCards && possibleCards.length) {
      const firstPossibleCard = possibleCards[0]

      setInvalidCard(false)

      if (onClose) {        
        onClose(firstPossibleCard.type, cardNumber.substring(cardNumber.length - 4, cardNumber.length))
      }
    } else {
      setInvalidCard(true)
    }
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {
          settings && settings.requiredCpf &&
          <Grid item xs={12} md={6}>
            {
              cpfCnpj.length <= 14 &&
              <InputMask mask="999.999.999-999" maskChar="" value={cpfCnpj} onChange={event => { setCpfCnpjLocal(event.target.value); setCpfCnpj(event.target.value) }}>
                {inputProps =>
                  <TextField
                    {...inputProps}
                    required
                    id="userCpf"
                    label="CPF ou CNPJ"
                    type="tel"
                    fullWidth
                    error={invalidCard}
                    autoFocus
                  />
                }
              </InputMask>
            }
            
            {
              cpfCnpj.length > 14 &&
              <InputMask mask="99.999.999/9999-99" maskChar="" value={cpfCnpj} onChange={event => { setCpfCnpjLocal(event.target.value); setCpfCnpj(event.target.value) }}>
                {inputProps =>
                  <TextField
                    {...inputProps}
                    required
                    id="userCpf"
                    label="CPF ou CNPJ"
                    type="tel"
                    fullWidth
                    error={invalidCard}
                    autoFocus
                  />
                }
              </InputMask>
            }
          </Grid>
        }

        <Grid item xs={12} md={6}>
          <InputMask mask="9999 9999 9999 9999 9999" maskChar="" value={cardNumber} onChange={event => { setCardNumberLocal(event.target.value); setCardNumber(event.target.value)}}>
            {inputProps =>
              <TextField
                {...inputProps}
                required
                id="cardNumber"
                label="Número do Cartão"
                type="tel"
                fullWidth
              />
            }
          </InputMask>
        </Grid>
        <Grid item xs={4} md={4}>
          <InputMask mask="99/99" maskChar="_" value={expDate} onChange={event => { setExpDateLocal(event.target.value);setExpDate(event.target.value) }}>
            {inputProps =>
              <TextField
                {...inputProps}
                required
                id="expDate"
                label="Validade"
                value={expDate}
                type="tel"
              />
            }
          </InputMask>
        </Grid>

        <Grid item xs={4} md={4}>
          <InputMask mask="999" maskChar=" " value={cvv} onChange={event => { setCvvLocal(event.target.value); setCvv(event.target.value) }}>
            {inputProps =>
              <TextField
                {...inputProps}
                required
                id="cvv"
                label="CVV"
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
            </Grid>
          </Grid>
        </AppBar>
    </React.Fragment>
  );
}