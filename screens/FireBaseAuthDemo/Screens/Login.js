import React from 'react';
import { View,Text, Button } from 'react-native';


export default class Login extends React.Component {


    render() {

        return (
        <View>

            <Text>I am from Login Screen </Text>
            <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
            />
        </View>

        )
    }
}