import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  }
}));

const ModalFiltreVoiture = props => {
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
        <FilterListIcon />
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
            <h4 id='transition-modal-title'>
              Recherche filtrer sur les voitures
            </h4>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField id='standard-basic' label='La marque de la voiture' />
              <TextField id='standard-basic' label='Le model de la voiture' />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='demo-dialog-native'>
                  Anne de mise en circulation
                </InputLabel>
                <Select native input={<Input id='demo-dialog-native' />}>
                  <option value='' />
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='demo-dialog-native'>Climatisé</InputLabel>
                <Select native input={<Input id='demo-dialog-native' />}>
                  <option value='' />
                  <option>Oui</option>
                  <option>Non</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='demo-dialog-native'>Boite</InputLabel>
                <Select native input={<Input id='demo-dialog-native' />}>
                  <option value='' />
                  <option>Automatique</option>
                  <option>Manuelle</option>
                </Select>
              </FormControl>
              <TextField
                id='standard-basic'
                label='Prix de location par jour (DT)'
                type='number'
              />
              <TextField
                id='standard-basic'
                label='Voiture disponible non louer'
                type='number'
              />
            </form>
            <button className='btn btn-primary btn-sm m-2'>Filtrer</button>
            <button className='btn btn-danger btn-sm m-2' onClick={handleClose}>
              Annuler
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalFiltreVoiture;
