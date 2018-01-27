import React,{ Component } from 'react';
import './AllCarousel.css'
import Carousel from '../Carousel/Carousel'


class AllCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCarousel : props.data,
        }
    }
    render(){
        return (
            <div className='Allcarousel'>
                {this.state.allCarousel.map((carouseltype) =>
                    <Carousel data={carouseltype}/>
                )}
            </div> 
        )
    }
}



export default AllCarousel;