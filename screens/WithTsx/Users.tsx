import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'

import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Users extends React.Component {
  state = {
    data: [],

  };

  
  componentDidMount() {
    this.fetchData();
   // console.log("coming from did update")
  }
  fetchData() {


    AsyncStorage.getItem('token').then((value: any) => {
        console.log('my token', value)
       const loginAPI = `http://restapi.adequateshop.com/api/users?page=1`
       const AuthValue = 'Bearer'.concat(value);

       console.log("auth value after added bearer>>>",AuthValue)
    
    fetch(loginAPI, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${value}`
      },
    }).then(res => {
      res.json().then(result => {
        var mydata= result.data
       // console.log("result.data", mydata)
         this.setState({data: mydata},
             () => {
                // console.log("udated fetch==>",this.state.data)
             }
            );
      });
    }).catch((error) => console.log("error catched", error));
});
  }

  renderList = (item: any, index: any) => {
   console.log('render Item data -->', item.data);
    let {email, name, profilepicture} = item.item;
    return (
      <View style={styles.cardContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 20, marginLeft: 10}}>
            <Image
              source={{uri: profilepicture}}
              style={{height: 70, width: 70, borderRadius: 35}}
            />
          </View>
          <View style={{justifyContent: 'center', flex:1}}>
            <Text style={{fontSize: 18, fontWeight: "600"}}>
              {name}
            </Text>
            <Text style={{fontSize: 12}} >{email}</Text>
          </View>
          <TouchableOpacity style={{justifyContent: 'center',}}>
          <View style={{ height:20, width:20, marginLeft:40}} >
          <Entypo name="dots-three-vertical" size={18} color="gray" />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    );

    
  };

  render() {
    return (
      <View>
        <View style={{marginHorizontal: 10, marginTop: 20}}>
          <FlatList 
          data={this.state.data}
         // onEndReachedThreshold={1}
         // onEndReached={() => this.setState((prevState) => ({'page': prevState.page+1}))}
           renderItem={this.renderList}
           showsVerticalScrollIndicator={false}
           />

           {/* <Button
           title="Increment"
           onPress={() => this.setState({'page': this.state.page+1})}
           />
           <Text>{this.state.page}</Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardContainer: {
      backgroundColor: '#fff',
      margin: 8,
      padding: 10,
      height: 90,
      borderRadius: 10,
    },
  });