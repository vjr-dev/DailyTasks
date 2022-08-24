import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native'


export default class SignIn extends React.Component {
state = {
    
    email: "",
    password: ""
}

handleSubmit() {
    const {email, password} = this.state
    const setData = {
    
        "email": email,
        "password": password
    }
    console.log("state value", this.state)
    fetch("http://restapi.adequateshop.com/api/authaccount/login", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(setData)
})
.then((res) => res.json())
.then((result) => {
    console.log("result>>", result)
    if(result?.data){
        this.props.navigation.navigate("Home")

    }
})
.catch(error => console.log("catched error", error))
}

    render() {
        
        return (

            <View style={{flex: 1, alignItems: "center", justifyContent:"center", padding: 20}}>
                
                 <TextInput
                 style={styles.input}
                placeholder="Email"
                onChangeText={(txt) => this.setState({email: txt})}
                
                />
                 <TextInput
                 style={styles.input}
                placeholder="Password"
                onChangeText={(txt) => this.setState({password: txt})}
                />
                <Button
                title="Sign In"
                onPress={() => this.handleSubmit()}
                />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    input: {
        marginVertical: 20,
        borderWidth: 1,
        width: "100%",
        height: "10%"
    }
})