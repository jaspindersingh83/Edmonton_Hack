import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component{
    render(){
        return (
            <div style={{color:'black'}}>
                Login form here
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        movie:state.setMovie
    }
}
export default connect(mapStateToProps,{})(Login);