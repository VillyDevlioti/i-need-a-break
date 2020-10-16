import React, { Component } from "react";
import TextScroll from 'react-textscroll'
import Row from 'react-bootstrap/Row';
import { Player, PosterImage } from 'video-react';
import "./VideoHolder.css";

class VideoHolder extends Component {
    render () {
        let videoChoice = this.props.videoChoice;
        return (
            <Row className="header-row header-text">
                <Player playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Row>
        );
    }
}

export default VideoHolder;