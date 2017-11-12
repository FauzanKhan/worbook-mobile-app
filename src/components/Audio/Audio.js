import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import { Audio } from 'expo';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: props.isPlaying,
    };

    this.loadAudio = this.loadAudio.bind(this);
  }

  componentDidMount() {
    this.loadAudio();
  }

  async loadAudio() {
    console.log("SOURCE", this.props.source);
    const a = this.state;
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: this.props.source });
      console.log("Loaded");
      await soundObject.playAsync();
    } catch (e) {
      console.log("ERROR", e);
    }
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.play}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default AudioPlayer;
