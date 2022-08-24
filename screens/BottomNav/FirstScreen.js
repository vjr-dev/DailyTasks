import React from "react";
import {View,Text,Button, Image, StyleSheet, FlatList} from 'react-native'
import AppList from "./AppList";
import {AppListData} from "./data";


export default class FirsScreen extends React.Component{
    state=[...AppListData]
    renderItemComponent = (item) => (
        <AppList 
        appName={item.item.name}
        rating={item.item.rating}
        cost={item.item.cost}
        imageLink={item.item.imageLink}

        onPress={
            () =>this.props.navigation.navigate(
                'SecondScreen',
                {
                    name:item.item.name,
                    description: item.item.description,
                     rating: item.item.rating,
                     imageLink: item.item.imageLink
                    }
                    )
                }
                />

    )
    render(){
        console.log("this.props>>>",this.props)
        this.state.map((value) => console.log("this.props>>>",value.imageLink))
      // console.log(AppListData)
        
        return(
            // for bg color
            <View style={styles.container}>
                    {/* for margin padding */}
                
                    <View>
                         {/* for header part */}
              <View style={styles.header}>
                 <Text style={styles.headerLeftTxt}>Recommended for You</Text>
                 <Text style={styles.headerRightTxt}>More</Text>
              </View>

             
              <FlatList
              horizontal={true}
              data={this.state}
              renderItem={item => this.renderItemComponent(item)}
              keyExtractor={item => item.id.toString()}
              />

                      
                    </View>
                
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerLeftTxt: {
        color: "gray",
        fontWeight: "bold"
    },
    headerRightTxt: {
        color: "green",
        fontWeight: "bold"
    },

    container: {
        backgroundColor: "white",
        elevation: 10,
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical:20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 20
    }
})