import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Artists.css";


class Artists extends Component {
render () {
    return (
        <div>
            {/*<Col lg={4} className="smaller-credit">Presented works by</Col>*/}
            <Row className="artists-row">
                <Col md={4}>
                    <span className="smaller-credit">Presented works by </span> <br />
                    <span className="bigger-credit">Alex McLeod</span><br />
                    <span className="bigger-credit">Cari Sekendur</span><br />
                    <span className="bigger-credit">Hannah Smith</span><br />
                    <span className="bigger-credit">Qieer Want</span><br />
                </Col>
                <Col md={4}> 
                    <br />
                    <span className="bigger-credit">Rory Scott</span><br />
                </Col>
            </Row>
        </div>  
    );
}

} 

export default Artists;


