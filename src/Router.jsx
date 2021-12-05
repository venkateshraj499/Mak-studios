import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Pricing from "./Components/Pricing/Pricing";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "url(/background.jpg)",
    height: "100vh",
    marginTop: "0px",
    backgroundSize: "100% 100vh",
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
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
