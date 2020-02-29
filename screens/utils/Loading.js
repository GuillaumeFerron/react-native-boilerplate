import React from 'react'
import { CenteredView, Logo } from 'components'

class Loading extends React.Component {
  render() {
    return (
      <CenteredView>
        <Logo/>
      </CenteredView>
    )
  }
}

Loading.propTypes = {}
Loading.defaultProps = {}

export default Loading
