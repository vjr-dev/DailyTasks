import { Link } from '@react-navigation/native';
import React from 'react';
import {View,Text,Image, StyleSheet,TextInput, TouchableOpacity,ImageBackground, ScrollView, KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyBtn from '../utils/MyBtn';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export default class Dashboard extends React.Component {
    constructor() {
        super()
    }

    
    render() {
        return(
            <View style={{backgroundColor:"#0F52BA",flex:1}}>
                <View style={styles.container}>
                   <Text style={styles.mainTxt}>I am From Dashboard</Text>
                </View>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    
    },
   
    mainTxt: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "600"
    }

   
   
   
   
})