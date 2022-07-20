import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";


import ScrollToTop from "./ScrollToTop";
import Header from "./header"
import Footer from "./footer"
import Home from "./home"
import About from "./about"
import Player from "./player"
import Coach from "./coach"
import Contact from "./contact"
import Scroll from "./scroll"
import Admission from "./admission"
import Thankyou from './Thankyou';
import AboutMore from './AboutMore';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/player"><Player/></Route>
            <Route exact path="/coach"><Coach/></Route>
            <Route exact path="/admission"><Admission/></Route>
            <Route exact path="/contact"><Contact/></Route>
            <Route exact path="/thankyou"><Thankyou/></Route>
            <Route exact path="/aboutmore"><AboutMore/></Route>
          </Switch>
          <Scroll/>
        <Footer/>
      </Router> 
    </> 
  );
}

export default App;
