import React, { Component } from 'react';
import {resetPassword} from '../../actions';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap'; 
import Backgroundvideo from '../Backgroundvideo/Backgroundvideo';
import {Link} from 'react-router-dom';


class Resetpassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            password:'',
            confirmPassword:'',
            error: null,
        }
        
    }
    componentDidMount(){
        let token = this.props.location.search.substr(1);
        localStorage.setItem('token',token);
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
    
    handleInput = (e,type) => {
        e.preventDefault();
        this.setState({
            [type]:e.target.value
        })
    }

    resetPassword = (e) => {
        e.preventDefault();
        this.props.resetPassword(this.state, this.props.history);
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
                    <div className='Home__Body__Container' style={{width:'33%', marginTop:'40px'}}>
                        <h1 style={{marginBottom:'20px'}}>Reset Password</h1>
                        {this.renderAlert()}
                        <form onSubmit={this.resetPassword}>
                        <label>New Password</label>
                        <input onChange={(e) =>this.handleInput(e,'password')} value={this.state.password} type="password"/>
                        <label>Confirm Password</label>
                        <input onChange={(e) =>this.handleInput(e,'confirmPassword')} value={this.state.confirmPassword} type="password"/>
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
    };
};

export default connect(mapStateToProps, { resetPassword })(Resetpassword);
