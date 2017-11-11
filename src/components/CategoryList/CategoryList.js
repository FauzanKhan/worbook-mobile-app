import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { capitalize } from 'lodash';

import styles from './CategoryListStyles';
import api from '../../utils/api';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    api.get('categories')
      .then(categories => this.setState({ categories }));
  }

  getCategoryItem({ _id, name, icon }) {
    return (
      <View style={styles.categoryWrapper}>
        <TouchableOpacity
          onPress={() => console.log(`pressed ${name}`)}
          style={styles.category}
        >
          <View>
            <Icon style={styles.icon} name={icon || 'ios-more-outline'} />
            <Text style={styles.name}>{capitalize(name)}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
