import { StyleSheet } from 'react-native';

import {
  SECONDARY_COLOR,
  baseStyles,
} from '../../utils/styleGuide';

const base = {
  height: 40,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  button: {
    ...base,
    backgroundColor: SECONDARY_COLOR,
  },
  transparent: {
    ...base,
    backgroundColor: 'transparent',
  },
  label: {
    ...baseStyles.text,
    color: '#FFF',
  },
  labelSecondary: {
    ...baseStyles.text,
    color: SECONDARY_COLOR,
  },
});

export default styles;
