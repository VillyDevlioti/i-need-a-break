import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./Components/Wrapper/Wrapper";
import Header from "./Components/Header/Header";
import VideoHolder from "./Components/VideoHolder/VideoHolder";
import MainCopy from "./Components/MainCopy/MainCopy";
import Credits from "./Components/Credits/Credits";
import Artists from "./Components/Artists/Artists";
import Footer from "./Components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoChoice : 0
    };
    //this.callTwitterApi = this.callTwitterApi.bind(this);
  }

  render() {
    const stream = 5;
    return (
      <div className="App">
        <Wrapper>
            <Header />
            <VideoHolder />
            <MainCopy />
            <Credits />
            <Artists />
            <Footer />
          </Wrapper>
      </div>
    )
  }
}

export default App;
