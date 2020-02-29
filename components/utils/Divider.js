import React from 'react'
import { View } from 'react-native'
import { Layout } from 'constants'

class Divider extends React.Component {
  render() {
    return (
      <View style={{ ...Layout.divider }}/>
    )
  }
}

Divider.propTypes = {}
Divider.defaultProps = {}

export default Divider
