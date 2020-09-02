import React from "react";
import { animated } from "react-spring";
import { Link } from 'react-router-dom'
import "./menu.css";

export const MenuRight = ({ style }) => (
  <animated.div className="menu menu--right" style={style}>
    <nav>
      <ul className="menu-list menu-list--right">
        <li className="menu-list-item menu-list-item--right">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <Link to="/work">Work</Link>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </animated.div>
);

export const MenuFull = ({ style }) => (
  <animated.div className="menu menu--full" style={style}>
    <nav>
      <ul className="menu-list menu-list--full">
        <li className="menu-list-item menu-list-item--full">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <Link to="/about">About</Link>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <Link to="/work">Work</Link>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </animated.div>
);
