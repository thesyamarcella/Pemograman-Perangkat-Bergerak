import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import OnBoardScreen from './TugasPPB_Kel3/src/views/screens/OnBoardScreen';
import MainComponent from './TugasPPB_Kel3/src/views/screens/MainComponent';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='BoardScreen' component={OnBoardScreen} />
          <Stack.Screen name='Main' component={MainComponent} />
        </Stack.Navigator>
      </NavigationContainer>    
    )
  }
}
