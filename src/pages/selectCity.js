import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import useSWR from 'swr'
import config from '../config'
import SuspenseLoader from '../components/SuspenseLoader';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btnCustom: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'transparent',
    marginTop: 48,
    height: 50,
    border: '1px solid'
  },
  tapToChoose: {
    textDecoration: 'underline'
  },
  citySelected: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 400,
    marginTop: -3
  },
  modalRoot: {
    marginLeft: '58%'
  },
  '@media only screen and (max-width: 992px)': {
    listCity: {
      backgroundColor: theme.mobileBackground
    },
    modalRoot: {
      marginLeft: 0,

      '& div[role="dialog"]': {
        backgroundColor: theme.mobileBackground
      }
    },
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSelectCity({ sessionId, clientId, setSelectedCity, selectedCity }) {
  const isSSR = typeof window === "undefined"

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [citySelected, setCitySelected] = React.useState(selectedCity || null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (cid) => {
    setOpen(false);

    if (cid && cid.nome) {
      setCitySelected(cid)
      setSelectedCity(cid)
    }
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className={classes.btnCustom}
        fullWidth >
        
        {!citySelected && (
          <span className={classes.tapToChoose}>
            Toque para escolher...
          </span>
        )}

        {citySelected && (
          <span className={classes.citySelected}>
            {citySelected.nome} - {citySelected.siglaUf}
          </span>
        )}
      </Button>

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

        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Escolha uma cidade
            </Typography>
          </Toolbar>
        </AppBar>

        {
          !isSSR && (
          <Suspense fallback={<SuspenseLoader />}>
            <CidadeList handleClose={handleClose} sessionId={sessionId} clientId={clientId} isSSR={isSSR} />
          </Suspense>
          )
        }
      </Dialog>
    </div>
  );
}

let listCity = null

function CidadeList ({ handleClose, sessionId, clientId, isSSR }) {
  const classes = useStyles()
  const shouldFetchUrl = listCity ? null : `${config.apiUrl}/listCidades?s=${sessionId}&clientId=${clientId}`
  const { data } = useSWR(shouldFetchUrl, config.fetcher, { suspense: !isSSR })

  if (!listCity) {
    listCity = data.list
  }

  const list = listCity ? listCity : data.list

  const cidadesListItems = (list ? list : []).map((cid, index) =>
    <React.Fragment key={index}>
      <ListItem button>
        <ListItemText
          primary={cid.nome}
          secondary={cid.uf}
          onClick={() => handleClose(cid)} />
      </ListItem>

      {index < (list.length - 1) && (
        <Divider />
      )}
    </React.Fragment>
  );

  return (
    <List className={classes.listCity}>
      {cidadesListItems}
    </List>
  )
}
