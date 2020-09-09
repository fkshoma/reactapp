import React from "react";
import { useSprings, animated, config } from "react-spring";

const Header:React.FC<{switchMenuVisible: any, menuVisible: any}> = ({switchMenuVisible, menuVisible}) => {
  const msg = "サイト名"
  const msg2 = "sample test"
  const [springs, set] = useSprings(msg.length, (idx) => ({
    config: config.wobbly,
    fontSize: "24pt",
    color: "silver"
  }));
  const [subSprings, setSub] = useSprings(msg2.length, (idx) => ({
    config: config.wobbly,
    fontSize: "24pt",
    color: "white",
    margin: "5px",
    lineHeight: "15px"
  }));

  return(
    <header>
      <h1 className="site-title">
        {springs.map((item, idx) => (
          <animated.span
            key={"msg" + idx.toString()}
            className="cursor-crosshair"
            onMouseEnter={e => set(i => (i === idx ? { fontSize: "32pt", color: "white" } : {}))}
            onMouseLeave={e => set(i => (i === idx ? { fontSize: "24pt", color: "silver" } : {}))}
            style={{ corsor: "none", verticalAlign: "top",  ...item }} >
            {msg[idx]}
          </animated.span>
        ))}
      </h1>
      <h2>
        {subSprings.map((item, idx) => (
          <animated.span
            key={"msg2" + idx.toString()}
            className="cursor-crosshair"
            onMouseEnter={e => setSub(i => (i === idx ? { fontSize: "32pt", margin: "30px", lineHeight: "60px" } : {}))}
            onMouseLeave={e => setSub(i => (i === idx ? { fontSize: "24pt", margin: "5px", lineHeight: "15px" } : {}))}
            style={{ corsor: "none", verticalAlign: "top",  ...item }} >
            {msg2[idx]}
          </animated.span>
        ))}
      </h2>
      <button onClick={switchMenuVisible} className="menu-btn">
        {menuVisible? "close" : "open"}
      </button>
    </header>
  )
}

export default Header;