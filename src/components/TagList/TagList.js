import React from 'react';
import { View, Text } from 'react-native';
import { capitalize, trim } from 'lodash';

import styles from './TagList.styles';

const TagList = ({ tags }) => (
  <View style={styles.container}>
    { tags.map(tag => (
        <Text key={tag} style={styles.tag}>
          {capitalize(trim(tag))}
        </Text>
      ))
    }
  </View>
);

export default TagList;
