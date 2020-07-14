import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

import Home from "./pages/Homepage.js"
import Portfolio from "./pages/Portfolio.js"

import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>        
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/home"></Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/aboutme"></Route>
            <Route exact path="/contact"></Route>
          </Switch> 
        </BrowserRouter>   
      <Footer />
    </div>
  );
}

export default App;
