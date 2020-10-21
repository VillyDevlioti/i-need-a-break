import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./Tooltips.css";

const Tooltips = () => 
	<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Keep on hitting the button whenever you need to chill out.</Tooltip>}>
		<span className="d-inline-block">
			<Button className="button-class" disabled style={{ pointerEvents: 'none' }}>
				i
			</Button>
		</span>
	</OverlayTrigger>

export default Tooltips;