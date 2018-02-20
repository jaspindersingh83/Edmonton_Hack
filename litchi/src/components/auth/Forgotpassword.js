import React, { Component } from 'react';
import {forgotPassword} from '../../actions';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap'; 
import Backgroundvideo from '../Backgroundvideo/Backgroundvideo';
import {Link} from 'react-router-dom';

class Fogotpassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            error: null,
            emailSent: null
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ 
            error:props.error,
            emailSent:props.emailSent
        }); 
    }
    renderAlert() {
        if (!this.state.error) return null;
        return <p style={{color:'#e50914'}}>{this.state.error}</p>;
    }   
    renderEmailSuccess(){
        if (!this.state.emailSent) return null;
        return <p style={{color:'#e50914'}}>Reset Password link has been sent to email associated with this account</p>;
    }
    handleInput = (e) => {
        e.preventDefault();
        this.setState({
            email:e.target.value
        })
    }

    forgotPassword = (e) => {
        e.preventDefault();
        this.props.forgotPassword(this.state.email);
        this.setState ({
            email:'',
            error: this.props.error
        })
    }

    render(){
        return(
            <div>
                <Backgroundvideo />
                <div className='Home__Body'>
                    <div className='Home__Body__Container' style={{width:'33%', marginTop:'20px'}}>
                        <h1 style={{marginBottom:'20px'}} >Forgot Password</h1>
                        {this.renderAlert()}
                        {this.renderEmailSuccess()}
                        <form onSubmit={this.forgotPassword}>
                        <label>Email</label>
                        <input onChange={this.handleInput} value={this.state.email} type="text"/>
                        <Button style={{width:'100%', margin:'20px 0px'}} bsStyle="danger" type="submit" >
                            Submit
                        </Button>
                        </form>
                        <p>New to Litchi? 
                        <Link to={'/signup'} className='Link'> Sign Up now</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
        emailSent: state.auth.emailSent
    };
};

export default connect(mapStateToProps, { forgotPassword })(Fogotpassword);
