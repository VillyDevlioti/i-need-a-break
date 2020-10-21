import React, {Component} from 'react';
import BreakButton from '../../../icons/BreakButton.svg'
import './ShuffleButton.css'

class ShuffleButton extends Component {
    render (){
        return (
            <div className="button-unit">
                <p className="button-text">A Momentary Lapse</p>  
                <img className="button-image" alt="I need a break button" src={BreakButton}  />
            </div>
        )
    }
} 


export default ShuffleButton;