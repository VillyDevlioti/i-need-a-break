import React, { Component } from "react";
//import ScrollText from 'react-scroll-text'
import TextScroll from 'react-textscroll'
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

/* //const Header = () => (
/*     <Container fluid>
        <Row className="justify-content-md-center">
        <ScrollText>
             Exhausted from finding silver linings? 🙃 About to lose it if you hear “unprecedented year” one more time?
        </ScrollText>
        </Row>
    </Container> 
    <ScrollText>Text</ScrollText>
);*/
class Header extends Component {
    render () {
        const text = ['Exhausted from finding silver linings? 🙃 About to lose it if you hear “unprecedented year” one more time?']
        return (
                <Row className="header-row header-text">
                    <TextScroll mode="horizontal" text={text} speed={2500} />
                </Row>
        )
    }
}

export default Header;