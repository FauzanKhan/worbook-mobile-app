import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { capitalize } from 'lodash';

import Audio from '../Audio';
import styles from './WordAudioVisualSection.styles';

const WordAudioVisualSection = ({ word, imageUrl, audioSrc }) => (
  <View style={styles.container}>
    <View style={styles.overlay} />
    <View style={styles.overlayText}>
      <Text style={styles.title}>{capitalize(word)}</Text>
    </View>
    <Audio source={audioSrc} style={styles.speakerTouchable}>
      <Icon style={styles.icon} name="ios-play-outline" />
    </Audio>
    <Image style={styles.image} source={{ uri: imageUrl }} />
  </View>
);

export default WordAudioVisualSection;
