import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Player, ControlBar } from 'video-react';
import "./VideoHolder.css";
//import MainHeadline from "./MainHeadline/MainHeadline";
import Tooltips from './Tooltips/Tooltips.js'
import animations from  '../../data.json'
import ShuffleButton from './ShuffleButton/ShuffleButton.js'

class VideoHolder extends Component {
    //Initialize stuff
    constructor(props){
        super(props)
        this.state = {
            //variables which control video function and DOM elements
            isButtonHidden: false, //variable to render button
            isVideoHidden: true, // variable to render video player

            //variables which control video information to show to DOM
            videoId: "",
            videoSrc: "",
            author: "",   
            
            //json reading variable
            animations
        }
        this.handleClick = this.handleClick.bind(this);
      }
    
    //trigger function 
    handleClick = () => {
        //toggle the state of the 'I Need a Break' Button
        this.toggleStates(this.setState.isButtonHidden);

        //make a function to also make headline disappear
        //this.selectRandomAnimation (this.state.playNextVideo);
    }
    
    toggleStates = () => {
        this.setState({
            isButtonHidden: !this.state.isButtonHidden,
        })
        console.log("is it hidden?: ", this.state.isButtonHidden);
    }

    randomNumber = () => {
        let videoChoice = Math.floor(Math.random() * this.state.animations.length) + 1;
        return videoChoice;
    }

    render () {
        let videoChoice = this.randomNumber(); 

        console.log("next video up: ", videoChoice); 
        return (
            <Row className="video-row video-text">
                {/*Shuffle Button Code*/}
                <Button type="button" className="shuffle-button" onClick = {() => this.handleClick()}>
                    {!this.state.isButtonHidden && <ShuffleButton />} {/* only render button when video is not playing */}
                </Button>
                <Tooltips />
                {
                    this.state.animations.filter(videoId => videoId.id === videoChoice).map(filteredVideo => (
                        <Player playsInline autoPlay src={filteredVideo.source} id={filteredVideo.id} >
                            {console.log(filteredVideo.source)}
                            <ControlBar disableCompletely={true} className="my-class" />
                        </Player>
                    ))
                } 
{/*                 <Player playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <ControlBar disableCompletely={true} className="my-class" />
                </Player>
                 */}
            </Row>
        );
    }
}

export default VideoHolder;