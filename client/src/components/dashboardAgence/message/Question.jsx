import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import QuestionCard from "./QuestionCard";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  typoStyle: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const Question = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.toolbar} />
      <h4>Message reçu</h4>
      <Typography className={classes.typoStyle}>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </Typography>
    </Fragment>
  );
};

export default Question;
