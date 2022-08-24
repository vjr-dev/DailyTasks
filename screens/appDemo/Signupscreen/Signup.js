import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView, KeyboardAvoidingView, TouchableOpacity, TextInput} from 'react-native'


export default class SignUp extends React.Component{

    state= {
        disabled: true,
        name: "",
        nameIsValid: null,
        nameError: "",
        email: "",
        emailIsValid: null,
        password: "",
        passwordIsValid: null,
        passwordError:"",
        emailError: ""
    }

     submitData() {
       const {name, email, password} = this.state
        
        const data = {
            "name" : name,
            "email": email,
            "password": password
        }
       // console.table("data we posting", data)
    
   

fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
    method: 'POST',
    headers: {
      //Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   
  })
  .then((res) => res.json())
        .then((result) => {
            console.log("result -->",result)

            if(result?.data) {
                alert(result?.message)
                this.props.navigation.navigate("LoginScreen")
                this.setState({
                    name: "",
                    email: "",
                    password: ""
                })
            } else if(result?.data == null) {
                alert(result?.message)

            } 
        })
        .catch((error) => {
            console.log("error catched-->",error)
        })
  
  
  
  
     }
     isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
   
    onEmailBlur() {
        const errorText = "please enter your email";
        const  valFalse= false;
        const valTrue = true;
       // console.log("onemailBlur-->",this.state.email)
        const email = this.state.email
        if(this.state.email.length === 0) {
    
            return  this.setState({emailError: errorText,emailIsValid: valFalse})
        }
        else if(!this.isValidEmail(email) ) {
           
            return this.setState({emailError:"enter valid email address", emailIsValid: valFalse})
        }
        else {
            return  this.setState({emailError:"",emailIsValid: valTrue})

        }

    }

    

    onPasswordBlur() {
        const errorText = "please enter your password";
        const  valFalse= false;
        const valTrue = true;
        if(this.state.password.length === 0) {
    
            return  this.setState({passwordError: errorText,passwordIsValid: valFalse})
        }
        else if(this.state.password.length > 0 ){
            return  this.setState({passwordError:"",passwordIsValid: valTrue, disabled: valFalse })

        }
        

    }

    // onMobileBlur() {
    //     const errorText = "please enter your mobile no";
    //     const  valFalse= false;
    //     const valTrue = true;
    //     if(this.state.name.length === 0) {
    
    //         return  this.setState({mobileError: errorText,mobileIsValid: valFalse})
    //     }
    //     else {
    //         return  this.setState({mobileError:"",mobileIsValid: valTrue,})

    //     }
    // }

    onNameBlur() {
        const errorText = "please enter your name";
        const  valFalse= false;
        const valTrue = true;
        if(this.state.name.length === 0) {
    
            return  this.setState({nameError: errorText,nameIsValid: valFalse})
        }
        else {
            return  this.setState({nameError:"",nameIsValid: valTrue,})

        }
    }
    
    
    render(){
    
        return(
            <KeyboardAvoidingView style={{flex:1}}   behavior={Platform.OS=='ios' ? "padding" : undefined}>
            <ScrollView 
            contentContainerStyle={{flexGrow:1}}
            bounces="flase">
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTxt}>Welcome</Text>
                        <Text style={styles.SubHeaderTxt}>Hello there, Sign Up to continue!</Text>
                    </View>





                {/* <Form/> */}
                <View style={styles.formContainer}>
            
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTagName}>Full Name</Text>
                    <View style={styles.txtInputContainer}>
                    <TextInput
                    style={styles.emailField}
                    placeholder="Enter your name"
                   onBlur={() => this.onNameBlur()}
                    onChangeText={(text) => this.setState({name:text})}
                    autoCapitalize = "none"
                  
                    />

                    
                    {this.state.nameIsValid === null ?  (<Image
                    style={{width:20,height:20, marginRight: 20}}/>) : this.state.nameIsValid ? ( <Image
                    style={{width:20,height:20, marginRight: 20}} 
                    source={require("../../../assets/check.png")}
                    />) : ( <Image
                    style={{width:20,height:20, marginRight: 20}} 
                    source={require("../../../assets/cross.png")}
                    />)}
                   
                    </View>
                    <Text style={styles.errorMessage}>{this.state.nameError}</Text>
                </View>
              
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTagName}>Username or email</Text>
                    <View style={styles.txtInputContainer}>
                    <TextInput
                    style={styles.emailField}
                    placeholder="Enter your username or email"
                   onBlur={() => this.onEmailBlur()}
                    onChangeText={(text) => this.setState({email:text})}
                    autoCapitalize = "none"
                  
                    />

                    
                    {this.state.emailIsValid === null ?  (<Image
                    style={{width:20,height:20, marginRight: 20}}/>) : this.state.emailIsValid ? ( <Image
                    style={{width:20,height:20, marginRight: 20}} 
                    source={require("../../../assets/check.png")}
                    />) : ( <Image
                    style={{width:20,height:20, marginRight: 20}} 
                    source={require("../../../assets/cross.png")}
                    />)}
                    
                   
                    </View>
                    <Text style={styles.errorMessage}>{this.state.emailError}</Text>
                </View>

             


                <View style={styles.inputContainer}>
                    <Text style={styles.inputTagName}>Password</Text>
                    <View style={styles.txtInputContainer}>
                    <TextInput
                    style={styles.emailField}
                    placeholder="Enter your password"
                   onBlur={() => this.onPasswordBlur()}
                    onChangeText={(text) => this.setState({password:text})}
                   secureTextEntry={true}
                   autoCapitalize = "none"
                    />


                    {this.state.passwordIsValid === null ?  (<Image
                    style={{width:20,height:20, marginRight: 20}}/>) : this.state.passwordIsValid ? ( <Image
                    style={{width:20,height:20, marginRight: 20}} 
                    source={require("../../../assets/check.png")}
                    />) : ( <Image
                    style={{width:20,height:20, marginRight: 20}} 
                    source={require("../../../assets/cross.png")}
                    />)}
                    </View>
                    <Text style={styles.errorMessage}>{this.state.passwordError}</Text>
                </View>
                <View>
                    <TouchableOpacity  onPress={() => this.submitData()} disabled={this.state.disabled} >
                        <View style={[styles.btnView,{opacity: this.state.disabled ? 0.2 : 1}]}>
                            <Text style={styles.btnTxt}>Signup</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </View>






                <View style={styles.footerContainer}>
                <Text style={styles.footerTxt}>already have an account? </Text>
                <Text style={styles.footerTxtSignUp}>Sign In </Text>

                </View>
                </View>
                <View style={styles.upperSection}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <View  style={styles.imgBackButton}>
                <Image 
                source={require("../../../assets/backXL.png")}
                style={styles.img}
                />
                </View>
                </TouchableOpacity>
                <View style={styles.txtContainer}>
                    <Text style={styles.signIn}>Sign Up</Text>
                    </View>
                </View>

            </View>
            </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0F52BA",
        flex: 1,
        flexDirection:"column-reverse",
        justifyContent: "space-between"
    },

    innerContainer: {
        height: "75%",
        width: "100%",
        backgroundColor: "#fff",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
       
    },
    img: {
        width: 30,
        height: 30
    },
    signIn: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff"
    },
    upperSection: {
        marginTop: 20,
        paddingLeft: 20
    },
    txtContainer: {
        marginTop: 30
    },
    headerTxt: {
        color: "black",
        fontWeight: "bold",
        fontSize: 25,
    },
    headerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    footerContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        marginTop: 40,
        
    },
    footerTxtSignUp: {
        color: "#0F52BA",
        fontWeight: "bold",
    },
    emailField: {
        borderRadius: 40,
        paddingLeft: 20,
        width: "90%",
        height: 45,
        
    },
    txtInputContainer: {
        backgroundColor: "#F4F9F9",
        borderRadius: 40,
        marginTop: 10,
        height: 45,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
        
    },
    formContainer: {
        //marginLeft: 30,
        marginHorizontal: 25
    },
    inputTagName: {
        marginLeft: 10
    },
    errorMessage: {
        color: "red",
        fontSize: 10,
        marginLeft: 30,
        
    },
    btnTxt: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    btnView: {
        backgroundColor: "#0F52BA",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 2
    }
})