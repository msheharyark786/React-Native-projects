import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainNavigation from './navigation/MainNavigation';
import SignUp from './screens/signUp';



const App= () => {
  return (
    <MainNavigation/>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5722'
  }
});

export default App;
