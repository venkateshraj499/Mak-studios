import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      I am Contact page Roshni, please code me!!!
    </div>
  );
}

export default Contact;
