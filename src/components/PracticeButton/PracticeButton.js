import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
// import { Audio } from 'expo';

import styles from './PracticeButton.styles';

const PLACEHOLDER_TEXT = 'PRACTICE';
const RECORDING_TEXT = 'LISTENING...';

class PracticeButton extends Component {
  constructor() {
    super();
    this.state = {
      text: PLACEHOLDER_TEXT,
    };

    this.startRecording = this.startRecording.bind(this);
  }

  startRecording() {
    this.setState({
      text: RECORDING_TEXT,
    });
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.startRecording}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.state.text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default PracticeButton;
