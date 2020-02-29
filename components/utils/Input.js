import React from 'react'
import PropTypes from 'prop-types'
import { Colors, Inputs } from 'constants'
import { TextInput, View } from 'react-native'

class CustomInput extends React.Component {
  render() {
    return (
      <View style={this.props.containerStyle}>
        <TextInput {...this.props} placeholderTextColor={Colors.darkGrey} style={{ ...Inputs.input, ...this.props.style }}/>
      </View>
    )
  }
}

CustomInput.propTypes = {
  onChangeText: PropTypes.func,
  label: PropTypes.string,
  errorMessage: PropTypes.string
}

CustomInput.defaultProps = {
  onChangeText: () => {},
  label: '',
  errorMessage: ''
}

export default CustomInput
