/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import Grid from "@material-ui/core/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 50px 100px 50px",

    [theme.breakpoints.down("954")]: {
      padding: "0px",
    },
  },
  gridContainer: {
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  heading: {
    textAlign: "center",
    maxWidth: "1000px",
    color: "#3c4e73 !important",
    margin: "0 auto",
    fontSize: "50px",
  },
  subHeading: {
    textAlign: "center",
    maxWidth: "1000px",
    color: "grey",
    margin: "0 auto",
    marginTop: "30px",
    marginBottom: "50px",
    fontSize: "25px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    minHeight: "400px",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "20px 0px",
    height: "810px",
    cursor: "pointer",
  },
  desc: {
    maxWidth: "80%",
    paddingLeft: "30px",
    color: "grey",
    textAlign: "left",
  },
  duration: {
    textAlign: "left",
    paddingLeft: "30px",
  },
  button: {
    width: "90%",

    margin: " 0 auto",
    marginBottom: "10px",
  },
  sub: {
    paddingLeft: "30px",
  },
  title: {
    paddingLeft: "30px",
    [theme.breakpoints.down("1000")]: {
      paddingLeft: "30px",
      textAlign: "left",
    },
  },
  title2: {
    paddingLeft: "30px",
    textDecoration: "underline",
    [theme.breakpoints.down("1000")]: {
      paddingLeft: "30px",
      textAlign: "left",
    },
  },
  optionContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "30px",
    [theme.breakpoints.between("600", "1000")]: {
      marginLeft: "50%",
      transform: "translateX(-50%)",
    },
  },
  circleIcon: {
    color: "green",
  },
  cancelIcon: {
    color: "red",
  },
  borderDiv: {
    width: "90%",
    margin: "0 auto",
    padding: "6px",
    borderRadius: "24px",
    background: "linear-gradient(to bottom right, #77DEE1, #C7F2F1)",
    boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.50)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("1000")]: {
      boxShadow: "none",
    },
  },
  carousel: {
    display: "none",
    [theme.breakpoints.down("1000")]: {
      display: "inline-block",
      width: "100%",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const data = [
    {
      title: "SILVER",
      price: "Rs: 1000",
      duration: "2 hours",
      description:
        "Our photographer will spend 2 hours with you to capture your unlimited clicks",
      option: [
        { source: "Unlimited pictures", value: true },
        { source: "One day delivery", value: true },
        { source: "6D camera", value: true },
        { source: "Retouch in photos", value: false },
        { source: "Drone shots", value: false },
        { source: "Videography", value: false },
      ],
    },
    {
      title: "GOLD",
      price: "Rs: 2000",
      duration: "4 hours",
      description:
        "Our photographer will spend 4 hours with you to capture your unlimited clicks included with drone shots",
      option: [
        { source: "Unlimited pictures", value: true },
        { source: "One day delivery", value: true },
        { source: "6D camera", value: true },
        { source: "Retouch in photos", value: true },
        { source: "Drone shots", value: false },
        { source: "Videography", value: false },
      ],
    },
    {
      title: "PLATINUM",
      price: "Rs: 5000",
      duration: "6 hours",
      description:
        "Our photographer will spend 6 hours with you to capture your unlimited clicks with drone shots with videography",
      option: [
        { source: "Unlimited pictures", value: true },
        { source: "One day delivery", value: true },
        { source: "6D camera", value: true },
        { source: "Retouch in photos", value: true },
        { source: "Drone shots", value: true },
        { source: "Videography", value: true },
      ],
    },
  ];
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Ready to start with our service?</h1>
      <p className={classes.subHeading}>Explore into our new packages</p>
      <Carousel
        className={classes.carousel}
        swipeable={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
      >
        {data.map((item) => (
          <div className={classes.borderDiv}>
            <div className={classes.box}>
              <h1 className={classes.title}>{item.title}</h1>
              <p className={classes.desc}>{item.description}</p>
              <h2 className={classes.duration}>
                {item.price} for {item.duration}
              </h2>
              <Button
                className={classes.button}
                color="primary"
                variant="contained"
                size="large"
              >
                BOOK NOW
              </Button>
              <h3 className={classes.title2}>Included with: </h3>

              {item.option.map((sub) => (
                <div className={classes.optionContainer}>
                  {sub.value ? (
                    <CheckCircleIcon className={classes.circleIcon} />
                  ) : (
                    <CancelIcon className={classes.cancelIcon} />
                  )}

                  <h4 className={classes.sub}>{sub.source}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <Grid container spacing={0} className={classes.gridContainer}>
        {data.map((item) => (
          <Grid item sm={12} md={4} xs={12}>
            <div className={classes.borderDiv}>
              <div className={classes.box}>
                <h1 className={classes.title}>{item.title}</h1>
                <p className={classes.desc}>{item.description}</p>
                <h2 className={classes.duration}>
                  {item.price} for {item.duration}
                </h2>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  BOOK NOW
                </Button>
                <h3 className={classes.title2}>Included with: </h3>

                {item.option.map((sub) => (
                  <div className={classes.optionContainer}>
                    {sub.value ? (
                      <CheckCircleIcon className={classes.circleIcon} />
                    ) : (
                      <CancelIcon className={classes.cancelIcon} />
                    )}

                    <h4 className={classes.sub}>{sub.source}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <FooterContact />
    </div>
  );
}

export default Contact;
