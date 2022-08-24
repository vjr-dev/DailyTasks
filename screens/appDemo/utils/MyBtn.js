import React from 'react';
import { TouchableOpacity, View } from 'react-native';


function MyBtn (props) {


    return (
    
        <TouchableOpacity onPress={() =>props.onPress()} >
            <View style={props.btnView}>
                
           {props.children}

            </View>
        </TouchableOpacity>

    )

    }


export default MyBtn;

