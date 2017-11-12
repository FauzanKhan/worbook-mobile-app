import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

import styles from './PracticeButton.styles';

class PracticeButton extends Component {
  render() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.button}>
          <Text style={styles.text}>PRACTICE</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default PracticeButton;
