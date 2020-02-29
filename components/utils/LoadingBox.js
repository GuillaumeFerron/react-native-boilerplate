import React from 'react'
import { View, Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'
import { Helpers, Layout, Utils, Colors } from 'constants'
import LinearGradient from 'react-native-linear-gradient';

class LoadingBox extends React.Component {
  constructor(props) {
    super(props)
    this.defaultVal = Layout.width * -2
    this.animatedValue = new Animated.Value(this.defaultVal)
    this.loadingTop = calcTop()
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.animatedValue.setValue(this.defaultVal)
    Animated.timing(
      this.animatedValue,
      {
        toValue: Layout.width,
        duration: this.props.loadingDuration,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  render() {
    return (
      <View style={{ ...Styles.container, ...this.props.style }}>
        <View style={[Helpers.fullWidth, Styles.loadingInside, { aspectRatio: 1.1 }]}>
          <Animated.View style={{ ...Styles.loadingBar, top: this.loadingTop, left: this.animatedValue }}>
            <LinearGradient colors={[Colors.lighterGrey, Colors.white, Colors.lighterGrey]} style={{ width: '100%', height: '100%' }}/>
          </Animated.View>
        </View>
      </View>
    )
  }
}

LoadingBox.propTypes = {
  style: PropTypes.object,
  loadingDuration: PropTypes.number
}

LoadingBox.defaultProps = {
  style: {},
  loadingDuration: 1000
}

function calcTop() {
  // sin(θ) = top / (width / 2)
  return (Math.sin(Utils.PI * 0.25) * Styles.loadingBar.width * 0.5) - (Styles.loadingBar.height)
}

export default LoadingBox

const Styles = {
  container: {
    flex: 1
  },
  loadingInside: {
    backgroundColor: Colors.lighterGrey,
    overflow: 'hidden'
  },
  loadingBar: {
    backgroundColor: '#000',
    width: Layout.width * 2,
    height: 200,
    transform: [{ rotate: '45deg' }]
  }
}
