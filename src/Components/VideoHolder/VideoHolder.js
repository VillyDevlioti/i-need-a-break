import React, { Component } from "react";
import TextScroll from 'react-textscroll'
import Row from 'react-bootstrap/Row';
import "./VideoHolder.css";

class VideoHolder extends Component {
    render () {
        let videoChoice = this.props.videoChoice;
        let musicChoice = this.props.musicChoice;
        return (
                <Row className="header-row header-text">
                    <h1> I  NEED A BREAK</h1>
                </Row>
        )
    }
}

export default VideoHolder;