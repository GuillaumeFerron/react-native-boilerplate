import React from 'react';
import { Text } from 'react-native';
import { Typography, Colors } from 'constants'

export default function TextTitle(props) {
  const style = {
    ...props.type && Typography[props.type],
    ...props.fontWeight ? Typography[props.fontWeight] : Typography.textNormal,
    ...props.fontSize && { fontSize: props.fontSize },
    ...props.lineHeight && { lineHeight: props.lineHeight },
    ...props.color && { color: Colors[props.color] },
    ...props.uppercase && { textTransform: 'uppercase' },
  }

  return (
    <Text {...props} style={{ ...props.style, ...style }}/>
  )
}
