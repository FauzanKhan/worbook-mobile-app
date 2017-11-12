import { StyleSheet } from 'react-native';

import {
  PRIMARY_FONT,
  BASE_FONT_SIZE,
  FG_COLOR,
  BG_LIGHT,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  tag: {
    fontSize: 2 * BASE_FONT_SIZE,
    fontFamily: PRIMARY_FONT,
    lineHeight: 3 * BASE_FONT_SIZE,
    color: FG_COLOR,
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
