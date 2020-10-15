import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./Components/Header/Header";
import Wrapper from "./Components/Wrapper/Wrapper";
import MainCopy from "./Components/MainCopy/MainCopy";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const stream = 5;
    return (
      <div className="App">
        <Wrapper>
          <Header />
          <MainCopy />
          </Wrapper>
      </div>
    )
  }
}

export default App;
