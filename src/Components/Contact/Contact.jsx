/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
  },
  heading: {
    fontFamily:
      " -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-seri !important",
  },
  map: {
    textAlign: "center",
  },
  iframe: {
    border: "none",
  },
  image: {
    marginTop: "-50px",
    width: "100%",
    objectFit: "contain",
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src="/contact.jpg" alt="no-img" className={classes.image} />
      <Typography variant="h3" align="center" className={classes.heading}>
        REACH US OUT
      </Typography>
      <div className={classes.map}>
        <iframe
          id="iframeid"
          width="80%"
          height="300"
          className={classes.iframe}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Muthialpet,%20Pondicherry+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      <Typography variant="body2" align="center"></Typography>
      <Typography variant="body2" align="center"></Typography>

      <FooterContact />
    </div>
  );
}

export default Contact;
