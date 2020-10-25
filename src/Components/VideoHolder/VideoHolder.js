import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./VideoHolder.css";
import Tooltips from './Tooltips/Tooltips.js'
import animations from  '../../data.json'
import ShuffleButton from './ShuffleButton/ShuffleButton.js'
import YouTube from 'react-youtube';

class VideoHolder extends Component {
    //Initialize stuff
    constructor(props){
        super(props)
        this.state = {
            //variables which control video function and DOM elements
            isTooltipHidden: false, //variable to render tooltip
            isVideoHidden: true, //variable to render video 
            videoChoice: 0,
            btnAnimation: "animate__animated animate__tada", //button animation 

            //variables which control video information to show to DOM
            videoId: "",
            videoSrc: "",
            author: "",   
            
            //json-reading variable
            animations
        }
        this.handleClick = this.handleClick.bind(this);
      }
    
    componentDidMount = () => {
        this.randomNumber();
    }
    
    //trigger function 
    handleClick = () => {
        //generate random number
        this.randomNumber();

        //toggle the state of the 'I Need a Break' Button
        this.toggleStates();
    }
    
    toggleStates = () => {
        this.state.btnAnimation === "animate__animated animate__tada" ? this.setState({btnAnimation: "animate__animated animate__bounceOut"}) : this.setState({btnAnimation: "animate__animated animate__tada"});
        this.setState({
            isTooltipHidden: !this.state.isTooltipHidden,
            isVideoHidden: !this.state.isVideoHidden,
        });
        
    }

    randomNumber = () => {
        let choice = Math.floor(Math.random() * this.state.animations.length) + 1
        this.setState({
            videoChoice: choice
        }) 
        console.log("Next video up: ", this.state.videoChoice);
    }

    render () {
        console.log("animation: ", this.state.btnAnimation)
        return (
            <Row className="video-row">
                {/*Shuffle Button Code*/}
                <Button type="button" className="shuffle-button" onClick = {() => this.handleClick()}>
                    {/*!this.state.isButtonHidden && <ShuffleButton />} {/* only render button when video is not playing */}
                    <ShuffleButton animation={this.state.btnAnimation} />
                </Button>
                {!this.state.isTooltipHidden && <Tooltips />}
                {
                    this.state.isVideoHidden && <img class="poster-image" src="/videos/poster1.png" alt="poster1" />
                }
                {
                    !this.state.isVideoHidden && this.state.animations.filter(videoId => videoId.id === this.state.videoChoice).map(filteredVideo => (
                     /*<video playsInline id={filteredVideo.id} autoPlay src={filteredVideo.source} type={filteredVideo.type} onEnded = {() => this.toggleStates()} /> */
                     <iframe id={filteredVideo.id} src={filteredVideo.source} onEnd = {() => this.toggleStates()}> </iframe>
                     
                    ))       
                }
            </Row>
        );
    }
}

export default VideoHolder;