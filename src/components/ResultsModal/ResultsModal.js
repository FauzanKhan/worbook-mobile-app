import React, { Component } from 'react';
import { View, Text, Modal, TouchableNativeFeedback } from 'react-native';

import styles from './ResultsModal.styles';

const ResultsModal = ({ isCorrectAnswer, answer, onClose }) => (
  <Modal visible transparent
    animationType="slide"
    onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.backdrop} />
        <View style={styles.body}>
          <Text style={styles.title}>You said</Text>
          <Text style={styles.answer}>{answer}</Text>
          <Text style={styles.note}>{`which is ${isCorrectAnswer ? 'absolutely right!' : 'not the right answer :('}`}</Text>
          <TouchableNativeFeedback onPress={onClose}>
            <View style={styles.backButton}>
              <Text>Go Back</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
  </Modal>
);

export default ResultsModal;
