import React, {useState,} from 'react'
import {
    ScrollView,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Button,
    Alert, Text
  } from 'react-native';

import Input from '../Components/Input';
import Login from './Login';
import Card from '../Components/Card'; 
import Colors from '../Constants/Colors';

import { LinearGradient } from 'expo-linear-gradient';
//import HomeScreen from './HomeScreen';
import { useScreens, enableScreens } from 'react-native-screens';


const AuthScreen = props => {
  //useScreens();
  enableScreens();
  var e_mail="msheharyark786@gmail.com";
  var password="sheharyar"
  const [data, setData]=useState({
    email:'',
    password:''
  })

  

const handlePasswordChange = (val) => {
    setData({
        ...data,
        password: val
    });
}

const handleEmail=(val)=>{
    setData({
        ...data,
        email:val
    })
}

  const handleLogin=()=>{
      if(data.email!=e_mail || data.password!==password){
        Alert.alert("Wrong", "this is incorrect...",
                [{text:'RETRY!', style:'cancel'}])
                return;
      }
      else{
        if(data.email===e_mail)
        {
          if(data.password===password){
           // <Login />
            props.navigation.navigate({
              routeName:'Home'
            })
          }
        }
        
      }
      }
    
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
        <LinearGradient 
          colors={['#ffedff', '#ffe3ff']} 
          style={styles.gradient}
        >
          <Card style={styles.authContainer}>
            <ScrollView>
              <Input
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorMessage="Please enter a valid email address."
                onInputChange={(val)=>handleEmail(val)}
                initialValue=""
              />
              <Input
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorMessage="Please enter a valid password."
                onInputChange={(val) => handlePasswordChange(val)}
                initialValue=""
              />
              <View style={styles.buttonContainer}>
                <Button title="Login" color={Colors.primary} onPress={() => {handleLogin()}} />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Sign Up"
                  color={Colors.accent}
                  onPress={() => { 
                    props.navigation.navigate({
                    routeName:'Signup'
                  })}}
                />
              </View>
            </ScrollView>
          </Card>
        </LinearGradient>
      
      </KeyboardAvoidingView>
      
    );
  };
  
  AuthScreen.navigationOptions = {
    headerTitle: 'Please Authenticate'
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    authContainer: { 
      width: '80%',
      maxWidth: 400,
      maxHeight: 400,
      padding: 20
    },
    buttonContainer: {
      marginTop: 10
    }
  });
  
  export default AuthScreen;
