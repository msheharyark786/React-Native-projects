import React, {useState} from 'react';
import {
    ScrollView,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Button,
    TouchableOpacity
  } from 'react-native';

import Input from '../Components/Input';
import Card from '../Components/Card'; 
import Colors from '../Constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const SignupScreen = props => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        email:'',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

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

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });}
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
          {/* <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        > */}
            <ScrollView>
              <Input
                id="First"
                label="First Name :"
                keyboardType="default"
                required
                First_Name
                errorMessage="Please enter a valid First Name."
                onInputChange={(val) => textInputChange(val)}
                initialValue=""
              />
              <Input
                id="Last"
                label="Last Name :"
                keyboardType="default"
                required
                errorMessage="Please enter a Last Name."
                onInputChange={(val) => textInputChange(val)}
                initialValue=""
              />
              <Input
                id="email"
                label="E-Mail ADDRESS :"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorMessage="Please enter a valid email address."
                onInputChange={(val)=>handleEmail(val)}
                initialValue=""
              />
               
              <View style={styles.action}>
              <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                    
            />
              <Input
                id="password"
                label="Password :"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorMessage="Please enter a valid password."
                onInputChange={(val) => handlePasswordChange(val)}
                initialValue=""
              />
              {/* <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity> */}
              </View>
              <View style={styles.action}>
              <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
              
              <Input
                id="confirm"
                label="Confirm Password :"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorMessage="Please enter a valid password."
                onInputChange={(val) => handleConfirmPasswordChange(val)}
                initialValue=""
              />
              <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
              </View>
              {/* <View style={styles.buttonContainer}>
                <Button title="Login" color={Colors.primary} onPress={() => {}} />
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
              </View> */}
              <View style={styles.buttonContainer}>
                <Button
                  title="Sign Up"
                  color={Colors.accent}
                  onPress={() => { 
                    props.navigation.navigate({
                    routeName:'Auth'
                  })}}
                />
              </View>
            </ScrollView>
            {/* </Animatable.View> */}
          </Card>
        </LinearGradient>
      
      </KeyboardAvoidingView>
      
    );
  };
  
  SignupScreen.navigationOptions = {
    headerTitle: 'Sign Up'
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
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
  });
  
export default SignupScreen;
