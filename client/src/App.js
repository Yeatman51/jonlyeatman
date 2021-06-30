import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Wrapper from "./components/Wrapper.js";
import Home from './pages/Home.js';
import Developer from './pages/Developer.js';
import Designer from './pages/Designer.js';
import Photographer from './pages/Photographer.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App background-img">
      

      <Header/>

      <HashRouter>
      <Navbar/>
      <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/Developer" component={Developer} />
          <Route exact path="/Designer" component={Designer} />
          <Route exact path="/Photographer" component={Photographer} />
          <Route exact path="/About" component={About} />  
          <Route exact path="/Contact" component={Contact} />  
      </Wrapper>
      </HashRouter>

      <Footer/>
      

      
    </div>
  );
}

export default App;
