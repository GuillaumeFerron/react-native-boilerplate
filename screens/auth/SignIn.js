import React from 'react'
import TextTitle from 'components/utils/Titles'
import { CenteredView } from 'components'

class SignIn extends React.Component {
  render() {
    return (
      <CenteredView>
        <TextTitle
          type="h2"
          fontWeight="textNormal"
          style={{ marginBottom: 20 }}>SignIn</TextTitle>
      </CenteredView>
    )
  }
}

export default SignIn
