import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 15
  },
  loaderText: {
    display: 'block',
    marginTop: 15
  }
}));

export default function SuspenseLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <span className={classes.loaderText}>Carregando...</span>
    </div>
  );
}
  