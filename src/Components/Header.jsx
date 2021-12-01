import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "-20px",
    display: "flex",
    justifyContent: "space-between",
  },
  t: {
    display: "flex",
    width: "80%",
    color: "white",
    listStyle: "none",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  listItem: {
    position: "relative",
    fontWeight: "600",
    fontSize: "18px",
    cursor: "pointer",
    padding: "5px",
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundColor: "#ff4e00",
      backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
      height: "3px",
      width: "0",
      left: "0",
      bottom: "0",
      transition: "0.25s",
    },
    "&:hover:after": {
      width: "100%",
    },
    "&:hover": {
      opacity: "0.7",
    },
  },
  logo: {
    width: "130px",
    height: "130px",
    filter: "brightness(200%)",
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.black} />
      <img src="/Mak.png" alt="" className={classes.logo} />
      <ul className={classes.list}>
        <li className={classes.listItem}>HOME</li>
        <li className={classes.listItem}>GALLARY</li>
        <li className={classes.listItem}>PRICING</li>
        <li className={classes.listItem}>ABOUT US</li>
        <li className={classes.listItem}>CONTACT US</li>
      </ul>
    </div>
  );
}

export default Header;
