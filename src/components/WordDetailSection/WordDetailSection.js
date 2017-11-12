import React from 'react';
import { View, Text } from 'react-native';

import styles from './WordDetaliSectionStyles';

const WordDetailSection = ({ title, children }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title.toUpperCase()}</Text>
    <View style={styles.body}>{children}</View>
  </View>
);

export default WordDetailSection;
