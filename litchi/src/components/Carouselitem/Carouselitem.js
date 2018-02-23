import React,{ Component } from 'react';
import './Carouselitem.css';
import {getItemById} from '../../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

class Carouselitem extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: null,
            thumbnailUrl: null,
            videoUrl: null,
            coverImageUrl: null,
            id: null,
            opacity: 1,
            showOverlay: 0,
            showPlayIcon:0
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
        await localStorage.setItem('video', this.state.videoUrl);
        await localStorage.setItem('coverImage', this.state.coverImageUrl)
        await this.setState({
            title: null,
            thumbnailUrl: null,
            videoUrl: null,
            coverImageUrl: null,
            id: null,
            opacity: 1,
            showOverlay: 0,
            showPlayIcon:0
        })
    }
    styleChangeItemandNav = ()=> {
        if(this.props.showNavArrows){
            this.props.showNavArrows();
        }
        this.setState({
            opacity: 0.5,
            showPlayIcon:1
        })
    }
    resetstyleChangeItemandNav = ()=> {
        if(this.props.hideNavArrows){
            this.props.hideNavArrows();
        }
        this.setState({
            opacity: 1,
            showPlayIcon:0
        })
    }
    
    render(){
        return (
            <Link to={`/watch/${this.state.id}`}>
            <div className='Carouselitem__overlay'
                onMouseEnter= {this.styleChangeItemandNav} 
                onMouseLeave= {this.resetstyleChangeItemandNav} 
                onClick={this.setVideourl}
            >
            {this.state.showPlayIcon ? 
            <Glyphicon 
                    glyph="play"
                    style={{color:'rgba(229, 9, 20, 1)'}}
            />: null
            }
            </div> 
                <div className='Carouselitem'
                    style= {{opacity:this.state.opacity}} 
                     >
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

