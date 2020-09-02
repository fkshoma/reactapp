import React from "react";
import Header from './views/header';
import Content from './views/content';
import Footer from './views/footer';

class App extends React.Component {
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
        <Header clickHandler={this.menuEvent} />
        State: {`${this.state.menuVisible}`}
        <br />
        OtherState: {`${this.state.otherVisible}`}
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;