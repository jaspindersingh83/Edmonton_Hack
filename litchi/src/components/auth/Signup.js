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

    renderAlert() {
        if (!this.state.error) return null;
        return <p style={{color:'#e50914'}}>{this.state.error}</p>;
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
    componentWillReceiveProps(props) {
        this.setState({ 
            error:props.error
        }); 
    }
    handleUsernameInput = (e) =>{
        e.preventDefault();
        this.setState({
            username: e.target.value
        })
    }
    handlePasswordInput = (e) =>{
        e.preventDefault();
        this.setState({
            password:e.target.value
        })
    }
    handleconfirmPasswordInput = (e) =>{
        e.preventDefault();
        this.setState({
            confirmPassword:e.target.value
        })
    }
    handleEmailInput = (e) =>{
        e.preventDefault();
        this.setState({
            email: e.target.value
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
                        <input onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                        <label>Password</label>
                        <input onChange={this.handlePasswordInput} value={this.state.password} type="password"/>
                        <label>Confirm Password</label>
                        <input onChange={this.handleconfirmPasswordInput} value={this.state.confirmPassword} type="password"/>
                        <label>Email</label>
                        <input onChange={this.handleEmailInput} value={this.state.email} type="text"/>
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
        signedup: state.auth.signedup
    };
};

export default connect(mapStateToProps, { createUser })(Signup);
