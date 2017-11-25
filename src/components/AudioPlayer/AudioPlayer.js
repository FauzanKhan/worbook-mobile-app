import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import Sound from 'react-native-sound';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };

    this.loadAudio = this.loadAudio.bind(this);
    this.toggleAudioPlayback = this.toggleAudioPlayback.bind(this);
  }

  componentDidMount() {
    Sound.setCategory('Playback');
    this.loadAudio();
  }

  componentWillUnmount() {
    this.audio.stop();
  }

  async loadAudio() {
    console.log('Loading Audio', this.props.source);
    this.audio = await new Sound(this.props.source, null, (err) => {
      if (err) {
        console.log('ERROR Loading Audio', err);
      }
      console.log('Loaded Audio');
    });
  }

  toggleAudioPlayback() {
    if (this.audio) {
      this.setState({
        isPlaying: !this.state.isPlaying,
      }, () => (this.state.isPlaying
        ? this.audio.play()
        : this.audio.stop()));
    }
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.toggleAudioPlayback}>
        <View style={this.props.style}>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default AudioPlayer;
