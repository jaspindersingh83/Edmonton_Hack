import React, { Component } from 'react';
import './Auth.css';
import { createUser } from '../../actions';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Backgroundvideo from '../Backgroundvideo/Backgroundvideo';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            confirmPassword:'',
            email:'',
            error: undefined
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ 
            error:props.error
        }); 
    }
    renderAlert() {
        if (!this.state.error) return null;
        return <p style={{color:'#e50914'}}>{this.state.error}</p>;
    }   
    //Rather than having individual input functions 
    handleInput = (e,type) => {
        e.preventDefault();
        this.setState({
            [type]:e.target.value
        })
    }

    signup = (e) =>{
        e.preventDefault();
        this.props.createUser(this.state, this.props.history);
        this.setState ({
            password:'',
            confirmPassword:'',
            error: this.props.error
        })
    }

    render() {
        return (
        <div>
            <Backgroundvideo />
            <div className='Home__Body'>
                <div className='Home__Body__Container' style={{width:'33%', marginTop:'80px'}}>
                    <h1 style={{marginBottom:'20px'}} >Sign up</h1>
                    {this.renderAlert()}
                    <form onSubmit={this.signup}>
                        <label>Username</label>
                        <input onChange={(e) => this.handleInput(e,'username')} value={this.state.username} type="text"/>
                        <label>Password</label>
                        <input onChange={(e) =>this.handleInput(e,'password')} value={this.state.password} type="password"/>
                        <label>Confirm Password</label>
                        <input onChange={(e) =>this.handleInput(e,'confirmPassword')} value={this.state.confirmPassword} type="password"/>
                        <label>Email</label>
                        <input onChange={(e) =>this.handleInput(e,'email')} value={this.state.email} type="text"/>
                        <Button style={{width:'100%', margin:'20px 0px'}} bsStyle="danger" type="submit" >
                            Sign Up
                        </Button>
                    </form>
                    <p>Already have an account? 
                        <Link to={'/login'} className='Link'> Sign In now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
    };
};

export default connect(mapStateToProps, { createUser })(Signup);
