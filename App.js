import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Platform, StatusBar, StyleSheet, YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import { Colors } from 'constants'

import AppNavigator from 'navigation/AppNavigator'

import store from 'store'

export default function App() {
  YellowBox.ignoreWarnings([
  ])

  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
        <AppNavigator/>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
