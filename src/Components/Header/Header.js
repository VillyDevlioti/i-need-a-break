import React, { Component } from "react";
import TextScroll from 'react-textscroll'
import Row from 'react-bootstrap/Row';
import "./Header.css";

class Header extends Component {
    render () {
        const text = ['Election Day 2020 Bringing You Down?', 'Glued to poll predictions?', 
        'About to lose it if you hear “unprecedented year” one more time?', 'Exhausted from finding silver linings?',
        'Bloodshot eyes from late-night Twitter binges?', 'Desperate for “the issues” to be resolved? 🙃 '];
        return (
                <Row className="header-row header-text">
                    <TextScroll mode="horizontal" text={text} speed={2500} />
                </Row>
        )
    }
}
export default Header;