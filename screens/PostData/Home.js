import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native'


export default class SignIn extends React.Component {




    render() {
        
        return (

            <View style={{flex: 1, alignItems: "center", justifyContent:"center", padding: 20}}>
                
                 <Text>HOME components</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    input: {
        marginVertical: 20,
        borderWidth: 1,
        width: "100%",
        height: "10%"
    }
})