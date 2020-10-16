import React from "react";
import "./Wrapper.css";
import Container from 'react-bootstrap/Container';

//stateless component
const Wrapper = props => 
    <div className="wrapper">
        <Container fluid>
            {props.children}
        </Container>
    </div>

export default Wrapper;