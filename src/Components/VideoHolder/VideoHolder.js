import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import { Player, ControlBar } from 'video-react';
import "./VideoHolder.css";
import MainHeadline from "./MainHeadline/MainHeadline";
import Tooltips from './Tooltips/Tooltips.js'

class VideoHolder extends Component {

    render () {
        //let videoChoice = this.props.videoChoice;  
        return (
            <Row className="video-row video-text">
                <Tooltips />
                <MainHeadline />
                <Player playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <ControlBar disableCompletely={true} className="my-class" />
                </Player>
            </Row>
        );
    }
}

export default VideoHolder;