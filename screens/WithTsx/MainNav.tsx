import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import SignUp from "./SignUp";
import Users from "./Users";
import Splash from "./Splash";

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Dashboard from "./DashboardScreen/Dashboard";

export type RootStackParamList = {
    Login: undefined,
    SignUp: undefined,
    Users: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export default class MainNav extends React.Component  {

    

   
    render() {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen component={Splash} name="SplashScreen" options={{headerShown:false}}/> 
                <Stack.Screen 
                component={Login}  
                name="Login"
                options={{headerShown:false}}
                />
                <Stack.Screen 
                component={SignUp} 
                name="SignUp"
                options={{headerShown:false}}
                />

<Stack.Screen component={Users} name="Users" options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    }
}


