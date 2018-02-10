import React, {Component} from 'react';
import {View, StyleSheet, Text,  TouchableOpacity, AsyncStorage, Linking} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'; 
import axios from 'axios';
import { StackNavigator } from 'react-navigation';
import Backgroundvideo from './Backgroundvideo';

//Change ApiUrl in Production
const apiUrl = 'http://localhost:5000';

class SignIn extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            error: null,
            comingAfterSignup:false
        }
    }
    async componentDidMount(){
        let username = await AsyncStorage.getItem('username')
        if(username){
            this.setState({
                username,
                comingAfterSignup:true,
            })
        }
    }
    handleInput = (text, type) => {
        this.setState({
            [type]:text
        })
    }

    ifEmail = (user) =>{
        const {username,password} = user;
        let tester = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
        const valid = tester.test(username);
        if(valid){
            user = {email:username,password}
        } else {
            user = user;
        }
        return user;
    }

    signIn = async () =>{
        let user = this.state;
        user = this.ifEmail(user);
        try{
            let loginRequest = await axios.post(`${apiUrl}/login`, user);
            let token = loginRequest.data.token
            await AsyncStorage.setItem('token',token);
            await AsyncStorage.removeItem('username');
            this.props.navigation.navigate('Home')
        } catch (error){
            let errorMessage = error.response.data.message;
            this.setState({
                error:errorMessage
            });
            setTimeout(() => {
                this.setState({error: null});
            }, 4000);
        }
        this.setState({
            password:'',
            comingAfterSignup:false
        });
    }
   
    render(){
        return(
            <View style={body}>
                {/* <Backgroundvideo /> */}
                <View style={Formwrapper}>
                {this.state.comingAfterSignup ? 
                <View>
                    <Text style={Signupsuccess}> Sign Up Successful, Sign In now</Text>
                </View> :
                null
                }
                    <FormLabel labelStyle={{color:'white',fontSize:18}} >Username or Email</FormLabel>
                    <FormInput value={this.state.username} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'username')}/>
                    <FormLabel labelStyle={{color:'white',fontSize:18}}>Password</FormLabel>
                    <FormInput value={this.state.password} textInputRef='password'  secureTextEntry={true} inputStyle={{color:'white',fontSize:18 }} onChangeText={(text) => this.handleInput(text,'password')}/>
                    <FormValidationMessage>{this.state.error}</FormValidationMessage>
                    <TouchableOpacity style={Hyperlink} onPress={() => { Linking.openURL(`${apiUrl}/recoverpassword`)}}>
                        <Text style={Hyperlinktext}>Forgot Username or Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button} onPress={() => this.signIn()}>
                        <Text style={buttonText}>Sign In</Text>
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
    Hyperlink: {
        flex:0,
        width: '100%',
        height:50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 25
    },
    Hyperlinktext :{
        color:'#0080ff',
        fontSize:18
    },
    Formwrapper:{
        flex:0,
        width: '70%',
    },
    Signupsuccess:{
        fontSize:18,
        color:'#e50914',
    },
    
    body:{
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

const {button, buttonText,body, Formwrapper, Hyperlinktext, Hyperlink, Signupsuccess} = styles




export default SignIn;