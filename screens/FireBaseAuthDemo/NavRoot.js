import React from 'react';
import Onboardings from './Screens/Onboardings';
import Login from './Screens/Login';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default class NavRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLaunch: null,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        this.setState({isFirstLaunch: true});
        showAsyncStorageContentInDev();
      } else {
        this.setState({isFirstLaunch: false});
      }
    });
  }

  render() {
    if (this.state.isFirstLaunch === null) {
      return null;
    } else if (this.state.isFirstLaunch === true) {
      routeName = 'Onboardings';
    
    } else {
      routeName = 'Login';
      
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
          <Stack.Screen
            component={Onboardings}
            name="Onboarding"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Login}
            name="Login"
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    );
  }
}
