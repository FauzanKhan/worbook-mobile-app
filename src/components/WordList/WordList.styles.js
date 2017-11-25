import { StyleSheet } from 'react-native';

import { BORDER_COLOR, BASE_FONT_SIZE, baseStyles } from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
  },
  listItemText: {
    ...baseStyles.text,
    fontSize: 2 * BASE_FONT_SIZE,
  },
});

export default styles;
