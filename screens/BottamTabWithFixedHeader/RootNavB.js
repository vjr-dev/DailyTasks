import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import IconNav from "./IconNav"
import Bag from "./Bag"
import CustomeHeader from "./CustomeHeader"

import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import CustomeDrawer from "./CustomeDrawer";

import { Button, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";


import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {MyNavIconNav, MyNavBag, MyNavUsers, MyNavMessage, MyNavNotification} from "./SimpleNav"
import LoginScreen from "./FirebaseAuth/LoginScreen";







const DrawerTab = createDrawerNavigator()


const RootDrawerTab = () => {

    return (
    <NavigationContainer>

        <DrawerTab.Navigator
            drawerContent={(props) => <CustomeDrawer {...props} />}
            screenOptions={
                
                {
                    drawerLabelStyle:{marginLeft: -10, fontSize: 15},
                    drawerActiveBackgroundColor:"#aa18ea",
                    drawerActiveTintColor: "#fff",
                    drawerInactiveTintColor: "#333"
                }
                
            }
        >
            {/* <DrawerTab.Screen component={RootNavB}/> */}
    
            <DrawerTab.Screen component={MyNavIconNav} name="MyNav"  
            options={{
                headerShown: false,
                drawerIcon: ({color}) => (
                    <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                )
                }} />
            <DrawerTab.Screen component={Bag} name="Bag"  options={{ drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                )
                }} />
            <DrawerTab.Screen component={LoginScreen} name ="LoginScreen" />
            <DrawerTab.Screen component={RootNavB} name="RootNavB" options={{headerShown: false,   drawerIcon: ({color}) => (
                    <Ionicons name="settings-outline" size={22} color={color} />
                )
                }} />
        


        </DrawerTab.Navigator>

    </NavigationContainer>

    )
    

}









const TabBottom=createBottomTabNavigator();

const RootNavB=()=>{
    return(
         <TabBottom.Navigator screenOptions={{
         tabBarActiveTintColor:'#5556a9',
         tabBarInactiveTintColor:'gray',
         tabBarShowLabel: false,
         
        }}
        //  tabBarActiveTintColor={'red'}
         >
            <TabBottom.Screen name="MyNavIconNav" component={MyNavIconNav}
             options={{
                headerShown: false,
                tabBarIcon: ({color}) => (
                    <FontAwesome name="safari" size={25} color={color}/>
                )
                }}/>
          <TabBottom.Screen name="MyNavBag" component={MyNavBag} 
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <FontAwesome name="shopping-bag" size={25} color={color}/>
            )
            }}  />

             <TabBottom.Screen name="MyNavNotification" component={MyNavNotification} 
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <Ionicons name="notifications" size={25} color={color}/>
            )
            }}  />

             <TabBottom.Screen name="MyNavUsers" component={MyNavUsers} 
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <FontAwesome name="user" size={25} color={color}/>
            )
            }}  />

<TabBottom.Screen name="MyNavMessage" component={MyNavMessage} 
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
                <MaterialIcon name="message" size={25} color={color}/>
            )
            }}  />
        
           
         </TabBottom.Navigator>
    )
}


export default RootDrawerTab