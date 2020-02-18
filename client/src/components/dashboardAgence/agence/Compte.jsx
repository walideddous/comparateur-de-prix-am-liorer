import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";

//Redux
import { connect } from "react-redux";
import { getUser } from "./../../../actions/agence";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#ff3366"
  },
  style: {
    display: "flex"
  },
  mainStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  widthInput: {
    width: 300
  }
}));

const Compte = ({ getUser, profile }) => {
  const classes = useStyles();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className={classes.mainStyle}>
      <div className={classes.toolbar} />
      <div className={classes.root}>
        <input
          accept='image/*'
          className={classes.input}
          id='contained-button-file1'
          multiple
          type='file'
        />
        <label htmlFor='contained-button-file'>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            component='span'
          >
            Importer le logo de L'agence
          </Button>
        </label>
      </div>
      <div className={classes.style}>
        <TextField
          id='standard-basic1'
          label="Nom de l'agence"
          className={classes.widthInput}
        />
        <button className='btn btn-outline-success my-2 my-sm-2 m-1'>
          Enregistrer
        </button>
        <button className='btn btn-outline-danger my-2 my-sm-2 m-1'>
          Annuler
        </button>
      </div>
      <div className={classes.style}>
        <TextField
          id='standard-basic2'
          label='Nom du responsable'
          className={classes.widthInput}
        />
        <button className='btn btn-outline-success my-2 my-sm-2 m-1'>
          Enregistrer
        </button>
        <button className='btn btn-outline-danger my-2 my-sm-2 m-1'>
          Annuler
        </button>
      </div>
      <div className={classes.style}>
        <TextField
          id='standard-basic3'
          label='Numero du telephone'
          className={classes.widthInput}
        />
        <button className='btn btn-outline-success my-2 my-sm-2 m-1'>
          Enregistrer
        </button>
        <button className='btn btn-outline-danger my-2 my-sm-2 m-1'>
          Annuler
        </button>
      </div>
      <div className={classes.style}>
        <TextField
          id='standard-basic4'
          label='Numero du telephone mobile'
          className={classes.widthInput}
        />
        <button className='btn btn-outline-success my-2 my-sm-2 m-1'>
          Enregistrer
        </button>
        <button className='btn btn-outline-danger my-2 my-sm-2 m-1'>
          Annuler
        </button>
      </div>
      <div className={classes.style}>
        <TextField
          id='standard-basic5'
          label='Adresse'
          className={classes.widthInput}
        />
        <button className='btn btn-outline-success my-2 my-sm-2 m-1'>
          Enregistrer
        </button>
        <button className='btn btn-outline-danger my-2 my-sm-2 m-1'>
          Annuler
        </button>
      </div>
      <div className={classes.style}>
        <TextField
          id='standard-basic6'
          label='Description'
          className={classes.widthInput}
        />
        <button className='btn btn-outline-success my-2 my-sm-2 m-1'>
          Enregistrer
        </button>
        <button className='btn btn-outline-danger my-2 my-sm-2 m-1'>
          Annuler
        </button>
      </div>
    </div>
  );
};

export default connect(null, { getUser })(Compte);
