import React from "react";
import {View,Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default class AppList extends React.Component {
    
    
    
    render() {


        return(

              // for main part list with margin outer
              <TouchableOpacity onPress={this.props.onPress}>
              <View style={styles.container}>
             
             <View style={styles.imgContainer}>
                 <Image 
                 source={this.props.imageLink}
                 style={styles.img}
                 />
             </View>
             <View style={styles.descriptionContainer}>
             <View style={styles.footer}>
                 <Text style={styles.footerleftTxt}>{this.props.appName}</Text>
                 <Text style={styles.footerRightTxt}>:</Text>
             </View>
             

             </View>
             <View style={styles.subFooter}>
                 <Text style={styles.SFleftTxt}>{this.props.rating} *</Text>
                 <Text style={styles.SFrightTxt}>{this.props.cost}</Text>
             </View>
         </View>
         </TouchableOpacity>

        )

    }
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 110,
        margin: 10,
        
        justifyContent:"space-between",

        
    },
    img: {
        width: 64,
        height: 44
    },
    
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"       
    },
    footerleftTxt: {
        justifyContent: "flex-start",
        color: "black",
    },
    footerRightTxt: {
        justifyContent: "flex-end",
        color: "black",
    },

    subFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        height:25,
        
        
    
    },
    SFrightTxt: {
        color: "green",
    },
    SFleftTxt: {
        color: "gray"
    },
    descriptionContainer: {
        marginTop: 5
    }

})