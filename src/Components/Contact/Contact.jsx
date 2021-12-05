/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Grid from "@material-ui/core/Grid";
import PulseLoader from "react-spinners/ClipLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  content: {
    position: "absolute",
    top: "30%",
    [theme.breakpoints.between("0", "1000")]: {
      top: "15%",
    },
  },
  heading: {
    fontWeight: "600",
    paddingLeft: "150px",
    [theme.breakpoints.between("600", "1000")]: {
      paddingLeft: "50px",
    },
    [theme.breakpoints.down("600")]: {
      paddingLeft: "16px",
      fontSize: "24px",
    },
  },

  subtitle: {
    paddingTop: "20px",
    color: "grey",
    paddingLeft: "150px",
    [theme.breakpoints.between("600", "1000")]: {
      paddingLeft: "50px",
    },
    [theme.breakpoints.down("600")]: {
      padding: "20px 16px",
      color: "black",
    },
  },
  map: {
    textAlign: "center",
  },
  iframe: {
    border: "none",
    marginTop: "200px",
    [theme.breakpoints.down("600")]: {
      marginTop: "800px",
    },
    [theme.breakpoints.between("600", "850")]: {
      marginTop: "300px",
    },
    [theme.breakpoints.between("850", "1000")]: {
      marginTop: "150px",
    },
    [theme.breakpoints.between("1000", "1300")]: {
      marginTop: "400px",
    },
  },
  image: {
    marginTop: "-50px",
    width: "100%",
    objectFit: "contain",
    minHeight: "200px",
  },
  Icon: {
    color: "#32CD30 !important",
    paddingTop: "25px",
    paddingBottom: "12px",
    fontSize: "70px !important",
    marginBottom: "30px",
  },
  gridContainer: {
    marginTop: "100px",
    width: "100% !important",
    justifyContent: "center",
    [theme.breakpoints.between("600", "1000")]: {
      marginTop: "50px",
    },
  },

  box: {
    backgroundColor: "white",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    padding: "40px !important",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.50)",
    borderRadius: "20px",
    [theme.breakpoints.between("0", "1000")]: {
      padding: "0 !important",
      marginBottom: "20px",
    },
  },
  content2: {
    padding: "0 30px",
    textAlign: "center",
    fontSize: "18px",
    color: "grey",
    marginBottom: "30px",
    [theme.breakpoints.between("0", "1000")]: {
      fontSize: "15px",
    },
  },
  detail: {
    color: "#3c4e73",
    fontSize: "40px",
    margin: "20px",
    [theme.breakpoints.between("00", "1000")]: {
      fontSize: "25px",
    },
  },
  loader: {
    width: "100%",
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loaderNone: {
    display: "none",
  },
}));

function Contact() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const data = [
    {
      content:
        " Interested in Photoshoot?? Simply, pick up the phone to chat with a member of our team.",
      detail: "+91 1234567890",
    },
    {
      content:
        " Interested in Photoshoot?? Simply, pick up the phone to chat with a member of our team.",
      detail: "+91 1234567890",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={loading ? classes.loader : classes.loaderNone}>
        <PulseLoader loading={loading} />
      </div>
      <LazyLoadImage
        effect="blur"
        src="/contact.jpg"
        alt="No-Img"
        width="100%"
        className={classes.image}
        afterLoad={() => {
          setLoading(false);
        }}
      />
      <div className={classes.content}>
        <Typography variant="h3" className={classes.heading}>
          GET IN TOUCH
        </Typography>

        <Typography variant="body1" className={classes.subtitle}>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us....
        </Typography>

        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item sm={5} xs={12} className={classes.box}>
            <WhatsAppIcon className={classes.Icon} />
            <Typography variant="body1" className={classes.content2}>
              {data[0].content}
            </Typography>
            <Typography variant="h3" className={classes.detail}>
              {data[0].detail}
            </Typography>
          </Grid>
          <Grid item sm={5} xs={12} className={classes.box}>
            <WhatsAppIcon className={classes.Icon} />
            <Typography variant="body1" className={classes.content2}>
              {data[0].content}
            </Typography>
            <Typography variant="h3" className={classes.detail}>
              {data[0].detail}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.map}>
        <iframe
          id="iframeid"
          width="80%"
          height="300"
          className={classes.iframe}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Muthialpet,%20Pondicherry+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      <FooterContact />
    </div>
  );
}

export default Contact;
