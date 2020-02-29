import React from 'react'
import { Image } from 'react-native'

class Logo extends React.Component {
  render() {
    return (
      <Image source={require('assets/images/icon.png')} style={Styles.logo}/>
    )
  }
}

export default Logo

const Styles = {
  logo: {
    width: 230,
    height: 128
  }
}
