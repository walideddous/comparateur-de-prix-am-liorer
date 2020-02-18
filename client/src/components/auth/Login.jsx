import React, { useState } from "react";
import Alert from "../layout/Alert";
import Joi from "joi-browser";
import { Link, Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import img3 from "../../img/3.jpg";
//Redux
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { setAlert } from "./../../actions/alert";
//Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' to='/'>
        Karen Wekri
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${img3})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function LoginForm({ login, isAuthenticated, setAlert }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
      .label("Password")
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(formData, schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errors = validate();
    for (const property in errors) {
      setAlert(errors[property]);
    }
    login({ email, password });
  };

  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  const { email, password } = formData;

  return (
    <div className='container'>
      <Alert />
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Connexion
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={e => handleSubmit(e)}
            >
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Adresse email'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={e => handleChange(e)}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Mot de passe'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={e => handleChange(e)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Se rappeler de moi'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                style={{ backgroundColor: "#ff3366" }}
                className={classes.submit}
              >
                Connexion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to='/password-oublier' variant='body2'>
                    Vous avez oublié le mot de passe ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/register' variant='body2'>
                    Vous n'avez pas un compte? S'inscrire
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

LoginForm.protoTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login, setAlert })(LoginForm);
