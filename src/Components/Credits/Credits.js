import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Credits.css";


const Credits = () => 
    <Row className="credits-row">
        <Col lg={4}> 
            <span className="small-credit">Ideas and Words by</span><br /> 
            <span className="big-credit"><a href="https://jennpage.work" target="_blank" rel="noopener noreferrer">Jennifer Page</a></span>
        </Col>
        <Col lg={4}> 
            <span className="small-credit">Design by</span><br /> 
            <span className="big-credit"><a href="https://phuongnguyen.co/" target="_blank" rel="noopener noreferrer">Phuong Nguyen</a></span>
        </Col>
        <Col lg={4}> 
            <span className="small-credit">Development by</span><br /> 
            <span className="big-credit"><a href="https://www.villywho.com/" target="_blank" rel="noopener noreferrer">Villy Devlioti</a></span>
        </Col>
        <Col lg={4}> 
            <span className="small-credit"><br/>Music by</span><br /> 
            <span className="big-credit"><a href="https://instagram.com/saxstar" target="_blank" rel="noopener noreferrer">Ian Young</a></span>
        </Col>
    </Row>

export default Credits;


