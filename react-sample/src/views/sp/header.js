import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <header>
        <p>Header</p>
        <button onClick={this.props.switchMenuVisible}>
          add
        </button>
      </header>
    )
  }
}

export default Header;