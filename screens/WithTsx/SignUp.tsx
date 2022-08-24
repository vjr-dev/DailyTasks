import React from 'react';
import {View, Text, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

interface PropsType {
    navigation: any,
}

interface StateType {
    name: string,
    email: string,
    password: string
}
export default class SignUp extends React.Component<PropsType,StateType> {
    constructor(props: PropsType) {
        super(props)
    }

    state = {
        name: "",
        email: "",
        password: ""
    }

    handleSubmit () {
        const {name, email, password} = this.state

        const setData = {
            "name": name,
            "email": email,
            "password": password
        }
        fetch("http://restapi.adequateshop.com/api/authaccount/registration", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(setData)
        })
        .then((res) => res.json())
        .then((result) => {
            console.log("result>>>", result)
            if(result?.data) {
                this.props.navigation.navigate("Login")
                this.setState({
                    name: "",
                    email: "",
                    password: ""
                })
            }
        })
        .catch(error => console.log("catched error", error))
    }
    render() {
        return(
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{marginBottom: 30, fontSize: 30, fontWeight: "700"}}>SignUp Screen</Text>
                <View style={{width: "80%", borderBottomWidth: 1,paddingBottom:5, margin: 20}}>
                <TextInput
                placeholder='Enter your name'
                onChangeText={(text) => this.setState({name: text})}
                autoCapitalize="none"
                />
                </View>
                <View style={{width: "80%", borderBottomWidth: 1,paddingBottom:5,margin: 20}}>
                <TextInput
                placeholder='Enter your Email'
                onChangeText={(text) => this.setState({email: text})}
                autoCapitalize="none"
                />
                </View>
                <View style={{width: "80%", borderBottomWidth: 1,paddingBottom:5,margin: 20}}>
                <TextInput
                placeholder='Enter your Password'
                onChangeText={(text) => this.setState({password: text})}
                autoCapitalize="none"
                secureTextEntry
                />
                </View>
                <Button
                title='Go to Login'
                onPress={() => this.handleSubmit()}
                />
            </View>
        )
    }
}