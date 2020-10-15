import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./Components/Header/Header";
//import TwitterCard from "./Components/TwitterCard/TwitterCard";
import Wrapper from "./Components/Wrapper/Wrapper";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    const stream = 5;
    return (
      <div className="App">
        <Wrapper>
          <Header />
          </Wrapper>
      </div>
    )
  }
}

export default App;
