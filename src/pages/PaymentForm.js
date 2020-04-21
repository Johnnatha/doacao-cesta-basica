import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as creditCardType from 'credit-card-type'

export default function PaymentForm({ settings }) {
  console.log(creditCardType)
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {
          settings && settings.requiredCpf &&
          <Grid item xs={12} md={6}>
            <TextField required id="userCpf" label="CPF ou CNPJ" type="number"  fullWidth />
          </Grid>
        }

        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Número do Cartão" type="number" fullWidth />
        </Grid>
        <Grid item xs={4} md={4}>
          <TextField required id="expDate" label="Validade" />
        </Grid>

        <Grid item xs={4} md={4}>
          <TextField
            required
            id="cvv"
            label="CVV"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}