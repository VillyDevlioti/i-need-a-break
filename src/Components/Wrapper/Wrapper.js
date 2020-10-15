import React from "react";
import "./Wrapper.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//stateless component
const Wrapper = props => 
    <div className="wrapper">
        <Container fluid>
            <Row> {props.children} </Row>
        </Container>
    </div>

export default Wrapper;