import { StyleSheet } from 'react-native';

import {
  TEXT_COLOR,
  BORDER_COLOR,
  PRIMARY_FONT,
  BASE_FONT_SIZE,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  categoriesList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryWrapper: {
    width: '50%',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
    height: 250,
  },
  category: {
    width: '100%',
    height: '100%',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 5 * BASE_FONT_SIZE,
    paddingBottom: 10,
    color: TEXT_COLOR,
    textAlign: 'center',
  },
  name: {
    fontFamily: PRIMARY_FONT,
    fontSize: 2 * BASE_FONT_SIZE,
  },
});

export default styles;
