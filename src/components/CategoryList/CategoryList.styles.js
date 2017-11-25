import { StyleSheet } from 'react-native';

import {
  FG_COLOR,
  BORDER_COLOR,
  BASE_FONT_SIZE,
  baseStyles,
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
    color: FG_COLOR,
    textAlign: 'center',
  },
  name: {
    ...baseStyles.text,
  },
});

export default styles;
