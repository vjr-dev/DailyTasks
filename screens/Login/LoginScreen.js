import React from 'react';
import {View,Text,Image, StyleSheet,TextInput, TouchableOpacity,ImageBackground, ScrollView, KeyboardAvoidingView} from 'react-native';
import CustomButton from '../../components/CustomButton';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default class LoginScreen extends React.Component {
    render() {
        return(<>
        
         {/* <ImageBackground source={require("../../assets/logImg.jpg")} resizeMode="cover" style={{flex:1}}> */}

                <KeyboardAvoidingView style={{flex:1}}   behavior={Platform.OS=='ios' ? "padding" : undefined}>
                    <ScrollView 
                    contentContainerStyle={{flexGrow:1}}
                    bounces="flase">

            <View style={styles.container}>
            <Text style={styles.txtHeader}>Sign in</Text>

                <View style={styles.loginContainer}>
                    <View style={styles.viewHeader}>
                    
                    </View>
                    <View style={styles.loginInputArea}>
                    <View style={styles.containerEmail}>
                        <View style={styles.emailView}>
                        <Text style={styles.txtEmail}>Email</Text>
                        </View>
                        <TextInput
                        style={styles.inputTxt}
                        placeholder='Your Email id'
                        />
                    </View>
                    <View style={styles.containerPassword}>
                        <View style={styles.passwordView}>
                        <Text style={styles.txtPassword}>Password</Text>
                        </View>
                        <TextInput
                          style={styles.inputTxt}
                          placeholder='Password'
                        />
                    </View>
                
                    <View style={styles.containerForgetPass}>
                        <Text style={styles.txtForgetPass}>Forget Password?</Text>
                    </View>
                    </View>
                
                    <View style={styles.loginActionArea}>
                        
                        <CustomButton  CustomeTitle="Login" myBtn={styles.loginBtn} mytxt={styles.loginBtnTxt}/>
                    </View>
                  

              
                   
                </View>
            </View>
            </ScrollView>
            </KeyboardAvoidingView>
                {/* </ImageBackground> */}
                
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    //     height: "100%",
    // width: "100%",
   flex: 1,
   backgroundColor: "#0F52BA",

     //   justifyContent: "flex-end",
        // backgroundColor: "#D2DADA"
      
    },
    loginContainer: {
        backgroundColor: "#fff",
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        paddingBottom: 10,
        height: "100%",
        marginTop: "20%",
        // backgroundColor: "gray",
    
    },
    txtHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginTop: "20%",
        marginLeft: 20
    },
    txtEmail: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 20,
    },
    emailView: {
        marginBottom: 20,
    
    },
    passwordView: {
        marginBottom: 20,
    },
    txtPassword: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 20,
    },
    inputTxt: {
    
        borderBottomWidth: 1,
    },
    loginInputArea: {
        margin: 30,
        justifyContent:"space-evenly",
        height: 200,
       
    },
    containerForgetPass: {
        alignItems:"flex-end",
        marginTop:20,
    },  

    
    containerEmail: {
        marginBottom: 20,
    },

    containerPassword: {

    },
    loginBtn: {
        width: 300,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#0F52BA",
       
    },
    loginBtnTxt: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        marginVertical: 8,
        fontWeight: "500",
        
    },

    loginActionArea: {
        alignItems: "center",
        marginTop: 10,
    },

    signUpTxt: {
        textAlign: "center",
    
    },
    txtForgetPass: {
        fontWeight: "500",
    },
    otherOption: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 300,
        height: 20,
    
        marginTop: 20

    },

    otherOptionLine: {
        width: 100,

        borderWidth: 1,
        borderColor: "gray",

    },

    otherOptionLineRight: {
        width: 110,
        borderWidth: 1,
        borderColor: "gray",
    
    },
    

    shareIconContainer: {
        flexDirection: "row",
        justifyContent: "center",
       
        
    },

    shareIconView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        shadowColor: "#171717",
        shadowOffset: {width: -2,height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        
    },

    shareIconTxt: {
        marginVertical: 20,
        marginHorizontal: 10
    },

    viewHeader: {
        marginTop: 40,
        marginLeft: 20,
    },
    signUpView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    }


})