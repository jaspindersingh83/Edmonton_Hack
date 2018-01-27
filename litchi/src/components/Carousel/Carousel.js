import React,{ Component } from 'react';
import './Carousel.css';
import Carouselinner from '../Carouselinner/Carouselinner';

class Carousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            genre:props.data.genre,
        }
    }
    render() {
        return (
            <div className='Carousel'>
                <div className='Carousel__header'>
                    {this.state.genre}
                </div>
                <Carouselinner 
                data = {this.props.data}
                />
            </div> 
        )
    }
}
export default Carousel

 