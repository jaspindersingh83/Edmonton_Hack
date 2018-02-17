import React, { Component } from 'react';


export default class Fbtoken extends Component{

    componentDidMount(){
        
        let token = this.props.location.search.substr(1);
        localStorage.setItem('token',token);
        this.props.history.push('/genres')
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}