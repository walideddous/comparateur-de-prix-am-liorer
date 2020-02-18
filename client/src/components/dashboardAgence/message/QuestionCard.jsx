import React, { Fragment } from "react";
import ModalRepondreQuestion from "./ModalRepondreQuestion";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//Image
import img from "../../../img/Monta.png";

const useStyles = makeStyles({
  card: {
    maxWidth: 320,
    margin: 5
  }
});

export default function QuestionCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={img}
          title='Voiture'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Nom du client: Monta <br />
          </Typography>
          <Fragment>
            <Typography variant='body2' color='textSecondary' component='p'>
              Question: Est ce que je peut loué une voiture pour une autre
              personne
            </Typography>
          </Fragment>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <ModalRepondreQuestion />
        </Button>
        <Button size='small' color='primary'>
          Ignorer
        </Button>
      </CardActions>
    </Card>
  );
}
