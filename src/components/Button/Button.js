import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import styles from './Button.styles';

/* Custom button commponent because react native's button gives an ugly shadow
  that can't be removed */
const Button = ({ onPress, label, transparent }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={transparent ? styles.transparent : styles.button}>
      <Text style={transparent ? styles.labelSecondary : styles.label}>{label}</Text>
    </View>
  </TouchableNativeFeedback>
);

export default Button;
