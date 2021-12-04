import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Modal from "react-modal";
import ClearIcon from "@material-ui/icons/Clear";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PulseLoader from "react-spinners/PulseLoader";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0px 100px 100px 100px",
    [theme.breakpoints.between("600", "954")]: {
      padding: "0px 50px 50px 50px",
    },
    [theme.breakpoints.down("600")]: {
      padding: "0px 20px 20px 20px",
    },
  },
  image: {
    overflow: "hidden",
  },
  imageItem: {
    objectFit: "contain",
    cursor: "pointer",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  gridRow: {
    marginTop: "-3.5px",
  },
  gridContainer: {
    boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.50)",
  },
  modalImage: {
    width: "60%",
    objectFit: "contain",
  },
  icon: {
    color: "black",
    fontSize: "40px",
    cursor: "pointer",
    marginRight: "80px",
    [theme.breakpoints.down("600")]: {
      fontSize: "30px",
      marginRight: "30px",
    },
    [theme.breakpoints.between("600", "1000")]: {
      marginRight: "40px",
    },
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("600")]: {
      marginLeft: "-50px",
      marginTop: "110px",
    },
    [theme.breakpoints.between("600", "1000")]: {
      marginTop: "100px",
    },
  },
  imageWrapper: {},
  carousel: {
    width: "80% !important",
    margin: "0 auto",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  loaderNone: {
    display: "none",
  },
}));
const customStyles = {
  content: {
    width: "80%",
    background: "transparent",
    border: "none",
    height: "fit-content",
    margin: "0 auto",
    marginTop: "-40px",
    marginBottom: "100px",
    display: "flex",
    justifyContent: "center",
  },
};
const imageCollection = [
  "/1.jpg",
  "/6.jpg",
  "/8.jpg",
  "/4.jpg",
  "/1.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/4.jpg",
];

function Home() {
  const classes = useStyles();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const setOpen = (value, image) => {
    setIsOpen(value);
    setSelectedImage(image);
  };
  const color = "#2596be";
  return (
    <div className={classes.container}>
      <div className={loading ? classes.loader : classes.loaderNone}>
        <PulseLoader loading={loading} color={color} />
      </div>
      <Grid
        className={loading ? classes.loaderNone : classes.gridContainer}
        container
        spacing={0}
      >
        {imageCollection.map((image, index) => (
          <Grid item md={4} sm={6} xs={12} className={classes.gridRow}>
            <div className={classes.image}>
              <img
                src={image}
                alt="No-Img"
                width="100%"
                className={classes.imageItem}
                onClick={() => {
                  setOpen(true, image);
                  setLoading(true);
                }}
                onLoad={() => {
                  setCount((prevState) => prevState + 1);
                  if (count === 8) {
                    setTimeout(() => {
                      setLoading(false);
                    }, 1000);
                  }
                }}
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div className={classes.modal}>
          <ClearIcon
            className={classes.icon}
            onClick={() => {
              setOpen(false);
            }}
          />
          <Carousel
            showThumbs={false}
            showStatus={false}
            className={classes.carousel}
            selectedItem={imageCollection.indexOf(selectedImage)}
          >
            {imageCollection.map((image, i) => {
              return (
                <div className={classes.imageWrapper}>
                  <img
                    src={image}
                    alt="No-Img"
                    width="100%"
                    className={classes.modalImage}
                    onLoad={() => {
                      setLoading(false);
                    }}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
