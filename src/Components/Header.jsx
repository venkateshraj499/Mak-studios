import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "-20px",
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    display: "flex",
    width: "80%",
    color: "black",
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
    fontSize: "25px",
    cursor: "pointer",
    padding: "5px",
    marginBottom: "15px",
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundColor: "#3c4e73",
      backgroundImage: "#3c4e73",
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
      opacity: "0.8",
    },
  },
  logo: {
    width: "130px",
    height: "130px",
    filter: "brightness(100%)",
    margin: "10px 0",
    cursor: "pointer",
  },
  icon: {
    display: "none",
    [theme.breakpoints.down("764")]: {
      display: "block",
      marginRight: "15px",
      marginTop: "35px",
      color: "black",
      fontSize: "40px",
    },
  },
  popover: {
    [theme.breakpoints.up("764")]: {
      display: "none",
    },
    [theme.breakpoints.down("764")]: {
      display: "block",
      position: "absolute",
      marginTop: "60px",
      minWidth: "500px",
    },
    [theme.breakpoints.between("600", "764")]: {
      marginLeft: "62%",
    },
    [theme.breakpoints.between("450", "600")]: {
      marginLeft: "50%",
    },
    [theme.breakpoints.down("450")]: {
      marginLeft: "30%",
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
    cursor: "pointer",
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundColor: "rgba(24,114,166,255)",
      backgroundImage: "rgba(24,114,166,255)",
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
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  const handleNavigate = (slug) => {
    navigate(slug);

    setAnchorEl(null);
  };

  const headerData = [
    {
      title: "HOME",
      slug: "/ ",
    },
    {
      title: "GALLARY",
      slug: "/gallary",
    },
    {
      title: "PRICING",
      slug: "/pricing",
    },
    {
      title: "CONTACT US",
      slug: "/contact",
    },
    {
      title: "ABOUT US",
      slug: "/about",
    },
  ];

  return (
    <div className={classes.container}>
      <img
        src="/Mak.png"
        alt=""
        className={classes.logo}
        onClick={() => {
          handleNavigate("/");
        }}
      />
      {open ? (
        <ClearIcon
          className={classes.icon}
          onClick={(event) => {
            handleClick(event);
          }}
        />
      ) : (
        <MenuIcon
          className={classes.icon}
          onClick={(event) => {
            handleClick(event);
          }}
        />
      )}
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
            {headerData.map((item) => (
              <li
                className={classes.popperLi}
                onClick={() => {
                  handleNavigate(item.slug);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </Popover>
      <ul className={classes.list}>
        {headerData.map((item) => (
          <li
            className={classes.listItem}
            onClick={() => {
              handleNavigate(item.slug);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
