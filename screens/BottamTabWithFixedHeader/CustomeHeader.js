import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign'




export default class CustomeHeader extends React.Component {

    myToggleDrawer = () => {
        this.props.navigationProps.navigation.toggleDrawer();
    };

    render () {
        // console.log("props", this.props.navigationProps)

        return (
            <View  style={styles.container}>
                <TouchableOpacity onPress={() => this.myToggleDrawer()}>
            <View style={styles.leftIcon}>
                    <Image 
                    source={require('../../assets/menu.png')} 
                    style={{width:22,height:22}}
                     />
            </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('I am Searchbar')}>
            <View style={styles.leftIcon}>
                    <AntIcon name="search1" size={25} color="#fff" />
            </View>
                </TouchableOpacity>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    leftIcon: {
        
        width:40,
        height:40,
        backgroundColor:"#715eb1",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 29
    },

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})