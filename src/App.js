import React from 'react';
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home.js';
import HowItWorks from './HowItWorks/Home.js';

function App() {
  return (
    <Router>
      <Switch>
          <div className="App">
            <ScrollToTop>                
                <Route exact path="/"  component={Home} />
                <Route path="/how-it-works"  component={HowItWorks} />
            </ScrollToTop>
          </div>
      </Switch>
    </Router>
    
  );
}

export default App;
