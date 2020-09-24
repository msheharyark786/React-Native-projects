import {createStackNavigator, 
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
// import CategoriesScreen from '../screens/CategoriesScreen';
// import CategoryMealsScreen from '../screens/CategoryMealsScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
// import FiltersScreen from '../screens/FiltersScreen';
// import MealDetailScreen from '../screens/MealDetailScreen';


import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../Constants/Colors';
import SignupScreen from '../screens/SignupScreen';
import {Platform} from 'react-native';
//import { useScreens, enableScreens } from 'react-native-screens';

const defaultNavOptions = {
  
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MainNavigator = createStackNavigator(
  { 
    Auth: AuthScreen,
    Signup: SignupScreen,
    Home: HomeScreen
    // CategoryMeals: {
    //   screen: CategoryMealsScreen
    // },
    // MealDetail: MealDetailScreen
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primary,
      headerTitle: 'A Screen'
    }
  }
);


// const AuthNavigator = createStackNavigator(
//     {
//       Auth: AuthScreen
//     },
//     {
//       defaultNavigationOptions: defaultNavOptions
//     }
//   );

// const MainNavigator=createStackNavigator({
//     Auth: AuthNavigator
//  })

export default createAppContainer(MainNavigator);