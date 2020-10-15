import React, { Component } from "react";
import TextScroll from 'react-textscroll'
import Row from 'react-bootstrap/Row';
import "./Header.css";

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