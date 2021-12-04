import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";

const useStyles = makeStyles((theme) => ({

  container:{
    justifyContent:"center",
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>

      <Typography variant="h2" align="center">Contact Us</Typography>
      <Typography variant="body2" align="center">abchjjkfjjgjgj</Typography>
      <Typography variant="body2" align="center">abcd</Typography>

      <FooterContact />

    </div>
  );
}

export default Contact;
