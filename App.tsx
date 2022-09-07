import 'react-native-gesture-handler';
import React from "react";

import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';

const App = () => {
  // 'worklet'
  return (
    <NavigationContainer>
      {/* <MyStack/> */}
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>
    </NavigationContainer>
  )
}

export default App;