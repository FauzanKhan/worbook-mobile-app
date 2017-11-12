import React, { Component } from 'react';
import { Text, View, FlatList, TouchableNativeFeedback } from 'react-native';
import { capitalize } from 'lodash';

import api from '../../utils/api';

import styles from './WordList.styles';

class WordList extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleWordSelection = this.handleWordSelection.bind(this);
    this.getRenderItem = this.getRenderItem.bind(this);
  }

  componentDidMount() {
    const { _id } = this.props.navigation.state.params.category;
    api.get(`categories/${_id}/words`)
      .then(words => this.setState({ words }));
  }

  getRenderItem({ item }) {
    return (
      <TouchableNativeFeedback onPress={() => this.handleWordSelection(item)}>
        <View style={styles.listItem} key={item._id}>
          <Text style={styles.listItemText}>{capitalize(item.name)}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  handleWordSelection(word) {
    this.props.navigation.navigate('WordDetails', { word });
  }

  render() {
    const { words } = this.state;
    return (
      <View style={styles.container}>
        { words &&
            <FlatList
              data={words}
              renderItem={this.getRenderItem} />
        }
      </View>
    );
  }
}

export default WordList;
