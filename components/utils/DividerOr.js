import React from 'react'
import { View, Text } from 'react-native'
import { Colors, Helpers, Typography } from 'constants'

class DividerOr extends React.Component {
  render() {
    return (
      <View style={[Helpers.center, { marginBottom: 40 }]}>
        <View style={Styles.separator}>
          <Text style={Styles.separatorText}>{global.i18n.t('or')}</Text>
        </View>
      </View>
    )
  }
}

DividerOr.propTypes = {}

DividerOr.defaultProps = {}

export default DividerOr

const Styles = {
  separator: {
    ...Helpers.center,
    ...Helpers.fullWidth,
    backgroundColor: Colors.lightGrey,
    height: 1
  },

  separatorText: {
    ...Helpers.textUppercase,
    ...Typography.textLight,
    backgroundColor: Colors.white,
    fontSize: 12,
    zIndex: 1,
    position: 'absolute',
    padding: 10,
  }
}
