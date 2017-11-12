import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { capitalize } from 'lodash';

import styles from './CategoryListStyles';
import api from '../../utils/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {};

    this.getCategoryItem = this.getCategoryItem.bind(this);
    this.handleCategorySelection = this.handleCategorySelection.bind(this);
  }

  componentDidMount() {
    api.get('categories')
      .then(categories => this.setState({ categories }));
  }

  getCategoryItem(category) {
    const { _id, name, icon } = category;

    return (
      <View key={_id} style={styles.categoryWrapper}>
        <TouchableNativeFeedback
          onPress={() => this.handleCategorySelection(category)}
        >
          <View style={styles.category}>
            <Icon style={styles.icon} name={icon || 'ios-more-outline'} />
            <Text style={styles.name}>{capitalize(name)}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  handleCategorySelection(category) {
    this.props.navigation.navigate('WordList', { category });
  }

  render() {
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          { categories &&
            <View style={styles.categoriesList}>
                { categories.map(this.getCategoryItem) }
                { /* TODO: remove this hack for last child border */ }
                { categories && (categories.length % 2 !== 0)
                    ? <View key="temp" style={styles.categoryWrapper} />
                    : null
                }
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}

export default CategoryList;
