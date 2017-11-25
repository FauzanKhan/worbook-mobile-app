import { StyleSheet } from 'react-native';

import {
  BASE_FONT_SIZE,
  BORDER_COLOR,
  baseStyles,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
  },
  title: {
    ...baseStyles.text,
    fontSize: 1.5 * BASE_FONT_SIZE,
    paddingBottom: 5,
  },
});

export default styles;
