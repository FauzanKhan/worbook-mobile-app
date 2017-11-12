import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
      <TouchableOpacity onPress={this.play} style={this.props.style}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default Audio;
