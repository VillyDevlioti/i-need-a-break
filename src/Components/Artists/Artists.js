import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Artists.css";


const Artists = () => 
    <Row className="credits-row">
        <Col md={3}> 
            <span className="smaller-credit">Presented works by</span>
            <p></p>
            <span className="bigger-credit">Name</span><br />
            <span className="bigger-credit">Name</span><br />
            <span className="bigger-credit">Name</span><br />
            <span className="bigger-credit">Name</span><br />
        </Col>
    </Row>

export default Artists;


