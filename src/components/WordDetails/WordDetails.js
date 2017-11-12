import React, { Component } from 'react';
import { capitalize, trim } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

import Audio from '../Audio';
import WordDetailSection from '../WordDetailSection';
import styles from './WordDetailsStyles';
import { SECONDARY_COLOR } from '../../utils/styleGuide';

/* eslint-disable */
class WordDetails extends Component {
  render() {
    const { name, imageUrl, audioSrc, definition, synonyms } = this.props.navigation.state.params.word;
    const synonymsList = synonyms.split(',');
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* TODO: extract next View into a separate component */}
          <View style={styles.imageWrapper}>
            <View style={styles.imageOverlay}></View>
            <View style={styles.imageText}>
              <Text style={styles.wordTitle}>{capitalize(name)}</Text>
            </View>
            <Audio source={audioSrc} style={styles.speakerTouchable}>
              <Icon style={styles.icon} name="ios-play-outline" />
            </Audio>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <WordDetailSection title="Definition">
            <Text style={styles.detailsText}>{definition}</Text>
          </WordDetailSection>
          { !!synonymsList.length &&
              <WordDetailSection title="Also Known as">
                {/* TODO: extract newxt View into a separate component */}
                <View style={styles.synonymsList}>
                  { synonymsList.map(synonym =>
                      <Text key={synonym} style={[styles.detailsText, styles.synonym]}>
                        {capitalize(trim(synonym))}
                      </Text>
                    )
                  }
                </View>
              </WordDetailSection>
          }
        </ScrollView>
        <View style={styles.practiceWrapper}>
          <TouchableNativeFeedback>
            <View style={styles.practiceButton}>
              <Text style={styles.practiceButtonText}>PRACTICE</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

export default WordDetails;
