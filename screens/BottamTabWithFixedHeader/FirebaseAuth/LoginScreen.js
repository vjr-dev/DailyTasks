import React from 'react';
import { View,Text, Button } from 'react-native';


export default class LoginScreen extends React.Component {


    render() {

        return (
        <View>

            <Text>I am from Login Screen </Text>
            <Button
            title="Click Here"
            Onpress={() => this.navigation.navigate("MyNavIconNav")}
            />
        </View>

        )
    }
}