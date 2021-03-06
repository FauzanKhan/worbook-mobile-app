import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
} from 'react-native';

import WordDetailSection from '../WordDetailSection';
import WordAudioVisualSection from '../WordAudioVisualSection';
import TagList from '../TagList';
import PracticeButton from '../PracticeButton';
import ResultsModal from '../ResultsModal';

import styles from './WordDetails.styles';

class WordDetails extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleResults = this.handleResults.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  clearResults() {
    this.setState({
      results: null,
      isCorrectAnswer: false,
    });
  }

  handleResults(results) {
    const answer = this.props.navigation.state.params.word.name;
    const isCorrectAnswer = Boolean(results.find(text =>
      text.toLowerCase() === answer.toLowerCase()));
    this.setState({
      results,
      isCorrectAnswer,
    });
  }


  render() {
    const {
      name,
      imageUrl,
      audioSrc,
      definition,
      synonyms,
    } = this.props.navigation.state.params.word;
    const { results, isCorrectAnswer } = this.state;
    const synonymsList = synonyms ? synonyms.split(',') : [];
    return (
      <View style={styles.container}>
        { results &&
          <ResultsModal
            onClose={this.clearResults}
            isCorrectAnswer={isCorrectAnswer}
            answer={isCorrectAnswer ? name : results[0]} />
        }
        <ScrollView>
          <WordAudioVisualSection word={name} imageUrl={imageUrl} audioSrc={audioSrc} />

          <WordDetailSection title="Definition">
            <Text style={styles.detailsText}>{definition}</Text>
          </WordDetailSection>

          { !!synonymsList.length &&
            <WordDetailSection title="Also Known as">
              <TagList tags={synonymsList} />
            </WordDetailSection>
          }
        </ScrollView>

        <View style={styles.practiceButtonWrapper}>
          <PracticeButton onResults={this.handleResults} />
        </View>
      </View>
    );
  }
}

export default WordDetails;
