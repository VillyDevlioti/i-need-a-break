import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Credits.css";


const Credits = () => 
    <Row className="credits-row">
        <Col lg={4}> 
            <span className="small-credit">Ideas and Words by</span><br /> 
            <span className="big-credit">Jennifer Page</span>
        </Col>
        <Col lg={4}> 
            <span className="small-credit">Design by</span><br /> 
            <span className="big-credit">Phuong Nguyen</span>
        </Col>
        <Col lg={4}> 
            <span className="small-credit">Development by</span><br /> 
            <span className="big-credit">Villy Devlioti</span>
        </Col>
    </Row>

export default Credits;


