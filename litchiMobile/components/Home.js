import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Backgroundvideo from './Backgroundvideo';

class Home extends Component{
    static navigationOptions = {
        header: null,
    }
    render(){
        return(
            <View style={body}>
                {/* <Backgroundvideo /> */}
                    <Text style={h1}>TV is Dead, Our Stories are not</Text>
                    <Text style={h2}>Watch your regional movies, Cancel Anytime</Text>
                    <View style= {buttonswrapper}>
                        <TouchableOpacity style={button} onPress={() => this.props.navigation.navigate('SignIn')}>
                            <Text style={buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={button} onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text style={buttonText}>Join Free For A Month</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    buttonswrapper:{
        flex:0,
        width:'80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderColor: 'black',
        // borderWidth: 1,
    },
    button: {
        flex:0,
        width: '45%',
        height:50,
        backgroundColor: '#e50914',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText :{
        color:'white',
        fontSize:18
    },
    h1:{
        flex:0,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:28,
        color: 'white',
        marginBottom:25,
    },
    h2:{
        flex:0,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:22,
        color: 'white',
        marginBottom:25,
    },
    body:{
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',     
    }
  });

const {button, buttonText, h1, h2, body, buttonswrapper} = styles




export default Home;