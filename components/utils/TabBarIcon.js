import React from 'react';
import { View } from 'react-native'
import Icon from 'react-native-ionicons'
import { Colors } from 'constants';

export default function TabBarIcon(props) {
  return (
    <View style={Styles.iconContainer}>
      <Icon
        name={props.name}
        size={26}
        color={Colors.black}
      />
    </View>
  );
}

const Styles = {
  iconContainer: {
    // flex: 1,
    // backgroundColor: Colors.pink
  }
}
