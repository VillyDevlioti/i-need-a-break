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
                    <span className="bigger-credit">Cody Healey-Conelly</span><br />
                    <span className="bigger-credit">Qieer Wang</span><br />
                    <span className="bigger-credit">Somil Mahta</span><br />
                    <span className="bigger-credit">Bella Cologlu</span><br />
                    <span className="bigger-credit">Eugene Sharp</span><br />
                </Col>
                <Col md={4}> 
                    <br />
                    <span className="bigger-credit">Rad Mora</span><br />
                    <span className="bigger-credit">Sónia Rodrigues</span><br />
                    <span className="bigger-credit">Hannah Smith</span><br />
                    <span className="bigger-credit">Rory Scott</span><br />
                    <span className="bigger-credit">Butter Studios</span><br />
                </Col>
                <Col md={4}> 
                    <br />
                    <span className="bigger-credit">Thomas Moore</span><br />
                    <span className="bigger-credit">Sabine Volkert</span><br />
                    <span className="bigger-credit">Candice Botelho Coelho</span><br />
                    <span className="bigger-credit">Soojin Lee </span><br />
                </Col>
            </Row>
        </div>  
    );
}

} 

export default Artists;


