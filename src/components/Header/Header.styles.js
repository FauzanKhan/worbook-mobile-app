import { StyleSheet } from 'react-native';

import {
  PRIMARY_COLOR,
  BASE_FONT_SIZE,
  baseStyles,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    ...baseStyles.text,
    color: '#FFF',
    fontSize: 3 * BASE_FONT_SIZE,
    flexGrow: 1,
    textAlign: 'center',
  },
  goBackLink: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 80,
    paddingLeft: 20,
    paddingTop: 0,
    justifyContent: 'center',
    flex: 1,
    zIndex: 10,
  },
  goBackIcon: {
    color: '#FFF',
    fontSize: 5 * BASE_FONT_SIZE,
    width: 40,
    height: 40,
  },
});

export default styles;
