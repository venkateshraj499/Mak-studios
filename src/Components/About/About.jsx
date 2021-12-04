/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import Grid from "@material-ui/core/Grid";
import Img1 from "./1.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 100px 100px 100px",
    [theme.breakpoints.between("600", "954")]: {
      padding: "0px 50px 50px 50px",
    },
    [theme.breakpoints.down("600")]: {
      padding: "0px 0px 20px 0px",
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  para: {
    paddingRight: "50px",
    color: "grey",
    [theme.breakpoints.down("600")]: {
      paddingLeft: "20px",
    },
  },
  title: {
    [theme.breakpoints.down("600")]: {
      paddingLeft: "20px",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const data = [
    {
      title: "ABOUT",
      content:
        "Click here to add or edit your text. You can also add bold or italic font treatments, bulleted lists or text links by highlighting the text you would like to change and clicking the appropriate selection in the pop-up.",
    },
    {
      title: "CLIENTS",
      content:
        "Click here to add or edit your text. You can also add bold or italic font treatments, bulleted lists or text links by highlighting the text you would like to change and clicking the appropriate selection in the pop-up.",
    },
    {
      title: "EXPERIENCE",
      content:
        "Click here to add or edit your text. You can also add bold or italic font treatments, bulleted lists or text links by highlighting the text you would like to change and clicking the appropriate selection in the pop-up.",
    },
  ];
  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={6}>
          <img src={Img1} alt="no-img" className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <img src={Img1} alt="no-img" className={classes.image} />
        </Grid>
        {data.map((item) => (
          <Grid item md={4} sm={6} sx={12}>
            <div>
              <h3 className={classes.title}>{item.title}</h3>
              <p className={classes.para}>{item.content}</p>
            </div>
          </Grid>
        ))}
      </Grid>

      <FooterContact />
    </div>
  );
}

export default Contact;
