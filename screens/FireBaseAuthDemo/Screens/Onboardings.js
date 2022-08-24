import React from 'react';
import { View,Text, TouchableOpacity, Image } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';



export default class Onboardings  extends React.Component {
    componentDidMount() {
        console.log("I am mounted after render")
    }
    handleClick() {
        console.log("gjj")
    }

    render() {

        return (
            <Onboarding
            onSkip={() => this.props.navigation.navigate("Login")}
            onDone={() => this.props.navigation.navigate("Login")}
            pages={[
              {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../../../assets/onboarding-img1.png')} />,
                title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
              },
              {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../../../assets/onboarding-img2.png')} />,
                title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
              },
              {
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../../../assets/onboarding-img3.png')} />,
                title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
              },
          
            ]}
          />
        )
    }
}