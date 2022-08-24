import React from "react";
import {View,Text,Button} from 'react-native'


export default class Contact extends React.Component{
    render(){
        
        return(
            <>
                <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          I am coming From Contact
        </Text>
      </View>
            </>
        )
    }
}