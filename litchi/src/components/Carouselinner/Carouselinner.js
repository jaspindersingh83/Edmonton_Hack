import React,{ Component } from 'react';
import Carouselnavigation from '../Carouselnavigation/Carouselnavigation'
import './Carouselinner.css'

class Carouselinner extends Component{
    constructor(props) {
        super(props);
        this.state = {
            carouselitems:props.data.carouselitems.slice(0,6),
            left:0,
            right:6,
        }
    }
    moveRight = (event) => {
        event.preventDefault();
        let left = this.state.left;
        let right = this.state.right;
        let allCarouselitems = this.props.data.carouselitems;
        if (right < allCarouselitems.length){
            this.setState({
                carouselitems: allCarouselitems.slice(left+6,right+6),
                left: left+6,
                right: right+6
            });
        }
    }
    moveLeft = (event) => {
        event.preventDefault();
        let left = this.state.left;
        let right = this.state.right;
        let allCarouselitems = this.props.data.carouselitems;
        if (right > allCarouselitems.length){
            let absoluteToLeft = Math.floor(allCarouselitems.length/6) * 6;
            this.setState({
                carouselitems: allCarouselitems.slice(absoluteToLeft-6,absoluteToLeft),
                right : absoluteToLeft,
                left: absoluteToLeft-6
            });
        } else {
            this.setState({
                carouselitems: allCarouselitems.slice(left-6,right-6),
                right : right-6,
                left: left-6
            });
        }
    }
    render() {
        return (
                <Carouselnavigation 
                moveRight={this.moveRight}
                moveLeft={this.moveLeft}
                left = {this.state.left}
                right = {this.state.right}
                maxLength = {this.props.data.carouselitems.length}
                carouselitems = {this.state.carouselitems}
                />
        )
    }
}
export default Carouselinner

 