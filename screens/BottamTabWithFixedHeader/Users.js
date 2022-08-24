import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'


export default class Users extends React.Component {
  state = {
    data: [],
    page: 1,
  };

  componentDidMount() {
    this.fetchData();
   // console.log("coming from did update")
  }
  componentDidUpdate(preProps,preState) {
        if(this.state.page !== preState.page){
          //  console.log("on Condition pre state",preState.page)
          this.fetchData()
        }
       // console.log("preProps", preProps)
       // console.log("preState", preState)
  }
  fetchData() {
    console.log("mystate", this.state.page)
    fetch(`https://reqres.in/api/users?page=${this.state.page}`, {
      method: 'GET',
    }).then(res => {
      res.json().then(result => {
        var mydata= result.data
        var someArr = this.state.data.concat(mydata)
        console.log("result.data", someArr)
         this.setState({data: someArr},
             () => {
                 console.log("udated fetch==>",this.state.data)
             }
            );
      });
    });
  }

  renderList = (item, index) => {
   // console.log('render Item data -->', item);
    let {email, first_name, last_name, avatar} = item.item;
    return (
      <View style={styles.cardContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 20, marginLeft: 10}}>
            <Image
              source={{uri: avatar}}
              style={{height: 70, width: 70, borderRadius: 35}}
            />
          </View>
          <View style={{justifyContent: 'center', flex:1}}>
            <Text style={{fontSize: 18, fontWeight: "600"}}>
              {first_name} {last_name}
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
          onEndReachedThreshold={1}
          onEndReached={() => this.setState((prevState) => ({'page': prevState.page+1}))}
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