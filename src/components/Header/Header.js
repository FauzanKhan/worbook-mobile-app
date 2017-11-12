import React from 'react';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './HeaderStyles';

const Header = ({ title, goBack }) => (
  <View style={styles.container}>
    { goBack &&
      <TouchableNativeFeedback onPress={goBack}>
        <View style={styles.goBackLink}>
          <Icon style={styles.goBackIcon} name="ios-arrow-round-back" />
        </View>
      </TouchableNativeFeedback>
    }
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;
