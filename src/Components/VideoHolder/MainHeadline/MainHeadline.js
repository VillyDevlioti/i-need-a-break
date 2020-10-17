import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import "./MainHeadline.css";

class MainHeadline extends Component {

    render () {
        //let videoChoice = this.props.videoChoice;  
        return (
            <Col>
                <p class="main-headline"><span class="i">I</span> NEED A BREAK</p>
            </Col>
        );
    }
}

export default MainHeadline;