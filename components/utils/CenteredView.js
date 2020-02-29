import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from 'constants'
import { SafeAreaView } from 'react-native-safe-area-context'

class CenteredView extends React.Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

  render() {
    return (
      <SafeAreaView style={{ ...Layout.container, ...this.styles.container, ...this.props.style }}>
        {this.props.children}
      </SafeAreaView>
    )
  }
}

CenteredView.propTypes = {
}
CenteredView.defaultProps = {
}

export default CenteredView
