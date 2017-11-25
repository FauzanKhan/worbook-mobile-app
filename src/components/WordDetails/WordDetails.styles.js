import { StyleSheet } from 'react-native';
import {
  BASE_FONT_SIZE,
  BORDER_COLOR,
  baseStyles,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsText: {
    ...baseStyles.text,
    lineHeight: 3 * BASE_FONT_SIZE,
  },
  practiceButtonWrapper: {
    padding: 20,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: BORDER_COLOR,
  },
});

export default styles;
