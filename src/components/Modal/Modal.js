import React from 'react';
import { View, Modal } from 'react-native';

import styles from './Modal.styles';

const ResultsModal = ({ onClose, children }) => (
  <Modal visible transparent
    animationType="slide"
    onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.backdrop} />
        {children}
      </View>
  </Modal>
);

export default ResultsModal;
