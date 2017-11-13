import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Voice from 'react-native-voice';

import styles from './PracticeButton.styles';

const PLACEHOLDER_TEXT = 'PRACTICE';
const RECORDING_TEXT = 'LISTENING...';
const PROCESSING_TEXT = 'PROCESSING...';

class PracticeButton extends Component {
  constructor() {
    super();
    this.state = {
      text: PLACEHOLDER_TEXT,
    };

    Voice.onSpeechStart = this.handleSpeechStart.bind(this);
    Voice.onSpeechEnd = this.handleSpeechEnd.bind(this);
    Voice.onSpeechPartialResults = this.handlePartialSpeechResults.bind(this);
    Voice.onSpeechResults = this.handleSpeechResults.bind(this);
    Voice.onSpeechError = this.handleSpeechError.bind(this);
    this.startRecording = this.startRecording.bind(this);
  }

  async startRecording() {
    try {
      await Voice.start('en-US', {REQUEST_PERMISSIONS_AUTO: true});
    } catch (e) {
      console.error(e);
    }
  }

  handleSpeechStart(e) {
    console.log('START', e);
    this.setState({
      text: RECORDING_TEXT,
    });
    setTimeout(async () => {
      console.log('stopping');
      try {
        await Voice.stop();
      } catch (e) {
        console.error(e);
      }
    }, 3000);
  }

  handleSpeechEnd(e) {
    console.log('END', e);
    this.setState({
      text: RECORDING_TEXT,
    });
  }

  handleSpeechResults(e) {
    console.log('RESULTS', e);
    this.props.onResults(e.value);
    this.setState({
      text: PLACEHOLDER_TEXT,
    });
  }

  handleSpeechError(e) {
    console.log('EROR', e);
    this.setState({
      text: PLACEHOLDER_TEXT,
    });
  }

  handlePartialSpeechResults(e) {
    console.log('PARTIAL', e);
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
