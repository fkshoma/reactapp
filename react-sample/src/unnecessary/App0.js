import React, { useState } from "react";
import { useSpring } from "react-spring";
import { MenuRight, MenuFull } from "./menu";
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import Work from './work';
import Contact from './contact';



function App0() {
  const [rightMenuVisible, setRightMenuVisible] = useState(false);
  const [fullMenuVisible, setFullMenuVisible] = useState(false);

  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  });
  const fullMenuAnimation = useSpring({
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
  });

  return (
    <div className="App">
      <Router>
        <button
          className="menu-button"
          onClick={() => setRightMenuVisible(!rightMenuVisible)}
        >
          {rightMenuVisible ? "Close" : "Side Menu"}
        </button>
        <button
          className="menu-button menu-button--full"
          onClick={() => setFullMenuVisible(!fullMenuVisible)}
        >
          {fullMenuVisible ? "Close" : "Full Menu"}
        </button>

        <MenuRight style={rightMenuAnimation} />
        <MenuFull style={fullMenuAnimation} />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/work' component={Work}/>
        <Route path='/contact' component={Contact}/>
      </Router>
    </div>
  );
}

export default App0;