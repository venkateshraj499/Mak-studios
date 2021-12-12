/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import FooterContact from "../Common/FooterContact";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  gridContainer: {
    marginTop: "100px",
  },
  review: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("800")]: {
      width: "70%",
    },
  },
}));
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
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
  const [loading, setLoading] = useState(true);
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
      name: "Venkatesh",
      content:
        "Love Mak Photography! The team did an AMAZING job on our Birthday party’s photos/video. They were communicative, easy to work with, creative, informative and helpful with many aspects. Their timeliness of getting our photos/videos to us was amazing! We are so lucky to have these memories captured for a lifetime. ",
    },
    {
      name: "Aravindhan",
      content:
        "Mak and Team photographed our House warming and they were exceptional. We had a large function and the team was so calm and kind and kept us on track with all our photos. Our pictures are incredible! We couldn't be happier. It was a pleasure working with you and we look forward to working with you in the future! Thank you!",
    },
    {
      name: "Ravi",
      content:
        "On our re-union day we had Mak and team to capture our moments. They were absolutely wonderful and their photos turned out stunning, truly capturing everything and more of our special meet.",
    },
  ];
  return (
    <div className={classes.container}>
      <Carousel responsive={responsive}>
        {review.map((item) => (
          <div className={classes.review}>
            <div>{item.name}</div>
            <div>{item.content}</div>
          </div>
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
