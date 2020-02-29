import { Dimensions } from 'react-native';
import { spacer } from 'constants/spacing';
import * as Colors from 'constants/colors'

export const { width, height } = Dimensions.get('window');

export const container = {
  marginHorizontal: spacer,
  flex: 1
};

export const containerFull = {
  flex: 1
}

export const contentCenter = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};


export const divider = {
  borderBottomColor: Colors.lightGrey,
  borderBottomWidth: 1,
  width: '100%',
  marginBottom: spacer,
  marginTop: spacer,
};

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375
};
