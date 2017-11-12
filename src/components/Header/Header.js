import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './HeaderStyles';

const Header = ({ title, goBack }) => (
  <View style={styles.container}>
    { goBack &&
      <TouchableOpacity style={styles.goBackLink} onPress={goBack}>
        <Icon style={styles.goBackIcon} name="ios-arrow-round-back" />
      </TouchableOpacity>
    }
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default Header;
