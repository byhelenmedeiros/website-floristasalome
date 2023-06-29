import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
 
      </Switch>
    </Router>
  );
};

export default Routes;
