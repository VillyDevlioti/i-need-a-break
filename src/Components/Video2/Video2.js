import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import ShuffleButton2 from './ShuffleButton/ShuffleButton2.js'

class Video2 extends Component {

render () {
    return (
        <Row className="video2">
            <ShuffleButton2 />
            <video controls loop preload>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </video>
           
        </Row>
    );
    }
}
export default Video2;