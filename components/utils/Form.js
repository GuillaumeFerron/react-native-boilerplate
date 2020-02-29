import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import RButton from 'components/utils/RButton'
import { Layout, Buttons } from 'constants'
import i18n from 'assets/locales'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      submitText: this.props.submitText || global.i18n.t('submit')
    }
  }

  render() {
    return (
      <View style={{ ...this.props.style, width: '100%' }}>
        { this.props.children }
        <RButton textColor={Buttons.buttonText.color} onPress={this.props.onSubmit}>
          <View style={Layout.contentCenter}>
            <Text style={Buttons.buttonText}>{ this.state.submitText }</Text>
          </View>
        </RButton>
      </View>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string
}

Form.defaultProps = {
  submitText: i18n.t('submit')
}

export default Form
