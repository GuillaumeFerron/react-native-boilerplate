import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Layout } from 'constants'
import TextTitle from 'components/utils/Titles'
import { CenteredView } from 'components'

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ ...Layout.container, paddingBottom: 0 }}>
        <CenteredView>
          <TextTitle
            type="h2"
            fontWeight="textNormal"
            style={{ marginBottom: 20 }}>Home</TextTitle>
        </CenteredView>
      </SafeAreaView>
    )
  }
}

export default Home
