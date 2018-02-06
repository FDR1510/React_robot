import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      goodOutput: "",
      badOutput: ""
    }

  }

  goodRobot(e){
    this.setState({goodOutput: e.target.value})
  }

  badRobot(e){

    var insert = ""
    var pattern = "bla"

    var inputLength = e.target.value.length
    var mod = inputLength % 3
    var number = Math.floor(inputLength/3)

    for(let i=0; i<number; i++) {
      insert += pattern;
    }



    // var i=0
    // for (i; i<e.target.value.length; i++) {

      // insert.push("BLA");
      // var bla = insert.join("-");
      // this.setState({badOutput: insert})
    // console.log(insert);
    // }
    // var outPut = this.state.badOutput.join("")
    this.setState({badOutput: (mod === 0) ? insert : insert+pattern.substring(0,mod)})
    // var bla = insert.join("-")
    // console.log(this.state.badOutput.join(""));

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Robo Active Listening</h1>
        <input type="text" onChange={this.goodRobot.bind(this)} />
        <h2>Good Robot!</h2>
        <div>I hear you saying {this.state.goodOutput}. Is that correct?</div>
        <input type="text" onChange={this.badRobot.bind(this)} />
        <h2>Bad Robot!</h2>
        <div>I hear you saying {this.state.badOutput}. Is that correct?</div>

        </div>

      );
    }
  }


  export default App;
