import React, { useState } from "react";
import { useSprings, animated, config } from "react-spring";

const Header:React.FC<{switchMenuVisible: any}> = ({switchMenuVisible}) => {
  const msg = "サイト名"
  const [springs, set] = useSprings(msg.length, (idx) => ({
    config: config.wobbly,
    fontSize: "24pt",
    color: "silver"
  }));

  return(
    <header>
      <h1 className="site-title">
        {springs.map((item, idx) => (
          <animated.span
            key={"msg" + idx.toString()}
            className="cursor-crosshair"
            onMouseEnter={e => set(i => (i === idx ? { fontSize: "32pt", color: "black" } : {}))}
            onMouseLeave={e => set(i => (i === idx ? { fontSize: "24pt", color: "silver" } : {}))}
            style={{ corsor: "none", verticalAlign: "top",  ...item }} >
            {msg[idx]}
          </animated.span>
        ))}
      </h1>
      <button onClick={switchMenuVisible}>
        add
      </button>
    </header>
  )
}

export default Header;