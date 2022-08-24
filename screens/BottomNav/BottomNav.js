import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FirsScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
const BottomTab=createBottomTabNavigator();

const BottomNav=()=>{
    return(
         <NavigationContainer>
         <BottomTab.Navigator screenOptions={{headerShown:false,
         tabBarActiveTintColor:'red',
         tabBarInactiveTintColor:'green'
         
        }}
        //  tabBarActiveTintColor={'red'}
         >
            <BottomTab.Screen name="FirstScreen" component={FirsScreen} 
            
            options={{headerShown:false,tabBarLabel:"Home"}}
            
            />
            <BottomTab.Screen name="SecondScreen" component={SecondScreen} 
            options={{tabBarLabel:"Setting"}}
            />
            <BottomTab.Screen name="ThirdScreen" component={ThirdScreen}
            options={{tabBarLabel:"About"}}
            />

         </BottomTab.Navigator>
         </NavigationContainer>
    )
}

export default BottomNav