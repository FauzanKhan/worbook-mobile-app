import React from 'react';
import { StackNavigator } from 'react-navigation';
import { capitalize } from 'lodash';

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
    navigationOptions: ({ navigation }) => {
      const title = capitalize(navigation.state.params.category.name);
      return {
        title,
        header: () => (<Header goBack={() => navigation.goBack()} title={title} />),
      };
    },
  },
  WordDetails: {
    screen: WordDetails,
    navigationOptions: ({ navigation }) => {
      const title = capitalize(navigation.state.params.categoryName);
      return {
        title,
        header: () => (<Header goBack={() => navigation.goBack()} title={title} />),
      };
    },
  },
});

export default App;
