import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./Tooltips.css";

class Tooltips extends Component {
	render() {
		return (
			<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
				<span className="d-inline-block">
					<Button disabled style={{ pointerEvents: 'none' }}>
						i
    				</Button>
				</span>
			</OverlayTrigger>
		)
	}
}

export default Tooltips;