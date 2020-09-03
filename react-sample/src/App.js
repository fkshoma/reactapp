import React, { useState } from "react";
import { useMediaPredicate } from "react-media-hook";
import Pc from './views/pc';
//import Sp from './views/sp';

function App() {
  const [menuVisible, setMenuVisible] = useState(false)
  function switchMenuVisible() {
    setMenuVisible(!menuVisible)
  }
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");

  return (
    <div>
      {biggerThan768 && <Pc switchMenuVisible={() => switchMenuVisible} menuVisible={menuVisible}/>}
    </div>
  );
}

export default App;