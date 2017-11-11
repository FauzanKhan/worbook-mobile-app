import React from 'react';
import { View } from 'react-native';

import Header from '../Header';
import CategoryList from '../CategoryList';

import styles from './AppStyles';

const App = () => (
  <View style={styles.container}>
    <Header />
    <CategoryList />
  </View>
);


export default App;
