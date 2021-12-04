/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";

const useStyles = makeStyles((theme) => ({

  container:{
    justifyContent:"center",
  },
  heading:{
    fontFamily:" -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-seri !important"
  },
  map:{
    textAlign:"center"
  }
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>

      <Typography variant="h2" align="center"className={classes.heading}>Contact Us</Typography>
     <div className={classes.map}>
      <iframe id="iframeid"
        width="80%"
        height="500"
        src="https://www.google.com/maps/embed?api=1&origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA&travelmode=bicycling">

        </iframe>
        </div>
      
      <Typography variant="body2" align="center">abchjjkfjjgjgj</Typography>
      <Typography variant="body2" align="center">abcd</Typography>

      <FooterContact />

    </div>
  );
}

export default Contact;
