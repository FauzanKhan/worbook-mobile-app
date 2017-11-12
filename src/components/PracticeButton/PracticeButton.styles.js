import { StyleSheet } from 'react-native';

import {
  PRIMARY_FONT,
  BASE_FONT_SIZE,
  SECONDARY_COLOR,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  button: {
    backgroundColor: SECONDARY_COLOR,
    height: 40,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontFamily: PRIMARY_FONT,
    fontSize: 2 * BASE_FONT_SIZE,
  },
});

export default styles;
