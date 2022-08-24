import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import IconNav from "./IconNav"
import Bag from "./Bag"

import User from "./Users"

import Message from "./Message"

import Notification from "./Notification";


import CustomeHeader from "./CustomeHeader"

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from "react-native";









const SimpleStack = createNativeStackNavigator();

export const MyNavIconNav = (props) => {
    const insets = useSafeAreaInsets();
    return (
        <SimpleStack.Navigator  
        screenOptions={{
            headerStyle: {
              backgroundColor: '#5556a9',
              height: 300 + insets.top,

            },
            headerTintColor: '#fff',
          }}
        >
            <SimpleStack.Screen 
            options={{
                headerShown: true,
                
               header: () =>
        (
          <View style={{ height: 100, backgroundColor: "#5556a9"}}>
           <CustomeHeader navigationProps={props} />
          </View>
        ),
            }}
            component={IconNav} name="IconNav" />
            
           
        </SimpleStack.Navigator>
    )
}

export const MyNavBag = (props) => {
    return (
        <SimpleStack.Navigator  
        screenOptions={{
            headerStyle: {
              backgroundColor: '#5556a9',
            },
            headerTintColor: '#fff',
          }}
        >
            <SimpleStack.Screen 
            options={{
                headerShown: true,
                header: () =>
                (
                  <View style={{ height: 100, backgroundColor: "#5556a9"}}>
                   <CustomeHeader navigationProps={props} />
                  </View>
                ),
               
            }}
            component={Bag} name="Bag" />
            
           
        </SimpleStack.Navigator>
    )
}


export const MyNavUsers = (props) => {
    return (
        <SimpleStack.Navigator  
        screenOptions={{
            headerStyle: {
              backgroundColor: '#5556a9',
            },
            headerTintColor: '#fff',
          }}
        >
            <SimpleStack.Screen 
            options={{
                headerShown: true,
                header: () =>
                (
                  <View style={{ height: 100, backgroundColor: "#5556a9"}}>
                   <CustomeHeader navigationProps={props} />
                  </View>
                ),
               
            }}
            component={User} name="Users" />
            
           
        </SimpleStack.Navigator>
    )
}


export const MyNavMessage = (props) => {
    return (
        <SimpleStack.Navigator  
        screenOptions={{
            headerStyle: {
              backgroundColor: '#5556a9',
            },
            headerTintColor: '#fff',
          }}
        >
            <SimpleStack.Screen 
            options={{
                headerShown: true,
                header: () =>
        (
          <View style={{ height: 100, backgroundColor: "#5556a9"}}>
           <CustomeHeader navigationProps={props} />
          </View>
        ),
               
            }}
            component={Message} name="Message" />
            
           
        </SimpleStack.Navigator>
    )
}


export const MyNavNotification = (props) => {
    return (
        <SimpleStack.Navigator  
        screenOptions={{
            headerStyle: {
              backgroundColor: '#5556a9',
            },
            headerTintColor: '#fff',
          }}
        >
            <SimpleStack.Screen 
            options={{
                headerShown: true,
                header: () =>
        (
          <View style={{ height: 100, backgroundColor: "#5556a9"}}>
           <CustomeHeader navigationProps={props} />
          </View>
        ),
               
            }}
            component={Notification} name="Notification" />
            
           
        </SimpleStack.Navigator>
    )
}


