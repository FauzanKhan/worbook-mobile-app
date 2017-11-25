import React from 'react';
import { View, Text } from 'react-native';

import Modal from '../Modal';
import Button from '../Button';

import styles from './ResultsModal.styles';

const ResultsModal = ({ isCorrectAnswer, answer, onClose }) => (
  <Modal onClose={onClose}>
    <View style={styles.body}>
      <Text style={styles.title}>You said</Text>
      <Text style={styles.answer}>{answer}</Text>
      <Text style={styles.note}>{`which is ${isCorrectAnswer ? 'absolutely right!' : 'not the right answer :('}`}</Text>
      <Button transparent onPress={onClose} label="Go Back" />
    </View>
  </Modal>
);

export default ResultsModal;
