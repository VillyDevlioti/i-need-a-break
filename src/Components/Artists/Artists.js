import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Artists.css";


class Artists extends Component {
render () {
    return (
        <div>
            <Row className="artists-row">
                <Col md={4}>
                    <span className="smaller-credit">Presented works by</span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/alex_mcleod_/" target="_blank" rel="noopener noreferrer">Alex McLeod</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/syntheticlives/" target="_blank" rel="noopener noreferrer">Cody Healey-Conelly</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/qieerwang/" target="_blank" rel="noopener noreferrer">Qieer Wang</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/msomil/" target="_blank" rel="noopener noreferrer">Somil Mahta</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/zutsukiko_is_odd/" target="_blank" rel="noopener noreferrer">Bella Cologlu</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/ueeism/?hl=en" target="_blank" rel="noopener noreferrer">Eugene Sharp</a></span><br />
                </Col>
                <Col md={4}> 
                    <br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/rad.mora/" target="_blank" rel="noopener noreferrer">Rad Mora</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/sniardrgs/" target="_blank" rel="noopener noreferrer">Sónia Rodrigues</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/hannahelainesmith/" target="_blank" rel="noopener noreferrer">Hannah Smith</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/rks_xo/" target="_blank" rel="noopener noreferrer">Rory Scott</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/cari.sekendur/" target="_blank" rel="noopener noreferrer">Butter Studios</a></span><br />
                </Col>
                <Col md={4}> 
                    <br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/iamcyclo/" target="_blank" rel="noopener noreferrer">Thomas Moore</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/sabinevolkert/" target="_blank" rel="noopener noreferrer">Sabine Volkert</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/botelhocandice/" target="_blank" rel="noopener noreferrer">Candice Botelho Coelho</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/emptytacoshell/" target="_blank" rel="noopener noreferrer">Soojin Lee</a></span><br />
                    <span className="bigger-credit"><a href="https://www.instagram.com/benjarier/" target="_blank" rel="noopener noreferrer">Benjamin Carrier</a></span><br />
                </Col>
            </Row>
        </div>  
    );
}

} 

export default Artists;


