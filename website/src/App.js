import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import CustomNavbar from './components/Navbar/Navbar';
import './sass/custom.css';
import './index.css';



function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
