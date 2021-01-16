import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      style: { 
        color: props.color || "black",
      }
    }
  }

  changeColor = () => {
    this.setState({ style: { color: "blue"} });
  }

  render() {
    const { style } = this.state;
    return (
      <header> 
        <h1 style={style} onClick={this.changeColor}> Welcome to our fantastic React Page</h1>
      </header>
    );
  }
}

export default Header;