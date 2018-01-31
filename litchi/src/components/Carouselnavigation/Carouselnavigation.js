import React,{Component} from 'react';
import Carouselitem from '../Carouselitem/Carouselitem';
import './Carouselnavigation.css';
import {Glyphicon} from 'react-bootstrap';

class Carouselnavigation extends Component{
    render(){
        return (
            <div className='Carousel__inner'>
            <div className='Navbox'>
                {this.props.left > 0 ?
                <div className='Navbox__arrowholder'
                onClick = {this.props.moveLeft} >
                <Glyphicon 
                    glyph="menu-left"
                    style={{color:'white',fontSize:'30px'}}
                />
                </div>: 
                <div className='Navbox__arrowholder__hidden'>
                </div>}
                {this.props.right < this.props.maxLength ?
                <div className='Navbox__arrowholder'
                onClick = {this.props.moveRight} >
                <Glyphicon 
                    glyph="menu-right"
                    style={{color:'white',fontSize:'30px'}}
                /> 
                </div>:
                <div className='Navbox__arrowholder__hidden'>
                </div>}
            </div>
            {this.props.carouselitems.map(carouselitem =>
                <Carouselitem carouselitem = {carouselitem}/>
            )}
            </div>
        )
    }
}

export default Carouselnavigation;