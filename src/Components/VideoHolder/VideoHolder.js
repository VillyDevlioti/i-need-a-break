import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import { Player } from 'video-react';
import "./VideoHolder.css";
import Tooltips from './Tooltips/Tooltips.js'

class VideoHolder extends Component {

    render () {
        //let videoChoice = this.props.videoChoice;  
        return (
        <div>
            <Row className="header-row header-text">
                <Tooltips />
                <Player playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />  
            </Row>
        </div>
        );
    }
}

export default VideoHolder;