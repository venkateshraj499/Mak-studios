/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { makeStyles } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import QuoteIcon from "@mui/icons-material/FormatQuote";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 100px 100px 100px",
    maxWidth: "1440px",
    margin: "0 auto",
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
  clientTitle: {
    color: "#3c4e73 ",
    textAlign: "center",
    [theme.breakpoints.down("800")]: {
      fontSize: "24px",
    },
  },
  title: {
    color: "#3c4e73 ",
    [theme.breakpoints.down("600")]: {
      paddingLeft: "20px",
    },
  },
  gridContainer: {
    marginTop: "50px",
    [theme.breakpoints.down("800")]: {
      marginTop: "0px",
    },
  },
  review: {
    width: "75%",
    margin: "0 auto",
    marginBottom: "80px",
    marginTop: "-50px",
    padding: "25px",
    paddingTop: "50px",
    backgroundColor: "lightblue",
    borderRadius: "24px",
    [theme.breakpoints.down("800")]: {
      width: "85%",
      padding: "16px",
      marginBottom: "25px",
    },
  },
  reviewContent: {
    fontSize: "20px",
    fontStyle: "italic",
    marginTop: "20px",
    [theme.breakpoints.down("800")]: {
      fontSize: "16px",
    },
  },
  reviewName: {
    fontSize: "23px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    fontStyle: "italic",
    marginTop: "10px",
    [theme.breakpoints.down("800")]: {
      fontSize: "20px",
    },
  },
  icon: {
    fontSize: "125px !important",
    marginLeft: "150px",
    marginBottom: "-20px",
    color: "lightcoral",
    [theme.breakpoints.down("1000")]: {
      marginLeft: "10px",
    },
  },
  customer: {
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    border: "5px solid white",
    margin: "20px",
  },
}));
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
  },
};

function Contact() {
  const classes = useStyles();
  const data = [
    {
      title: "ABOUT",
      content:
        "We, Mak Pitcures specialize in family, corporate and special events, at your destination to capture the perfect moment in the perfect place. From the shores here in Rock Beach to the beaches of Serinity in Auroville and beyond. We will be there with you every step of the way to guarantee your special moments are captured for all time.We are incredibly blessed to have a team of photographers who work with us on any given weekend.",
    },
    {
      title: "WHAT DO WE DO?",
      content:
        "To us photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.A team who is highly inspired by cinema and movies, we always want to capture the moments in a grand way as it is meant to be, cinematic, poetic, and BEAUTIFUL. ",
    },
  ];
  const review = [
    {
      name: "Divya, Pondicherry",
      content:
        "Love Mak Photography! The team did an AMAZING job on our Birthday party’s photos/video. They were communicative, easy to work with, creative, informative and helpful with many aspects. Their timeliness of getting our photos/videos to us was amazing! We are so lucky to have these memories captured for a lifetime. ",
    },
    {
      name: "Varunesh, Pondicherry",
      content:
        "Mak and Team photographed our House warming and they were exceptional. We had a large function and the team was so calm and kind and kept us on track with all our photos. Our pictures are incredible! We couldn't be happier. It was a pleasure working with you and we look forward to working with you in the future! Thank you!",
    },
    {
      name: "Sumitha, Pondicherry",
      content:
        "On our re-union day we had Mak and team to capture our moments. They were absolutely wonderful and their photos turned out stunning, truly capturing everything and more of our special meet.",
    },
  ];
  return (
    <div className={classes.container}>
      <h1 className={classes.clientTitle}>OUR CLIENT'S TESTIMONY</h1>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        autoPlay={true}
      >
        {review.map((item) => (
          <>
            <QuoteIcon className={classes.icon} />
            <div className={classes.review}>
              <div className={classes.reviewContent}>"{item.content}"</div>
              <div className={classes.reviewName}>
                <img
                  src="/customer1.jpg"
                  className={classes.customer}
                  alt="no"
                />
                - {item.name}
              </div>
            </div>
          </>
        ))}
      </Carousel>
      <Grid container spacing={0} className={classes.gridContainer}>
        {data.map((item) => (
          <Grid item md={6} sm={6} sx={12}>
            <div className={classes.wrapper}>
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
