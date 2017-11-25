import { StyleSheet } from 'react-native';

import {
  PRIMARY_FONT,
  BASE_FONT_SIZE,
  SECONDARY_COLOR,
} from '../../utils/styleGuide';

const base = {
  height: 40,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const baseText = {
  fontFamily: PRIMARY_FONT,
  fontSize: 2 * BASE_FONT_SIZE,
};

const styles = StyleSheet.create({
  button: {
    ...base,
    backgroundColor: SECONDARY_COLOR,
  },
  transparent: {
    ...base,
    backgroundColor: 'transparent',
  },
  label: {
    ...baseText,
    color: '#FFF',
  },
  labelSecondary: {
    ...baseText,
    color: SECONDARY_COLOR,
  },
});

export default styles;
