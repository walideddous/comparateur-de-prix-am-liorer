import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

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
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  }
}));

const ModalAjoutList = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='buttonadd'>
      <button
        onClick={handleOpen}
        className='btn btn-outline-dange my-2 my-sm-0 m-1'
      >
        <AddIcon />
      </button>
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
            <h4 id='transition-modal-title'>Ajouter un dossier de location</h4>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField id='standard-basic' label='Reference du client' />
              <FormControl
                className={clsx(
                  classes.margin,
                  classes.withoutLabel,
                  classes.textField
                )}
              >
                <Input
                  id='standard-adornment-date'
                  type='date'
                  aria-describedby='standard-date-helper-text'
                  inputProps={{
                    "aria-label": "Date"
                  }}
                />
                <FormHelperText id='standard-date-helper-text'>
                  Date de départ
                </FormHelperText>
              </FormControl>
              <FormControl
                className={clsx(
                  classes.margin,
                  classes.withoutLabel,
                  classes.textField
                )}
              >
                <Input
                  id='standard-adornment-date'
                  type='date'
                  aria-describedby='standard-date-helper-text'
                  inputProps={{
                    "aria-label": "Date"
                  }}
                />
                <FormHelperText id='standard-date-helper-text'>
                  Date de retour
                </FormHelperText>
              </FormControl>
              ;
              <TextField id='standard-basic' label='Reference de la voiture' />
              <TextField id='standard-basic' label='Model de la voiture' />
              <TextField
                id='standard-basic'
                label='Prix de location (DT)'
                type='number'
              />
              <TextField id='standard-basic' label='Remarque' />
            </form>
            <button className='btn btn-primary btn-sm m-2'>Ajouter</button>
            <button className='btn btn-danger btn-sm m-2' onClick={handleClose}>
              Annuler
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalAjoutList;
