import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Doacao from '../images/doacao.png';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  typography: {
    marginTop: theme.spacing(3),
    color: '#9B9A9B',
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '1.5em'
  },
  title: {
    marginTop: theme.spacing(3),
    color: '#303030',
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '1.2em'
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-center"
      >

        <Typography variant="h6" className={classes.title}>
          Confirme os dados de sua doação
       </Typography>

        <Typography variant="h6" className={classes.typography}>
          Doação no valor de <br />
          <strong>R$ 120,00</strong> de cextas básicas <br />
          para cidade de <strong>Santo Cristo </strong>
        </Typography>


        <img src={Doacao} />


      </Grid>

    </React.Fragment>
  );
}