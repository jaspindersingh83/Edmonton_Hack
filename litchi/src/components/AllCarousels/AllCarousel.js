import React,{ Component } from 'react';
import './AllCarousel.css';
import { connect } from 'react-redux';
import Carousel from '../Carousel/Carousel';
import SearchBar from '../SearchBar/SearchBar'
import {getAllgenres, logout} from '../../actions';

class AllCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCarousel : props.content,
        }
    }

    async componentWillMount(){
        await this.props.getAllgenres(this.props.history);
        this.setState({
            allCarousel: this.props.content,
        })
    }
    logout=() => {
        this.props.logout(this.props.history)
    }
   
    render(){
        return (
            <div>
            <SearchBar logout= {this.logout} history= {this.props.history} />
            {this.state.allCarousel ?
            <div className='Allcarousel'>
                {this.state.allCarousel.map((carouseltype) =>
                    <Carousel key= {carouseltype._id}  data={carouseltype}/>
                )}
            </div> : null 
            }
            </div> 

        )
    }
}

const mapStateToProps = (state) => {
    return {
        content : state.content.allGenres
    };
};

export default connect(mapStateToProps, {logout, getAllgenres })(AllCarousel);

