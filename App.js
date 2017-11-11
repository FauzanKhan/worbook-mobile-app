import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import CategoriesList from './src/components/CategoryList';
import api from './src/utils/api';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: {},
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CategoriesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
});
