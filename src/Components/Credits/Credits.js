import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Credits.css";


const Credits = () => 
    <Row className="credits-row">
        <Col> 
            <span className="small-credit">Ideas and Words by</span><br /> 
            <span className="bigger-credit">Jennifer Page</span>
        </Col>
        <Col> 
            <span className="small-credit">Design by</span><br /> 
            <span className="bigger-credit">Phuong Nguyen</span>
        </Col>
        <Col> 
            <span className="small-credit">Development by</span><br /> 
            <span className="bigger-credit">Villy Devlioti</span>
        </Col>
    </Row>

export default Credits;


