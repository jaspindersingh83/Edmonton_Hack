import React,{Component} from 'react';
import './Home.css';
import Backgroundvideo from '../Backgroundvideo/Backgroundvideo';
import {Button} from 'react-bootstrap'

class Home extends Component{
    
    handleLoginClick= (e) =>{
        e.preventDefault();
        this.props.history.push('/login');    
    }
    handleSignupClick= (e) =>{
        e.preventDefault();
        this.props.history.push('/signup');    
    }
    render(){
        return (
            <div>
            <Backgroundvideo />
                <div className='Home__Navbar'>
                    <h1 style={{color:'#e50914',margin:'0px'}}>Litchi</h1>
                    <Button style={{width:'100px'}} bsStyle="danger" onClick={this.handleLoginClick}>
                        Sign In
                    </Button>
                </div>
                <div className='Home__Body'>
                    <div className='Home__Body__Container'>
                        <ul style={{fontSize:'22px'}}>
                            <h1 style={{marginBottom:'20px'}} >TV is Dead, Our Stories Are Not.</h1>
                            <li>Watch your regional movies,standup comedy and sports</li>
                            <li>Cancel Anytime</li>
                            <Button style={{width:'210px',marginTop:'20px'}} bsStyle="danger"  onClick={this.handleSignupClick} >
                                Join Free For a Month
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Home;

