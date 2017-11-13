import { StyleSheet } from 'react-native';
import { PRIMARY_FONT, BASE_FONT_SIZE, FG_COLOR, FG_COLOR_LIGHT } from '../../utils/styleGuide';

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
    fontFamily: PRIMARY_FONT,
    fontSize: 2.5 * BASE_FONT_SIZE,
    color: FG_COLOR,
  },
  answer: {
    fontFamily: PRIMARY_FONT,
    fontSize: 4 * BASE_FONT_SIZE,
    color: FG_COLOR,
    paddingVertical: 20,
  },
  note: {
    fontFamily: PRIMARY_FONT,
    fontSize: 2 * BASE_FONT_SIZE,
    color: FG_COLOR_LIGHT,
    paddingBottom: 20,
  },
});

export default styles;
