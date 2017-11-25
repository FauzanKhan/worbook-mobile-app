import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Voice from 'react-native-voice';

import Button from '../Button';
// import styles from './PracticeButton.styles';

const PLACEHOLDER_TEXT = 'PRACTICE';
const RECORDING_TEXT = 'LISTENING...';
const PROCESSING_TEXT = 'PROCESSING...';

class PracticeButton extends Component {
  constructor() {
    super();
    this.state = {
      label: PLACEHOLDER_TEXT,
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
      label: RECORDING_TEXT,
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
      label: RECORDING_TEXT,
    });
  }

  handleSpeechResults(e) {
    console.log('RESULTS', e);
    this.props.onResults(e.value);
    this.setState({
      label: PLACEHOLDER_TEXT,
    });
  }

  handleSpeechError(e) {
    console.log('EROR', e);
    this.setState({
      lebel: PLACEHOLDER_TEXT,
    });
  }

  handlePartialSpeechResults(e) {
    console.log('PARTIAL', e);
  }

  render() {
    return (
      <Button onPress={this.startRecording} label={this.state.label} />
    );
  }
}

export default PracticeButton;
