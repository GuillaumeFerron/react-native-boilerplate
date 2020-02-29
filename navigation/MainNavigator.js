import React from 'react'
import { Platform } from 'react-native'
import { Colors } from 'constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { TabBarIcon } from 'components'
import Home from 'screens/main/Home'
import HomeDebug from 'screens/debug/HomeDebug'

const tabBarOptions = {
  style: {
    backgroundColor: Colors.white
  }
};

const HomeHeaderConfig = {
  title: '',
  headerShown: true,
  headerTransparent: true,
  headerTintColor: Colors.white,
}

const HomeStack = createStackNavigator()

const _Home = () =>
  <HomeStack.Navigator screenOptions={HomeHeaderConfig}>
    <HomeStack.Screen name="Home"
      component={Home}/>
  </HomeStack.Navigator>

const HomeConfig = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  )
}

const HomeDebugStack = createStackNavigator()

const _HomeDebug = () =>
  <HomeDebugStack.Navigator headerMode='none'>
    <HomeDebugStack.Screen name="HomeDebug" component={HomeDebug}/>
  </HomeDebugStack.Navigator>

const HomeDebugConfig = {
  tabBarLabel: 'HomeDebug',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const Tab = createBottomTabNavigator()
export default () => (
  <Tab.Navigator shifting tabBarOptions={tabBarOptions}>
    <Tab.Screen name="HomeTab"
      options={({ route }) => ({
        ...HomeConfig,
        tabBarVisible: route.state && route.state.index === 0,
      })}
      component={_Home}>
    </Tab.Screen>
    {/* eslint-disable-next-line no-undef */}
    {__DEV__ && <Tab.Screen name="HomeDebugTab" component={_HomeDebug}
      options={HomeDebugConfig}/>}
  </Tab.Navigator>
)
