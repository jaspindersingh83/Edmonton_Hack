import React, { Component } from 'react';
import './Auth.css';
import { login } from '../../actions';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Backgroundvideo from '../Backgroundvideo/Backgroundvideo';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            email:'',
            error: undefined,
            renderedAfterSignUp: false
        }
    }
    
    login = (e) =>{
        e.preventDefault();
        this.props.login(this.state, this.props.history);
    }
    componentWillReceiveProps(props) {
        if(props.signedUpusername && !this.state.renderedAfterSignUp){
            this.setState({
                username:props.signedUpusername,
                email:props.signedUpusername,
                password:'',
                error:undefined,
                renderedAfterSignUp: true
            });
        } else {
            this.setState({ 
                password:'',
                error:props.error
            });
        }
    }
    
    handleUsernameInput = (e) =>{
        e.preventDefault();
        this.setState({
            username: e.target.value,
            email: e.target.value,
        })
    }
    handlePasswordInput = (e) =>{
        e.preventDefault();
        this.setState({
            password:e.target.value
        })
    }
    fbLogin = async() => {
        window.location = "http://localhost:5000/auth/facebook";
    }

    renderAlert = () => {
        if (!this.state.error) return null;
        return <p style={{color:'#e50914'}}>{this.state.error}</p>;
    }
    renderSignupSuccess = () => {
        if (!this.props.signedUpusername) return null;
        return <p style={{color:'#e50914'}}>Sign Up successfull, Please sign in</p>;
    }

    render() {
        return (
        <div>
            <Backgroundvideo />
            <div className='Home__Body'>
                <div className='Home__Body__Container' style={{width:'33%', marginTop:'80px'}}>
                    <h1 style={{marginBottom:'20px'}} >Sign In</h1>
                    {this.renderAlert()}
                    {this.renderSignupSuccess()}
                    <form onSubmit={this.login}>
                        <label>Username or Email</label>
                        <input onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                        <label>Password</label>
                        <input onChange={this.handlePasswordInput} value={this.state.password} type="password"/>
                        <p style={{marginTop:'50px', marginBottom:'0px'}}>
                            <Link to={'/'} className='Link'>Forgot username or password?</Link>
                        </p>
                        <Button style={{width:'100%', margin:'20px 0px'}} bsStyle="danger" type="submit" >
                            Sign In
                        </Button>
                    </form>
                    <div className='Fblogin'>
                    <img className='Iconimage' alt='O yeah' src='https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png'/>
                    <div onClick={this.fbLogin} className='Link'>Login With Facebook
                    </div>
                    </div>
                    <p>New to Litchi? 
                        <Link to={'/signup'} className='Link'> Sign Up now</Link>
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
        signedUpusername: state.auth.signedUpusername
    };
};

export default connect(mapStateToProps, { login })(Login);
