import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "70%"
  },
  inputStyle: {
    display: "flex",
    justifyContent: "center"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 250
    }
  },
  buttonModalStyle: {
    display: "flex",
    justifyContent: "flex-end"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const ModalRepondreQuestion = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='buttonEdit'>
      <div onClick={handleOpen}>Repondre</div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 id='transition-modal-title'>Répondre à la question</h4>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField id='standard-basic' label='Ecrire la reponse' />
            </form>
            <button className='btn btn-primary btn-sm m-2'>Envoyer</button>
            <button className='btn btn-danger btn-sm m-2' onClick={handleClose}>
              Annuler
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalRepondreQuestion;
