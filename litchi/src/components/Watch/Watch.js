import React, {Component} from 'react';

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
        console.log(this.state)
    }
    render(){
        return (
                <video autoPlay loop>
                    <source src={this.state.videoUrl} type="video/mp4" />
                </video>
          
        )
    }
}

export default Watch