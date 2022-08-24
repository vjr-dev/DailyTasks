import React from "react";
import Home from "./Homescreen/Home";
import LoginScreen from "./Loginscreen/LoginScreen";
import SignUp from "./Signupscreen/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from "./DashboardScreen/Dashboard";

const Stack = createNativeStackNavigator();


export default class RootStack extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            isFirstLaunch: null
        }
    }

    componentDidMount() {
        AsyncStorage.getItem("alreadyLaunched").then( value =>{
            if(value == null) {
                AsyncStorage.setItem("alreadyLaunched", "true")
                this.setState({"isFirstLaunch": true})
            }
            else {
                this.setState({"isFirstLaunch": false})
            }
        })
    }

    render() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen component={Home} name="Home" options={{headerShown:false}}/>
                <Stack.Screen 
                component={LoginScreen}  
                name="LoginScreen"
                options={{headerShown:false}}
                />
                <Stack.Screen 
                component={SignUp} 
                name="SignUp"
                options={{headerShown:false}}
                />

<Stack.Screen component={Dashboard} name="Dashboard" options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
    }
}


