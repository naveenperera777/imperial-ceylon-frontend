import React from 'react';
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import './App.css';
import Home from './Home/Home.js';
import HowItWorks from './HowItWorks/Home.js';
import Services from './Services/Home.js';

function App() {
  return (
    <Router>
      <Switch>
          <div className="App">
            <ScrollToTop>                
                <Route exact path="/"  component={Home} />
                <Route path="/how-it-works"  component={HowItWorks} />
                <Route path="/services"  component={Services} />
            </ScrollToTop>
          </div>
      </Switch>
    </Router>
    
  );
}

export default App;
