import React from 'react';
import { Text, Button, StyleSheet, TouchableOpacity, View } from 'react-native';


class CustomButton extends React.Component  {

    render() {

    return (
        <>
        {/* <Button 
        title={this.props.CustomeTitle} 
        onPress={() => this.props.onPress()}
    
        /> */}
        <TouchableOpacity  >
            <View style={this.props.myBtn}>
                
            <Text style={this.props.mytxt}>{this.props.CustomeTitle} </Text>

            </View>
        </TouchableOpacity>
        </>
    )

    }
}

export default CustomButton;

