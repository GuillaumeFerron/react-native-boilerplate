import React from 'react';
import { Link, CenteredView } from 'components'

class HomeDebug extends React.Component {
  render() {
    return (
      <CenteredView>
        <Link goTo='Home'>Home</Link>
      </CenteredView>
    )
  }
}

export default HomeDebug
