import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home"
import SignIn from "./SignIn"
import Signup from "./Signup"


const Stack = createNativeStackNavigator();


export default class AppStack extends React.Component  {

    constructor(props) {
        super(props)
        
    }

    

    render() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen component={Signup} name="Signup" />
               <Stack.Screen component={SignIn} name="SignIn" />
               <Stack.Screen component={Home} name="Home" />  
             </Stack.Navigator>
        </NavigationContainer>
    )
    }
}


