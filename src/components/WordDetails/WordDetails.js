import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { capitalize } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './WordDetailsStyles';

class WordDetails extends Component {
  render() {
    const { name, imageUrl } = this.props.navigation.state.params.word;
    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <View style={styles.imageOverlay}></View>
          <View style={styles.imageText}>
            <Text style={styles.wordTitle}>{capitalize(name)}</Text>
          </View>
          <TouchableOpacity onPress={() => console.log('pressed')} style={styles.speakerTouchable}>
            <Icon style={styles.icon} name="ios-play-outline" />
          </TouchableOpacity>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
      </View>
    );
  }
}

export default WordDetails;
