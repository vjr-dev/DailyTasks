import React from "react";
import {View,Text,Button} from 'react-native'


export default class ThirdScreen extends React.Component{
    render(){
        console.log("thirdscreen",this.props)
        return(
            <>
            <Text>Third Screen</Text>
            {/* <Text>{this.props.route.params.fullname}</Text> */}
            <Button
            title="Go Back"
            onPress={()=>this.props.navigation.goBack()}
            />
            {/* <Button
            title="First Screen go"
            onPress={()=>this.props.navigation.navigate('FirsScreen')}
            /> */}
            </>
        )
    }
}