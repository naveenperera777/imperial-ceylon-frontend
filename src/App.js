import React from 'react';
import { HashRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';
import './App.css';
import Home from './Home/Home.js';
import HowItWorks from './HowItWorks/Home.js';
import Services from './Services/Home.js';
import Footer from './Home/Footer.js';
import Header from './Home/Nav.js';
import Cars from './Cars/Home.js';
import SingleCar from './Cars/Car.js';

function App() {
  return (
    <Router>
      <Switch>
          <div className="App">
            <Header />
            <ScrollToTop>                
                <Route exact path="/"  component={Home} />
                <Route path="/how-it-works"  component={HowItWorks} />
                <Route path="/services"  component={Services} />
                <Route exact path="/cars"  component={Cars} />
                <Route path="/cars/ferrari"  component={SingleCar} />

            </ScrollToTop>
            {/* <Footer /> */}
          </div>
      </Switch>
    </Router>
    
  );
}

export default App;
