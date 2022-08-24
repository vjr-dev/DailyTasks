import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native'


export default class Signup extends React.Component {

    constructor() {
        super()
    }
state = {
    name: "",
    email: "",
    password: ""
}
// componentDidMount() {
//     console.log("my props", this.props)
// }
handleSubmit() {
    const {name, email, password} = this.state
    const setData = {
        "name": name,
        "email": email,
        "password": password
    }
    // console.log("state value", this.state)
    fetch("http://restapi.adequateshop.com/api/authaccount/registration", {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(setData)
})
.then((res) => res.json())
.then((result) => {
    console.log("result>>", result)
    if(result?.data) {
        this.props.navigation.navigate("SignIn")
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
        
        return (

            <View style={{flex: 1, alignItems: "center", justifyContent:"center", padding: 20}}>
                <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(txt) => this.setState({name: txt})}
                />
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
                title="Submit"
                onPress={() => this.handleSubmit()}
                />
                  <Button
                title="Goto Login"
                onPress={() =>  this.props.navigation.navigate("SignIn")}
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