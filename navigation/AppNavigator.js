import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from 'navigation/MainNavigator'
import NavigationService from 'navigation/NavigationService'
import { Colors } from 'constants'

const Stack = createStackNavigator()

const MyTheme = {
  colors: {
    background: Colors.white
  },
};

const Switch = (
  <Stack.Navigator initialRouteName="App" screenOptions={{ headerMode: 'none' }} headerMode='none'>
    <Stack.Screen name="App" component={MainNavigator}/>
  </Stack.Navigator>
)

export default () => (
  <NavigationContainer ref={NavigationService.setTopLevelNavigator} theme={MyTheme}>
    {Switch}
  </NavigationContainer>
)
