import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import NavigationService from 'navigation/NavigationService'
import { Typography } from 'constants'

class Link extends React.Component {
  handleNav() {
    if (this.props.goBack) {
      NavigationService.goBack()
      return
    }
    if (this.props.goTo) NavigationService.navigate(this.props.goTo)
  }

  render() {
    return this.props.button
      ? (
        <TouchableOpacity onPress={() => { this.handleNav() }} style={{ ...this.props.containerStyle }}>
          <Text style={[this.props.style]}>{this.props.children}</Text>
        </TouchableOpacity>
      )
      : (
        <TouchableOpacity onPress={() => { this.handleNav() }} style={this.props.containerStyle }>
          <Text style={[Typography.link, this.props.style]}>{this.props.children}</Text>
        </TouchableOpacity>
      )
  }
}

Link.propTypes = {
  goTo: PropTypes.string,
  goBack: PropTypes.bool,
  button: PropTypes.bool,
  containerStyle: PropTypes.object
}

Link.defaultProps = {
  goTo: 'Home',
  goBack: false,
  button: false,
  containerStyle: {}
}

export default Link
