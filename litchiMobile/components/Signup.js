import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'; 
import Backgroundvideo from './Backgroundvideo';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

//Change ApiUrl in Production
const apiUrl = 'http://localhost:5000';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            confirmPassword:'',
            email:'',
            error:null
        }
    }
    handleInput = (text, type) => {
        this.setState({
            [type]:text
        })
    }

    signUp = async () =>{
        let user = this.state;
        try{
            let signuprequest = await axios.post('http://localhost:5000/signup', user);
            let username = signuprequest.data.username;
            await AsyncStorage.setItem('username',username);
            this.props.navigation.navigate('SignIn');
        } catch (error){
            let errorMessage;
            if(error.response.data.message.errmsg){
                const duplicateKey =error.response.data.message.errmsg
                let emailKeyWordPresent = duplicateKey.search(/email/i)
                if(emailKeyWordPresent === -1){
                    errorMessage = 'Username Unavailable'
                } else {
                    errorMessage = 'Email already registered'
                }
            } else {
                errorMessage = error.response.data.message
            }
            this.setState({
                error:errorMessage
            });
            setTimeout(() => {
                this.setState({error: null});
            }, 4000);
        }
        this.setState({
            password:'',
            confirmPassword:''
        });
    }
   
    render(){
        return(
            <View style={body}>
                {/* <Backgroundvideo /> */}
                <View style={Formwrapper}>
                    <FormLabel labelStyle={{color:'white',fontSize:18}} >Username or Email</FormLabel>
                    <FormInput value={this.state.username} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'username')}/>
                    <FormLabel labelStyle={{color:'white',fontSize:18}}>Password</FormLabel>
                    <FormInput value={this.state.password} textInputRef='password'  secureTextEntry={true} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'password')}/>
                    <FormLabel labelStyle={{color:'white',fontSize:18}}>Confirm Password</FormLabel>
                    <FormInput value={this.state.confirmPassword} textInputRef='password'  secureTextEntry={true} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'confirmPassword')}/>
                    <FormLabel labelStyle={{color:'white',fontSize:18}}>Email</FormLabel>
                    <FormInput value={this.state.email} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'email')}/>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                    <TouchableOpacity style={button} onPress={() => this.signUp()}>
                        <Text style={buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    button: {
        flex:0,
        width: '100%',
        height:50,
        backgroundColor: '#e50914',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    buttonText :{
        color:'white',
        fontSize:18
    },
    Formwrapper:{
        flex:0,
        width: '70%',
    },
    body:{
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

const {button, buttonText,body, Formwrapper} = styles




export default SignUp;


