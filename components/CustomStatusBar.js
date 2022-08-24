import React from 'react'

import {StatusBar, View} from 'react-native'

import {useSafeAreaInsets}from 'react-native-safe-area-context'

export default  CustomStatusBar = (
  {
      backgroundColor,
    barStyle = "light-content"
}
) => {
    const inset = useSafeAreaInsets();
    return (
        <View style={{height: inset.top, backgroundColor}}>
            <StatusBar
            animated={true}
            backgroundColor={backgroundColor}
            barStyle={barStyle}
            />
        </View>
    )
}