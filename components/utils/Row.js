import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Layout } from 'constants'

class Row extends React.Component {
  styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    }
  })

  render() {
    return (
      <View style={{ ...Layout.container, ...this.props.style }}>
        {this.props.children}
      </View>
    )
  }
}

export default Row
