import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons'


export default class CustomeDrawer extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...this.props}
          contentContainerStyle={{backgroundColor: '#8200d6'}}>
          <ImageBackground
            source={require('../../assets/menu-bg.jpeg')}
            style={{padding: 20}}>
            <Image
              source={require('../../assets/user-profile.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text style={{color: '#fff', fontSize: 18,fontWeight: "600"}}>Jhone Doe</Text>
          </ImageBackground>
          <View style={{flex:1, backgroundColor: "#fff", paddingTop:10}}>
            <DrawerItemList {...this.props} />
          </View>
        </DrawerContentScrollView>

        <View style={{padding: 20, borderTopWidth:1, borderTopColor: '#ccc'}}>
            <TouchableOpacity style={{paddingVertical:15}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Ionicons name="share-social-outline" size={22} />
          <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 5 }}>Tell a Friend</Text>
          </View>
          </TouchableOpacity>
        

            <TouchableOpacity style={{paddingBottom:15,}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Ionicons name="exit-outline" size={22} />
          <Text style={{fontSize: 15, fontWeight: "600", marginLeft: 5 }}>Sign Out</Text>
          </View>
          </TouchableOpacity>
          </View>
        
      </View>
    );
  }
}
