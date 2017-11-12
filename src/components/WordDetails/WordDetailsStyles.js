import { StyleSheet } from 'react-native';
import {
  BASE_FONT_SIZE,
  PRIMARY_FONT,
  FG_COLOR,
  BORDER_COLOR,
  SECONDARY_COLOR,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsText: {
    fontSize: 2 * BASE_FONT_SIZE,
    fontFamily: PRIMARY_FONT,
    lineHeight: 3 * BASE_FONT_SIZE,
    color: FG_COLOR,
  },
  practiceWrapper: {
    padding: 20,
    backgroundColor: '#FFFF',
    borderTopWidth: 1,
    borderColor: BORDER_COLOR,
  },
  practiceButton: {
    backgroundColor: SECONDARY_COLOR,
    height: 40,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  practiceButtonText: {
    color: '#FFF',
    fontFamily: PRIMARY_FONT,
    fontSize: 2 * BASE_FONT_SIZE,
  },
});

export default styles;
