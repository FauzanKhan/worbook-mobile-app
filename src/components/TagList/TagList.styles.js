import { StyleSheet } from 'react-native';

import {
  BASE_FONT_SIZE,
  BG_LIGHT,
  baseStyles,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    ...baseStyles.text,
    lineHeight: 3 * BASE_FONT_SIZE,
    backgroundColor: BG_LIGHT,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 2,
    marginRight: 5,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
});

export default styles;
