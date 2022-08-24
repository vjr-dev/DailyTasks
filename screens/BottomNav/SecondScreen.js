import React from "react";
import {View,Text,Button, StyleSheet, Image, ScrollView} from 'react-native'


export default class SecondScreen extends React.Component{
    
    render(){
        console.log("this.props>>",this.props)
        return(
            <ScrollView>
            <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
            <Image source={this.props.route.params.imageLink} style={styles.img}/>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.textHeader}>{this.props.route.params.name}</Text> 
            <Text style={styles.textDesc}>{this.props.route.params.description}</Text> 

            <Text style={styles.textFooter}>rating {this.props.route.params.rating}*</Text> 
            </View>

            </View>


           
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: "white",
        elevation: 10,
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical:20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,

    },
    innerContainer: {
        flexDirection: "row",
        justifyContent:"space-around",
        marginBottom: 10
    },

    img: {
        width: 50,
        height: 50,
    },
    imageContainer: {
        borderRadius: 40,
        justifyContent: "center"
    },
    textContainer: {
        justifyContent: "space-between",
        height: 70,
        width:200

    },
    textHeader: {
        color: "black",
        fontWeight: "bold",
        marginBottom: 5,
    },
    textDesc: {
        color: "#535454",
        marginBottom: 5,

    },
    textFooter: {
        color: "black",

    },
})