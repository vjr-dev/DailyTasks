import { Link } from '@react-navigation/native';
import React from 'react';
import {View,Text,Image, StyleSheet,TextInput, TouchableOpacity,ImageBackground, ScrollView, KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyBtn from '../utils/MyBtn';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



export default class Home extends React.Component {
    constructor() {
        super()
    }

     gotoSignUp = () => {
    //     this.props.navigation.navigate('SignUp')
    //     console.log("Hello")
    this.props.navigation.navigate('SignUp')
     };
     gotoSignIn = () => {
        this.props.navigation.navigate('LoginScreen')

     }
    render() {
        return(
            <View style={{backgroundColor:"#0F52BA",flex:1}}>
                <View style={styles.container}>
                    <View>
                <Image source={require('../../../assets/rafiki.png')} style={styles.img}/>
                </View>
                <View style={styles.headerView}>
                <Text style={styles.headerTxt}>Welcome</Text>

                </View>
                <View style={styles.subHeaderView}>
                    <Text style={styles.subHeaderTxt}>Manage your expenses</Text>
                    <Text style={styles.subHeaderTxtTwo}>Seamlessly & intuitively</Text>
                </View>
                <View style={styles.signInSection}>
                   <MyBtn  btnView= {styles.signInBtn}>
                    <Image source={require('../../../assets/google.png')} style={styles.imgGmail}/>
                    <Text style={styles.signInBtnTxt}>Sign in with Google</Text>
                   </MyBtn>
                   <MyBtn onPress={this.gotoSignUp} btnView= {styles.createAccountBtn}>
                    <Text style={styles.createAccountBtnTxt}>Create an account</Text>
                   </MyBtn>
                </View>
                <View style={styles.footerSection}>
                    <Text style={styles.footerHeaderTxt}>Already have an account?</Text>
                    
                    <TouchableOpacity onPress={this.gotoSignIn}>
                    <Text style={styles.footerSubHeaderTxt}>
                    Sign In
                    </Text>
                    </TouchableOpacity>
            
                </View>
                </View>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
       
        justifyContent: "space-between",
        height:"90%"
    },
    img: {
        width: 300,
        height: 300,
       
        
    },
    imgGmail: {
        width: 14,
        height: 14,
        marginLeft: 20
    },
    signInBtn: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
    },
    signInBtnTxt: {
        marginLeft: 40,
        color:"#0F52BA",
        fontWeight: "bold",
    },
    createAccountBtn: {
        width: "100%",
        height: 50,
        borderWidth: 2,
        borderColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "center",
    },
    createAccountBtnTxt: {
        
        color:"#fff",
        fontWeight: "bold",
    },
    headerTxt: {
        fontSize: 30,
        fontWeight: "bold",
        color:"#fff"
    },
    subHeaderView:{
        justifyContent:"space-between",
        height:"6%"
    },
    subHeaderTxt: {
        color: "#fff",
        fontSize: 15,
    },
    subHeaderTxtTwo: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold"
    },
    signInSection: {
        justifyContent: "space-between",
        height: "20%"
    },
    footerHeaderTxt: {
        color: "#fff",

    },
    footerSection: {
        flexDirection: "row",
        justifyContent:"center"
    },
    footerSubHeaderTxt: {
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 5
    }
   
})