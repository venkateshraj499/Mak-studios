/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 150px",
    [theme.breakpoints.down("800")]: {
      padding: "0",
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
    transition: "transform 0.2s",
    minHeight: "200px",
    filter: "brightness(80%)",
    "&:hover": {
      filter: "brightness(60%)",
      transform: "scale(1.3)",
    },
  },
  gridWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    margin: "25px",
    [theme.breakpoints.down("800")]: {
      width: "90%",
    },
  },
  heading: {
    fontSize: "30px !important",
    color: "white",
    fontWeight: "510",
    margin: "-40% 0 30% 0",
    transform: "translateY(50%)",
    [theme.breakpoints.down("800")]: {
      fontSize: "24px !important",
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={0}>
        <Grid item md={6} className={classes.gridWrapper}>
          <div className={classes.wrapper}>
            <img src="/8.jpg" alt="no-img" className={classes.image} />
            <Typography variant="h5" className={classes.heading}>
              BABY SHOOTS
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.gridWrapper}>
          <div className={classes.wrapper}>
            <img src="/8.jpg" alt="no-img" className={classes.image} />
            <Typography variant="h5" className={classes.heading}>
              PORTFOLIOS
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.gridWrapper}>
          <div className={classes.wrapper}>
            <img src="/8.jpg" alt="no-img" className={classes.image} />
            <Typography variant="h5" className={classes.heading}>
              OUTDOOR SHOOTS
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.gridWrapper}>
          <div className={classes.wrapper}>
            <img src="/8.jpg" alt="no-img" className={classes.image} />
            <Typography variant="h5" className={classes.heading}>
              MISCELANEOUS
            </Typography>
          </div>
        </Grid>
      </Grid>
      <FooterContact />
    </div>
  );
}

export default Contact;
