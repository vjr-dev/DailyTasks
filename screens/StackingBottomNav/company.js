import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView} from 'react-native'


export default class Company extends React.Component{
    
    render(){
        console.log("this.props>>",this.props)
        return(
            <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
              I am coming From Company
            </Text>
          </View>
    
        )
    }
}

const styles = StyleSheet.create({
//    container: {
//     backgroundColor: "yellow",
//    }
})