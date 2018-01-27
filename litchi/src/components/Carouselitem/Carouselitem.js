import React,{ Component } from 'react';
import './Carouselitem.css'

class Carouselitem extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.carouselitem.title,
            imageUrl: props.carouselitem.imageUrl,
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ 
            title: props.carouselitem.title,
            imageUrl: props.carouselitem.imageUrl,
         });  
      }
    render(){
        return (
            <div className='Carouselitem' >
                <img alt='' className='Carouselitem__img' src={this.state.imageUrl}/>
            </div>
        )
    }
}

export default Carouselitem;