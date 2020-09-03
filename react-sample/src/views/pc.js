import React from "react";
import Header from './pc/header';
import Content from './pc/content';
import Footer from './pc/footer';

const Pc:React.FunctionComponent<{switchMenuVisible: any}> = ({switchMenuVisible, menuVisible}) => {
  return (
    <div className="App">
      <Header clickHandler={switchMenuVisible()} />
      State: {`${menuVisible}`}
      <br />
      OtherState: {`${menuVisible}`}
      <Content/>
      <Footer/>
    </div>
  );
}

export default Pc;