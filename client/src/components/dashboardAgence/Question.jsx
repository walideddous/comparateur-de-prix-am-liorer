import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function QuestionFrequente() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading} style={{ color: "blue" }}>
            De quoi ai-je besoin pour louer une voiture ?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Pour réserver votre véhicule, vous n'avez besoin que d'une carte de
            crédit ou de débit.
            <br /> Votre bon/evoucher, pour montrer que vous avez déjà réglé le
            véhicule.
            <br /> La carte de crédit/débit du conducteur principal, avec
            suffisamment de fonds disponibles pour permettre de bloquer le dépôt
            de garantie de la voiture.
            <br /> Le permis de conduire valide et complet de chaque conducteur,
            obtenu depuis au moins 12 mois (parfois 24).
            <br /> Votre passeport ou carte d'identité que la société de
            location a besoin de voir.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading} style={{ color: "blue" }}>
            Puis-je réserver une voiture de location pour quelqu'un d'autre ?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Oui, du moment que cette personne répond aux exigences du contrat de
            location. Il suffit de nous fournir ses coordonnées lors de la
            réservation.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3a-content'
          id='panel3a-header'
        >
          <Typography className={classes.heading} style={{ color: "blue" }}>
            Comment puis-je trouver le contrat de location le moins cher ?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nous travaillons avec toutes les grandes enseignes de location de
            voitures internationales (et beaucoup de petites entreprises
            locales) pour vous offrir un grand choix de véhicules au meilleur
            prix. C'est ainsi que nous pouvons vous trouver des offres de
            location de voitures dans plus de 60,000 destinations dans le monde.
            Pour comparer les tarifs et trouver votre véhicule idéal à un prix
            imbattable, il suffit d'utiliser notre moteur de recherche.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
