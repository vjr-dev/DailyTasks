import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView} from 'react-native'


export default class Login extends React.Component{
    
    render(){
        console.log("this.props>>",this.props)
        return(
            <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
              I am coming From Login
            </Text>

            <Button 
            title="GO TO DASHBOARD"
            onPress={() =>this.props.navigation.navigate("Dashboard")}
            
            />
            
          </View>
    
        )
    }
}

const styles = StyleSheet.create({
//    container: {
//     backgroundColor: "yellow",
//    }
})