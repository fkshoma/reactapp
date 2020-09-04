import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './pc/screens/about';
import Home from './pc/screens/home';
import Work from './pc/screens/work';
import Contact from './pc/screens/contact';

import Header from './pc/header';
import Content from './pc/content';
import Footer from './pc/footer';
import Nav from './pc/nav';
import './pc.css';

const Pc:React.FunctionComponent<{switchMenuVisible: any, menuVisible: any}> = ({switchMenuVisible, menuVisible}) => {
  return (
    <div className="App">
      <Router>
        <Header switchMenuVisible={switchMenuVisible()} />
        State: {`${menuVisible}`}
        <br />
        <div className="justify-start-parent">
          <Nav switchMenuVisible={switchMenuVisible()} menuVisible={menuVisible}/>
          <div className="margin-0-auto">
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/work' component={Work}/>
            <Route path='/contact' component={Contact}/>
          </div>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default Pc;