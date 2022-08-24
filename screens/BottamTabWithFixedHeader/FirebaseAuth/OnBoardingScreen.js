import React from 'react';
import { View,Text } from 'react-native';


export default class OnBoardingScreen  extends React.Component {


    render() {

        return (
        <View>

            <Text>I am from Onboarding Screen </Text>
            <Button
            title="Click Here"
            Onpress={() => this.navigation.navigate("MyNavIconNav")}
            />
        </View>

        )
    }
}