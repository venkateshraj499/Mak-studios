import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "black",
  },
}));

function Header() {
  const classes = useStyles();
  return <div className={classes.header}>Header</div>;
}

export default Header;
