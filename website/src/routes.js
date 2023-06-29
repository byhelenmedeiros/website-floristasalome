import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={Products} />
        <Route path="/Services" component={Services} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
