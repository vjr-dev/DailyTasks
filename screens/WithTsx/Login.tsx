import React from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


interface PropsType {
    navigation: any,
}

interface StateType {

    email: string,
    password: string
}

export default class Login extends React.Component<PropsType, StateType> {

    constructor(props: PropsType) {
        super(props)
    }

    state = {

        email: "",
        password: ""
    }

    storeData = async (token: any) => {
        try {
          await AsyncStorage.setItem('token',token)
          console.log("value of token is>>>> ",token)
        } catch (e) {
                console.log("error from async part", e)
        }
      }
    handleSubmit() {
        const { email, password } = this.state

        const setData = {

            "email": email,
            "password": password
        }
        fetch("http://restapi.adequateshop.com/api/authaccount/login", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setData)
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("result>>>", result)
                if (result.code==1) {
                    Alert.alert(result.message,'', [{text: 'OK'}] )
                }else if(result.code==0){
                 // console.log("result>>",result.data.Token)
                  this.storeData(result.data.Token)
                  Alert.alert(result.message,'', 
                  [{text:'OK', onPress:()=>this.props.navigation.navigate('Users')}])
      
                  //  this.props.navigation.navigate("Users")
                    this.setState({

                        email: "",
                        password: ""
                    })
                }
            })
            .catch(error => {
                console.log("catched error", error)
                Alert.alert('invalid data');
            })
    }
    render() {
        return (



            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ marginBottom: 30, fontSize: 30, fontWeight: "700" }}>Login Screen</Text>

                <View style={{ width: "80%", borderBottomWidth: 1, paddingBottom: 5, margin: 20 }}>
                    <TextInput
                        placeholder='Enter your Email'
                        onChangeText={(text) => this.setState({ email: text })}
                        autoCapitalize="none"
                    />
                </View>
                <View style={{ width: "80%", borderBottomWidth: 1, paddingBottom: 5, margin: 20 }}>
                    <TextInput
                        placeholder='Enter your Password'
                        onChangeText={(text) => this.setState({ password: text })}
                        autoCapitalize="none"
                        secureTextEntry
                    />
                </View>
                <Button
                    title='Go to Users'
                    onPress={() => this.handleSubmit()}
                />
            </View>

        )
    }
}