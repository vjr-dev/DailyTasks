import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


interface PropsType {
    navigation: any,
}

interface StateType {

    email: string,
    password: string
}

export default class Splash extends React.Component<PropsType, StateType> {


   
    render() {
        return (



            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginBottom: 30, fontSize: 30, fontWeight: "700" }}>Splash Screen</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text>Goto Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Goto SignUp</Text>
                </TouchableOpacity>

                           </View>

        )
    }
}