import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    console.log("App - Constructor called");
    this.state = {
      times: 0,
      message: "",
      style: {color: "black"},
    }
  }
  
  componentDidMount(){
    console.log("App - ComponentDidMount called");
  }
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("App - componentDidUpdate called");
    const { message } = prevState;
    const { times } = this.state;
    console.log("prevState ", {...prevState});
    console.log("currentState", {...this.state});
    console.log("prevProps", {...prevProps});
    if(times > 9 && message === "")
      this.setState({ message: "Don't click me anymore!"});
  }

  incrementalClick = () => {
    const { times } = this.state;
    this.setState({ times: times + 1})
  }
  changeColor = () => {
    this.setState({ style: {color: "blue"} });
  }

  header = () => {
    const { style } = this.state;
    return <Header color={`green`}/>;
  }

  render(){
    const { times, message } = this.state;
    return (
      <>
       {this.header()}
        <div> 
          You have click me {times} times <br />
          {message}
        </div>
        <Button color="primary" onClick={this.incrementalClick} size="sm" >Click me</Button>
      </>
    )
  }
}

export default App;
