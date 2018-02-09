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
            error: undefined,
            renderedAfterSignUp: false
        }
    }
    login = (e) =>{
        e.preventDefault();
        let tester = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        const valid = tester.test(this.state.username);
        if(!valid){
            this.props.login(this.state, this.props.history);
        } else {
            const modifiedobj = {email:this.state.username, password: this.state.password}
            this.props.login(modifiedobj, this.props.history);
        }
    }
    componentWillReceiveProps(props) {
        if(props.signedup && !this.state.renderedAfterSignUp){
            this.setState({
                username:'',
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
            username: e.target.value
        })
    }
    handlePasswordInput = (e) =>{
        e.preventDefault();
        this.setState({
            password:e.target.value
        })
    }

    renderAlert = () => {
        if (!this.state.error) return null;
        return <p style={{color:'#e50914'}}>{this.state.error}</p>;
    }
    renderSignupSuccess = () => {
        if (!this.props.signedup) return null;
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
                    <p>
                        <Link to={'/signup'} className='Link'>Login With Facebook</Link>
                    </p>
                    <p>New to Litchi? 
                        <Link 
                        to={{
                            pathname: '/signup',
                            state: {error: undefined} 
                          }}
                         className='Link'> Sign Up now</Link>
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

export default connect(mapStateToProps, { login })(Login);
