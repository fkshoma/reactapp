import React from "react";
import Header from './sp/header';
import Content from './sp/content';
import Footer from './sp/footer';

class Sp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuVisible: false, otherVisible: false };
    this.menuEvent = this.menuEvent.bind(this);
    this.otherEvent = this.otherEvent.bind(this);
  }
  menuEvent(event) {
    this.setState({ menuVisible: !this.state.menuVisible });
  }
  otherEvent(event) {
    this.setState({ otherVisible: !this.state.otherVisible });
  }


  render() {
    return (
      <div className="App">
        <Header switchMenuVisible={this.menuEvent} />
        State: {`${this.state.menuVisible}`}
        <br />
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default Sp;