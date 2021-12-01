import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "-20px",
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    display: "flex",
    width: "80%",
    color: "white",
    listStyle: "none",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("764")]: {
      display: "none",
    },
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
  icon: {
    display: "none",
    [theme.breakpoints.down("764")]: {
      display: "block",
      marginRight: "15px",
      marginTop: "35px",
      color: "white",
      fontSize: "40px",
    },
  },
  popover: {
    [theme.breakpoints.up("764")]: {
      display: "none",
    },
  },
  popperList: {
    padding: "15px",
    marginRight: "0px",
  },
  popperLi: {
    position: "relative",
    fontSize: "20px",
    fontWeight: "600",
    listStyle: "none",
    margin: "25px",
    paddingBottom: "5px",
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
}));

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.container}>
      <img src="/Mak.png" alt="" className={classes.logo} />
      <MenuIcon
        className={classes.icon}
        onClick={(event) => {
          handleClick(event);
        }}
      />
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={open}
        className={classes.popover}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={classes.poppperContent}>
          <ul className={classes.popperList}>
            <li className={classes.popperLi}>HOME</li>
            <li className={classes.popperLi}>GALLARY</li>
            <li className={classes.popperLi}>PRICING</li>
            <li className={classes.popperLi}>ABOUT US</li>
            <li className={classes.popperLi}>CONTACT US</li>
          </ul>
        </div>
      </Popover>
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
