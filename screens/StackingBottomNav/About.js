import React from 'react';
import {View, Text, Button, Image, StyleSheet, FlatList} from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
          I am coming From About
        </Text>

        <View style={{backgroundColor:"#fff",}}>
        <Button 
            title="LOGOUT"
            onPress={() =>this.props.navigation.navigate("login")}
            
            />
        </View>
        <View style={{backgroundColor:"#fff", marginTop: 40}}>
        <Button 
            title="Services"
            onPress={() =>this.props.navigation.navigate("Services")}
            
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'blue',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
});
