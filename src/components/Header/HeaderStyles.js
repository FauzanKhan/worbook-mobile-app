import { StyleSheet } from 'react-native';

import {
  PRIMARY_COLOR,
  PRIMARY_FONT,
  BASE_FONT_SIZE,
} from '../../utils/AppStyles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  text: {
    color: '#FFF',
    fontSize: 3 * BASE_FONT_SIZE,
    flexGrow: 1,
    fontFamily: PRIMARY_FONT,
    textAlign: 'center',
  },
  logoText: {
    textAlign: 'left',
    paddingLeft: 40,
  },
  backButton: {
    color: '#FFF',
    fontSize: 5 * PRIMARY_FONT,
    flexGrow: 0,
  },
});

export default styles;
