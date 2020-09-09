import React, { useRef } from "react";
import useResizeAware from "react-resize-aware";
import {
  animated,
  useSpring,
  useTransition,
  useChain,
  config
} from "react-spring";
import { Link} from 'react-router-dom';

import { Sidenav } from "./style/sidenav";

const sidenavItems = ["Home", "About", "Work", "Contact"];

const Nav:React.FC<{switchMenuVisible: any, menuVisible: any}> = ({switchMenuVisible, menuVisible}) => {
  const resizeListener = useResizeAware()[0];
  const sidenavRef = useRef();
  const spring = useSpring({
    from: {
      transform: "translateX(-100%)",
      width: "0px",
    },
    transform: menuVisible ? "translateX(0)" : "translateX(-100%)",
    width: menuVisible ? "250px" : "0px",
    config: config.default,
    ref: sidenavRef
  });


  const itemsRef = useRef();
  const itemsAnimation = useTransition(menuVisible ? sidenavItems : [], item => item, {
    from: {
      opacity: 0,
      transform: "translateX(-250px)"
    },
    enter: {
      opacity: 1,
      transform: "translateX(0)"
    },
    leave: {
      opacity: 0,
      transform: "translateX(-250px)"
    },
    ref: itemsRef,
    config: config.stiff,
    trail: 150,
    unique: true
  });
  useChain(
    menuVisible ? [itemsRef, sidenavRef] : [sidenavRef, itemsRef],
    [menuVisible ? 0.25 : 0.45, 0]
  );

  return(
    <Sidenav
      style={{
        transform: spring.transform,
        width: spring.width
      }}
    >
      {resizeListener}
      <ul>
        {itemsAnimation.map(({ item, key, props }) => {
          let item_str = item;
          if(item === "Home") {
            item_str = "";
          }
          return (
            <animated.li key={key} style={props}>
              <Link to={"/" + item_str.toLowerCase()}>{item}</Link>
            </animated.li>
          );
        })}
      </ul>
    </Sidenav>
  )
}

export default Nav;
