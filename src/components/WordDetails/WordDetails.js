import React, { Component } from 'react';
import { capitalize, trim } from 'lodash';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Text,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

import WordDetailSection from '../WordDetailSection';
import WordAudioVisualSection from '../WordAudioVisualSection';
import styles from './WordDetailsStyles';

/* eslint-disable */
class WordDetails extends Component {
  render() {
    const { name, imageUrl, audioSrc, definition, synonyms } = this.props.navigation.state.params.word;
    const synonymsList = synonyms.split(',');
    return (
      <View style={styles.container}>
        <ScrollView>
          <WordAudioVisualSection word={name} imageUrl={imageUrl} audioSrc={audioSrc} />
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
