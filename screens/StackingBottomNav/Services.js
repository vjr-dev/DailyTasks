import React from 'react';
import {View, Text, Button, Image, StyleSheet, FlatList} from 'react-native';

export default class Services extends React.Component {
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
          I am coming From Services
        </Text>

        <View style={{backgroundColor:"#fff",}}>
        <Button 
            title="GO TO LOGIN"
            onPress={() =>this.props.navigation.navigate("login")}
            
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
