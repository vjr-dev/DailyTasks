import 'react-native-gesture-handler';

import React from 'react';
import {Node} from 'react';
import {

  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import CustomStatusBar from './components/CustomStatusBar';
import RootStack from './screens/appDemo/AppNav';
import Home from './screens/appDemo/Homescreen/Home';
import BottomNav from './screens/BottomNav/BottomNav';
import Demo from './screens/Demo';
import LoginScreen from './screens/appDemo/Loginscreen/LoginScreen';
//import Signup from './screens/appDemo/Signupscreen/Signup';
import NavigateBottom from './screens/StackingBottomNav/NavigateBottom';
import RootDrawerTab from './screens/BottamTabWithFixedHeader/RootNavB';
import CustomRootDrawerTab from './screens/customeSidebar/Drawer';
import NavRoot from './screens/FireBaseAuthDemo/NavRoot';
import Onboarding from './screens/FireBaseAuthDemo/Screens/Onboardings';
import FirebaseAppRoutes from './screens/FireBaseAuthDemo/Navigation/AuthStack'
import Providers from './screens/FireBaseAuthDemo/Navigation/Index';

import Signup from './screens/PostData/Signup';
import AppStack from './screens/PostData/AppStack';
import Hello from './components/Hello';
import MainNav from './screens/WithTsx/MainNav';
// import CustomCamera from './screens/MyCamera/CustomCamera';




const App = () => {

  

  return (
    
    
    <SafeAreaProvider>
   
    <CustomStatusBar backgroundColor="#0F52BA"/> 
   {/* <RootStack/> */}
   {/* <BottomNav/> */}
   {/* <LoginScreen/> */}
   {/* <Signup/> */}
   {/* <NavigateBottom/> */}
   {/* <RootDrawerTab/> */}
   {/* <CustomRootDrawerTab/> */}
   {/* <NavRoot/> */}
   {/* <Onboarding/> */}
   {/* <FirebaseAppRoutes/> */}
   {/* <Providers/> */}
   {/* <Signup/> */}
   {/* <AppStack/> */}
    {/* <CustomCamera/> */}
    {/* <Demo/> */}
    {/* <Hello/> */}
    <MainNav/>
     </SafeAreaProvider>
   
  
  );
};

const styles = StyleSheet.create({
  appContainer: {
  
    height: "100%",
    width: "100%",
    
  }

});

export default App;
