import { StyleSheet } from 'react-native';

import {
  PRIMARY_COLOR,
  PRIMARY_FONT,
  BASE_FONT_SIZE,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 15,
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 0,
    // position: 'relative',
  },
  title: {
    color: '#FFF',
    fontSize: 3 * BASE_FONT_SIZE,
    flexGrow: 1,
    fontFamily: PRIMARY_FONT,
    textAlign: 'center',
  },
  backButton: {
    color: '#FFF',
    fontSize: 5 * BASE_FONT_SIZE,
    position: 'absolute',
    top: '85%',
    left: 20,
  },
});

export default styles;
