import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign'
import Ento from 'react-native-vector-icons/Entypo'
export default class IconNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      userSelected:[],
      data: [
   { id: 1, name:'Designer',title: <AntIcon name="codesquareo" size={25} />,color:'#f2d4fa' },
   { id: 2, name:'Developer',title: <AntIcon name="laptop" size={25}  />,color:'#c6d8f5'},
   { id: 3,name:'Doctor',title: <AntIcon name="sharealt" size={25} />,color:'#e6f5ef'},
   { id: 4,name:'Trainer',title: <AntIcon name="lock" size={25} /> ,color:'#c6d8f5'},
   { id: 5,name:'Teacher',title: <AntIcon name="qrcode" size={25} />,color:'#e6f5ef'},
   { id: 6,name:'Engineer',title: <AntIcon name="enter" size={25} />,color:'#e6f5c1'},
   { id: 7,name:'Manager',title: <AntIcon name="pushpino" size={25} />,color:'#c6d8f5' },
   { id: 8,name:'Builder',title: <AntIcon name="windowso" size={25} />,color:'#f2d4fa'},
   { id: 9,name:'More',title: <AntIcon name="barschart"  size={25} />,color:'#dbdbd9'},
   ]
    };
  }

   render() {
    return (
    
    
      
      <View style={styles.container}>  
      <View>
        <Text style={{fontWeight:'bold',fontSize:30,marginHorizontal:10,marginVertical:20}}>Find jobs</Text>
        </View>
        <View>
        <FlatList 
          data={this.state.data}
          numColumns={3}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            
              <View style={styles.cardContent}>
                <View style={{backgroundColor:item.color, width:80,height:80,alignItems: "center", justifyContent:"center",borderRadius: 10}}>
                <Text style={[styles.name,{}]}>{item.title}</Text>
                </View>
              
                <Text style={{paddingVertical:8,textAlign:"center", paddingRight: 20}}> {item.name}</Text>
              </View>

              
            )}}/>
            </View>
            </View>
            
            
           
    );
  }
}

const styles = StyleSheet.create({
  container:{

    flex:1,
    backgroundColor:"#fff",
    paddingHorizontal: 10
    
      },
    name:{

  },
  cardContent: {
    height:130,
    width:100,

    marginLeft: 20
  }
  
});
