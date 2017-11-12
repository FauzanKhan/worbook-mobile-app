import { StyleSheet } from 'react-native';
import { PRIMARY_FONT, BASE_FONT_SIZE, FG_COLOR, BORDER_COLOR } from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
  },
  title: {
    fontSize: 1.5 * BASE_FONT_SIZE,
    fontFamily: PRIMARY_FONT,
    paddingBottom: 5,
    color: FG_COLOR,
  },
});

export default styles;
