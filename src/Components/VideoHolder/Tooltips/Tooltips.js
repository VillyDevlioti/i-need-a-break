import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./Tooltips.css";

const Tooltips = () => 
	<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Give yourself 1 minute away from the noise of 2020. Then, repeat until ready to get back to the world.</Tooltip>}>
		<span className="d-inline-block">
			<Button className="button-class" disabled style={{ pointerEvents: 'none' }}>
				i
			</Button>
		</span>
	</OverlayTrigger>

export default Tooltips;