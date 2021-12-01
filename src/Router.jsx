import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    overflowY: "hidden",
    backgroundImage: "url(/background.jpg)",
    height: "100vh",
  },
}));

function Router() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
