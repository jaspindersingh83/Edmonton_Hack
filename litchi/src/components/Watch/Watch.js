import React, {Component} from 'react';
import { Player, ControlBar } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import './Watch.css'

class Watch extends Component{
    constructor(props){
        super(props);
        this.state = {
            videoUrl: null,
            coverImageUrl: null
        } 
    }
    async componentWillMount(){
        let videoUrl = localStorage.getItem('video')
        let coverImageUrl = localStorage.getItem('coverImage')
        await this.setState({
            videoUrl,
            coverImageUrl
        })
    }
    componentDidMount() {
        // subscribe state change
        this.refs.player.subscribeToStateChange(this.handleStateChange);
        console.log(this.state)
      }

      handleStateChange = (state, prevState) =>{
        // copy player state to this component's state
        this.setState({
          player: state
        });
      }
    render(){
        return (
            <Player
                ref="player"
                fluid={false}
                width= {window.outerWidth}
                height= {window.innerHeight}
                autoPlay
                src={this.state.videoUrl}
                poster={this.state.coverImageUrl}
            >
            <ControlBar autoHide={true} />
            </Player>
        )
    }
}

export default Watch