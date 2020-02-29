import React from 'react'
import TextTitle from 'components/utils/Titles'
import { CenteredView } from 'components'

class SignUp extends React.Component {
  render() {
    return (
      <CenteredView>
        <TextTitle
          type="h2"
          fontWeight="textNormal"
          style={{ marginBottom: 20 }}>SignUp</TextTitle>
      </CenteredView>
    )
  }
}

export default SignUp
