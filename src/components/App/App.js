import React from 'react';
import { StackNavigator } from 'react-navigation';

import Header from '../Header';
import CategoryList from '../CategoryList';
import WordList from '../WordList';
import WordDetails from '../WordDetails';

const App = StackNavigator({
  Home: {
    screen: CategoryList,
    navigationOptions: {
      title: 'WordBook',
      header: <Header title="WordBook" />,
    },
  },
  WordList: {
    screen: WordList,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.category.name,
      header: () => (<Header goBack={navigation.goBack} title={navigation.state.params.category.name} />),
    }),
  },
  WordDetails: {
    screen: WordDetails,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.word.name,
      header: () => (<Header goBack={navigation.goBack} title={navigation.state.params.word.name} />),
    }),
  },
});

export default App;
