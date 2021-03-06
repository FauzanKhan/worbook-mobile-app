import { StyleSheet } from 'react-native';

import {
  BASE_FONT_SIZE,
  PRIMARY_COLOR,
  baseStyles,
} from '../../utils/styleGuide';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: PRIMARY_COLOR,
    opacity: 0.4,
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  overlayText: {
    zIndex: 3,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  title: {
    ...baseStyles.text,
    fontSize: 4 * BASE_FONT_SIZE,
    color: '#FFF',
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  speakerTouchable: {
    width: 60,
    height: 60,
    zIndex: 4,
    position: 'absolute',
    right: 15,
    bottom: -30,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 60,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 5 * BASE_FONT_SIZE,
    color: '#FFF',
    paddingLeft: 5, // TODO: get rid of this atrocity
  },
});

export default styles;
