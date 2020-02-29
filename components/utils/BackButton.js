import React from 'react'
import Icon from 'react-native-ionicons'
import { Colors } from 'constants'

export default function BackButton() {
  return (
    <Icon
      name="md-arrow-back"
      size={30}
      color={Colors.darkBlue}/>
  )
}
