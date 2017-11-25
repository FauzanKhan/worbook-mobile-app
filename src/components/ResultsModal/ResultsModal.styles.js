import { StyleSheet } from 'react-native';
import {
  BASE_FONT_SIZE,
  FG_COLOR_LIGHT,
  baseStyles,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  body: {
    width: 300,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFF',
    zIndex: 11,
  },
  title: {
    ...baseStyles.text,
    fontSize: 2.5 * BASE_FONT_SIZE,
  },
  answer: {
    ...baseStyles.text,
    fontSize: 4 * BASE_FONT_SIZE,
    paddingVertical: 20,
  },
  note: {
    ...baseStyles.text,
    fontSize: 2 * BASE_FONT_SIZE,
    color: FG_COLOR_LIGHT,
    paddingBottom: 20,
  },
});

export default styles;
