import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from './src/Components/Header';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {useScreens} from 'react-native-screens'
import MealsNavigator from './src/navigation/MealsNavigator';

useScreens();

const fetchFonts= ()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
function App() {
  const [dataLoaded, setDataLoaded]=useState(false);
if(!dataLoaded){
  return <AppLoading 
  startAsync={fetchFonts} 
  onFinish={()=>setDataLoaded(true)}
  onError={(err)=>console.log(err)} />;
}
  return (
    <MealsNavigator />
  )
}


export default App

