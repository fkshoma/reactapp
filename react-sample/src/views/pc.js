import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './pc/header';
import Content from './pc/content';
import Footer from './pc/footer';
import Nav from './pc/nav';
import './pc.css';

const Pc:React.FunctionComponent<{switchMenuVisible: any, menuVisible: any}> = ({switchMenuVisible, menuVisible}) => {
  return (
    <div className="App">
      <Router>
        <Header switchMenuVisible={switchMenuVisible()} menuVisible={menuVisible}/>
        <div className="justify-start-parent">
          <Nav switchMenuVisible={switchMenuVisible()} menuVisible={menuVisible}/>
          <Content menuVisible={menuVisible}/>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default Pc;