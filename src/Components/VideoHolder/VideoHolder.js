import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Player, ControlBar } from 'video-react';
import "./VideoHolder.css";
import MainHeadline from "./MainHeadline/MainHeadline";
import Tooltips from './Tooltips/Tooltips.js'
import animations from  '../../data.json'
//import ShuffleButton from './ShuffleButton/ShuffleButton.js'

class VideoHolder extends Component {
    constructor(props){
        super(props)
        this.state = {
            playNextVideo: false,
            videoId: 0,
            videoSrc: "",
            author: "",
            animations
        }
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick = () => {
        this.setState({
            playNextVideo: true
        })
        this.selectRandomAnimation (this.state.playNextVideo);
    }
      
    selectRandomAnimation = (playNextVideo) => {
        let randomChoice = 0; // ancillary variable to help us change the state
        let nextVideo = ""; //ancillary variable that will store the next video
        let authorName = "" //ancillary variable to store intermediate results
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
            console.log("video id: ", this.state.videoId);
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
                    <svg width="3vw" height="3.5vw" viewBox="0 0 16 16" fill="white" class="bi bi-shuffle" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                        <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                    </svg>
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