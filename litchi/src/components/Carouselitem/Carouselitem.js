import React,{ Component } from 'react';
import './Carouselitem.css';
import {getItemById} from '../../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Carouselitem extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: null,
            thumbnailUrl: null,
            videoUrl: null,
            coverImageUrl: null,
            id: null
        }
    }
    async componentWillMount(){
        await this.props.getItemById(this.props.carouselitem)
        this.setState({
            id: this.props.item._id ,
            title: this.props.item.title,
            thumbnailUrl: this.props.item.thumbnailUrl,
            coverImageUrl:this.props.item.coverImageUrl,
            videoUrl:this.props.item.videoUrl,
        })
    }

    setVideourl = async () => {
        localStorage.setItem('video', this.state.videoUrl);
        localStorage.setItem('coverImage', this.state.cove)
    }
    
    render(){
        return (
            <Link to={`/watch/${this.state.id}`}>
            <div className='Carouselitem' onClick={this.setVideourl} >
                <img alt='' className='Carouselitem__img' src={this.state.thumbnailUrl}/>
            </div>
            </Link>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item : state.item
    };
};

export default connect(mapStateToProps, { getItemById })(Carouselitem);

