import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import IconNav from "./IconNav"
// import Bag from "./Bag"
// import CustomeHeader from "./CustomeHeader"

import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import CustomeDrawer from "../BottamTabWithFixedHeader/CustomeDrawer";

//import { Button, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CompanyUsers from "./CompanyUsers";
import CompanyAbout from "./CompanyAbout";


//import { useSafeAreaInsets } from 'react-native-safe-area-context';

//import {MyNavIconNav, MyNavBag, MyNavUsers, MyNavMessage, MyNavNotification} from "./SimpleNav"







const DrawerTab = createDrawerNavigator()


const CustomRootDrawerTab = () => {

    return (
    <NavigationContainer>

        <DrawerTab.Navigator
            drawerContent={(props) => <CustomeDrawer {...props} />}
        >
            {/* <DrawerTab.Screen component={RootNavB}/> */}
    
            <DrawerTab.Screen component={CompanyUsers} name="CompanyUsers"   />
            <DrawerTab.Screen component={CompanyAbout} name="CompanyAbout" options={{headerShown: false}}/>
        


        </DrawerTab.Navigator>

    </NavigationContainer>

    )
    

}












export default CustomRootDrawerTab