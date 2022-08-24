import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import About from "./About";
import Contact from "./Contact";
import Company from "./company";
import AntIcon from 'react-native-vector-icons/AntDesign'
import Login from "./NormalNavStack/Login";
import Services from "./Services";

const BottomTab=createBottomTabNavigator();

const NavigateBottom=()=>{
    return(
        
         <BottomTab.Navigator screenOptions={{headerShown:false,
            
         tabBarActiveTintColor:'blue',
         tabBarInactiveTintColor:'voilet'
         
        }}
    
         >
            {/* <BottomTab.Screen name="About" component={About} 
            
            options={{
                headerShown:false,
                tabBarLabel:"About",
                tabBarIcon: ({color}) => (
                    <AntIcon name="rightcircle" size={30} color={color}/>
                )
        }}
            
            /> */}

            <BottomTab.Screen name="DashSatck" component={DashSatck}
             options={{
                headerShown:false,
                tabBarLabel:"About",
                tabBarIcon: ({color}) => (
                    <AntIcon name="rightcircle" size={30} color={color}/>
                )
        }}
            
            />
            <BottomTab.Screen name="Contact" component={Contact} 
            options={{
                tabBarLabel:"Contact",
                tabBarIcon: ({color}) => (
                    <AntIcon name="rightcircle" size={30} color={color}/>
                )
            }}
            />
            <BottomTab.Screen name="Company" component={Company}
            options={{
                tabBarLabel:"Company",
                tabBarIcon: ({color}) => (
                    <AntIcon name="rightcircle" size={30} color={color}/>
                )
            }}
            />

         </BottomTab.Navigator>
    
    )
}

const DashStack1 = createNativeStackNavigator()

const DashSatck = () => {
    return (
        <DashStack1.Navigator>
                 <DashStack1.Screen component={About} name="About" />
                 <DashStack1.Screen name="Services" component={Services}/>
             <DashStack1.Screen component={Login} name="login" />
       
           

        </DashStack1.Navigator>
    )
}



const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false}}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="Dashboard" component={NavigateBottom} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStackScreen