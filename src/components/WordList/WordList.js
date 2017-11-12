import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { capitalize } from 'lodash';

import api from '../../utils/api';

import styles from './WordListStyles';

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
      <TouchableOpacity onPress={() => this.handleWordSelection(item)}>
        <View style={styles.listItem} key={item._id}>
          <Text style={styles.listItemText}>{capitalize(item.name)}</Text>
        </View>
      </TouchableOpacity>
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
