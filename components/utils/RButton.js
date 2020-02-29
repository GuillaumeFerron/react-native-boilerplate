import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Colors, Buttons } from 'constants'

class RButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  async handlePress() {
    if (!this.state.loading) {
      this.setState({ loading: true })
      await this.props.onPress()
      this.setState({ loading: false })
    }
  }

  render() {
    const styles = {
      ...Buttons.button,
      ...this.props.outline && Buttons.buttonOutline,
      ...this.props.style,
      height: this.props.large ? Buttons.buttonHeightLarge : Buttons.buttonHeightDefault,
      backgroundColor: this.props.transparent ? 'transparent' : Colors.pink
    }

    return (
      <TouchableOpacity onPress={() => this.handlePress()} style={styles}>
        {
          this.state.loading
            ? (<ActivityIndicator color={this.props.textColor} size="small"/>)
            : (this.props.children)
        }
      </TouchableOpacity>
    )
  }
}

RButton.propTypes = {
  onPress: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      then: PropTypes.func.isRequired,
      catch: PropTypes.func.isRequired
    })
  ]).isRequired,
  textColor: PropTypes.string
}

RButton.defaultProps = {
  textColor: Colors.grey
}


export default RButton
