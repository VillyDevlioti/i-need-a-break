import React, {Component} from 'react';
import BreakButton from '../../../icons/BreakButton.svg'
import Button from 'react-bootstrap/Button';
import './NextButton.css'


class NextButton extends Component {
    render (){
        let animation = this.props.animation;
        return (

            <span className="d-inline-block">
            <div className={`next-button-unit ${animation}`}>
                <p className="next-button-text">Start Over</p>  
                <img className="next-button-image" alt="I need a break button" src={BreakButton}  />
            </div>
            </span>
        )
    }
}


export default NextButton;