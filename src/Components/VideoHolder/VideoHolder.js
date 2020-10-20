import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Player, ControlBar } from 'video-react';
import "./VideoHolder.css";
import MainHeadline from "./MainHeadline/MainHeadline";
import Tooltips from './Tooltips/Tooltips.js'
import animations from  '../../data.json'
import ShuffleButton from './ShuffleButton/ShuffleButton.js'

class VideoHolder extends Component {
    //Initialize stuff
    constructor(props){
        super(props)
        this.state = {
            playNextVideo: true,
            videoId: "",
            videoSrc: "",
            author: "",
            animations
        }
        this.handleClick = this.handleClick.bind(this);
      }
    
    //trigger function 
    handleClick = () => {
        this.setState({
            playNextVideo: true
        })
        this.selectRandomAnimation (this.state.playNextVideo);
    }
    
    //self explanatory
    selectRandomAnimation = (playNextVideo) => {
        let randomChoice = 0; // ancillary variable to help us change the state
        let nextVideo = ""; //ancillary variable that will store the next video
        let authorName = ""; //ancillary variable to store intermediate results
        let ceiling = animations.length; // reading from the file
        console.log("ceiling is: ", ceiling) // control point

        if (playNextVideo) { // has the button been clicked? If yes
            randomChoice = (Math.floor(Math.random() * ceiling)) + 1; //assign a new random choice for the video
            console.log("next video up: ", randomChoice);
//            nextVideo = this.animations[randomChoice].source; //pick the next video
//            authorName = animations[randomChoice].author; //assign the author for credit
            this.setState({
                videoId: randomChoice,
                videoSrc : nextVideo,
                author: authorName    
            });
            console.log("video id: ", this.state.videoId); //controlpoint
        }
        else { //else bye bye
            console.log("no buttons clicked");
            return;
        }
    }

    render () {
        //let videoChoice = this.props.videoChoice;  
        return (
            <Row className="video-row video-text">
                <MainHeadline />
                {/*<ShuffleButton />*/}
                {/*Shuffle Button Code*/}
                <Button type="button" className="btn btn-outline-primary shuffle-button" onClick = {() => this.handleClick()}>
                    {/*on click this button will choose a different video which will be pushed to the video player*/}
                    <ShuffleButton />
                </Button>
                <Tooltips />
                <Player playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                    <ControlBar disableCompletely={true} className="my-class" />
                </Player>
                
            </Row>
        );
    }
}

export default VideoHolder;