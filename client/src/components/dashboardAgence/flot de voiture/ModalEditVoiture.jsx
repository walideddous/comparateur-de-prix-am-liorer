import React from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//Redux
import { connect } from "react-redux";
import { editerVoiture } from "../../../actions/car";

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

const ModalEditVoiture = ({ editerVoiture, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelchange = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handelEdit = id => {
    editerVoiture(id, data);
    setOpen(false);
  };
  return (
    <div className='buttonEdit'>
      <div onClick={handleOpen}>Editer</div>
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
            <h4 id='transition-modal-title'>Editer une voiture</h4>
            <form className={classes.root} noValidate autoComplete='off'>
              <TextField
                id='standard-basic'
                label='Image de la voiture'
                name='image'
                onChange={handelchange}
              />
              <TextField
                id='standard-basic'
                label='La marque de la voiture'
                name='marque'
                onChange={handelchange}
              />
              <TextField
                id='standard-basic'
                label='Le model de la voiture'
                name='model'
                onChange={handelchange}
              />
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='demo-dialog-native'>
                  Anne de mise en circulation
                </InputLabel>
                <Select
                  native
                  input={
                    <Input
                      id='demo-dialog-native'
                      name='annee'
                      onChange={handelchange}
                    />
                  }
                >
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
                <Select
                  native
                  input={
                    <Input
                      id='demo-dialog-native'
                      name='clim'
                      onChange={handelchange}
                    />
                  }
                >
                  <option value='' />
                  <option>Oui</option>
                  <option>Non</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='demo-dialog-native'>Boite</InputLabel>
                <Select
                  native
                  input={
                    <Input
                      id='demo-dialog-native'
                      name='boite'
                      onChange={handelchange}
                    />
                  }
                >
                  <option value='' />
                  <option>Automatique</option>
                  <option>Manuelle</option>
                </Select>
              </FormControl>
              <TextField
                id='standard-basic'
                label='Prix de location par jour (DT) '
                type='number'
                name='prix'
                onChange={handelchange}
              />
              <TextField
                id='standard-basic'
                label='Voiture disponible non louer'
                type='number'
                name='dispo'
                onChange={handelchange}
              />
            </form>
            <button
              className='btn btn-primary btn-sm m-2'
              onClick={() => handelEdit(id)}
            >
              Editer
            </button>
            <button className='btn btn-danger btn-sm m-2' onClick={handleClose}>
              Annuler
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default connect(null, { editerVoiture })(ModalEditVoiture);
