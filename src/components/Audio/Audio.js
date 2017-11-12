import React, { Component } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
// import Sound from 'react-native-sound';

// console.log('asdasd', Sound);

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {

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

export default Audio;
