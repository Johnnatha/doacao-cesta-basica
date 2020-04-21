import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#037649',
    color: '#fff'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btnCustom: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#F7F7F7',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSelectCity() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}
        className={classes.btnCustom}
        fullWidth
      >Escolha...</Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        fullScreen
        TransitionComponent={Transition}
        open={open} onClose={handleClose}>

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

        <List>
          <ListItem button>
            <ListItemText 
                primary="Porto Alegre" 
                secondary="Rio Grande do Sul"
                onClick={handleClose}  />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText 
                onClick={handleClose} 
                primary="Santo Cristo" 
                secondary="Rio Grande do Sul" />
          </ListItem>
        </List>

      </Dialog>
    </div>
  );
}
