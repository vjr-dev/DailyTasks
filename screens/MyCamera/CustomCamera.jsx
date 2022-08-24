import React from "react";
import { StyleSheet, View } from "react-native";
import { RNCamera } from "react-native-camera";

export default class CustomCamera extends React.Component {

    render() {

        return(
            <View style={styles.container}>
                <RNCamera
                  style={{flex: 1, alignItems: "center"}}
                  ref={ref => {
                    this.camera= ref
                  }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    }
})