import React,{Component} from 'react';
import Carouselitem from '../Carouselitem/Carouselitem';
import './Carouselnavigation.css';
import {Glyphicon} from 'react-bootstrap';


class Carouselnavigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            carouselitems:props.carouselitems,
            arrowopacity:0,
        }
    }
    
    componentWillReceiveProps(props){
        this.setState({
            carouselitems:props.carouselitems
        })
    }
  
    showNavArrows = async () => {
        await this.setState({
            arrowopacity:1
        })
    }
    hideNavArrows = async() => {
        await this.setState({
            arrowopacity:0
        })
    }
    render(){
        return (
            
            <div className='Carousel__inner'>
                {this.props.left > 0 ?
                <div className='Navbox__arrowholder left'
                style={{opacity:this.state.arrowopacity, zIndex: this.state.zindex}}
                onClick={this.props.moveLeft} 
                onMouseEnter= {this.showNavArrows}
                onMouseLeave= {this.hideNavArrows}
                >      
                <Glyphicon 
                    glyph="menu-left"
                    style={{color:'white',fontSize:'30px'}}
                />
                </div>: null}
                {this.props.right < this.props.maxLength ?
                <div className='Navbox__arrowholder right'
                style={{opacity:this.state.arrowopacity}}
                onMouseEnter= {this.showNavArrows}
                onMouseLeave= {this.hideNavArrows}
                onClick = {this.props.moveRight} >
                <Glyphicon 
                    glyph="menu-right"
                    style={{color:'white',fontSize:'30px'}}
                /> 
                </div>: null}
            {this.state.carouselitems.map(carouselitem =>
                <Carouselitem 
                key={carouselitem} 
                carouselitem = {carouselitem}
                showNavArrows ={this.showNavArrows}
                hideNavArrows= {this.hideNavArrows} 
                />
            )}
            </div>
        )
    }
}

export default Carouselnavigation;