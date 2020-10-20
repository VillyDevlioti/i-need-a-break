import React, {Component} from 'react';
import BreakButton from '../../../icons/BreakButton.svg'
import './ShuffleButton.css'

class ShuffleButton extends Component {
    render (){
        return (
            <div className="button-unit">
                <p className="button-text">I need a break</p>  
                <img className="button-image" src={BreakButton}  />
            </div>
        )
    }
} 


export default ShuffleButton;