import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator  } from 'react-navigation-stack'
import AuthScreen from '../screens/AuthScreen';


import LoginScreen from '../screens/LoginScreen';
import SignUp from '../screens/signUp';
import SignupScreen from '../screens/SignupScreen';
import SplashScreen from '../screens/SplashScreen';


const AppNavigator = createStackNavigator(
    {
        // SplashScreen: SplashScreen,
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
            }},
        LoginScreen:{
            screen: LoginScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
              headerMode: 'none'
            }

        },
        SignupScreen:{
            screen: SignupScreen,
            navigationOptions: {
              title: '',
              headerShown: false,
              headerMode: 'none'
            }
        },

        // signup:signup
    })

//     const AuthNavigator = createStackNavigator({
//         Auth: AuthScreen
//     });

//     const specialNavigator = createSwitchNavigator({

//         Auth: AuthNavigator,
//         Allscreen: AppNavigator,
//     });

// export default createAppContainer(specialNavigator);

export default createAppContainer(AppNavigator);