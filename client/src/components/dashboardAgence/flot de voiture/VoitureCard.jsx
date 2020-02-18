import React, { Fragment } from "react";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ModalEditVoiture from "./ModalEditVoiture";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//Redux
import { connect } from "react-redux";
import { suppVoiture } from "../../../actions/car";

const useStyles = makeStyles({
  card: {
    maxWidth: 320,
    margin: 25
  }
});

const VoitureCard = ({ voiture, suppVoiture }) => {
  const classes = useStyles();

  const handelSupp = () => {
    suppVoiture(voiture._id);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={voiture.image}
          title='Voiture'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Marque: {voiture.marque} <br />
            Model: {voiture.model}
          </Typography>
          <Fragment>
            <Typography variant='body2' color='textSecondary' component='p'>
              Année : {voiture.annee}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Climatisé: {voiture.clim}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Boite: {voiture.boite}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Prix/jour: {voiture.prix}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Voiture disponible non louer: {voiture.dispo}
            </Typography>
          </Fragment>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <ModalEditVoiture id={voiture._id} />
        </Button>
        <Button size='small' color='primary' onClick={handelSupp}>
          Supprimer
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(null, { suppVoiture })(VoitureCard);
