import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

 export default StackNavigator({
   Home: {
     screen: Home
   },
   SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
 })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


