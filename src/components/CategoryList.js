import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { capitalize } from 'lodash';
import api from '../utils/api';

class CategotyList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    api.get('categories')
      .then(categories => this.setState({ categories }))
  }

  getCategoryItem({_id, name, icon }) {
    return (
      <View style={styles.category} key={_id}>
        <Icon style={styles.icon} name={icon || "ios-alarm-outline"} />
        <Text style={styles.name}>{capitalize(name)}</Text>
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
                    ? <View style={styles.category} />
                    : null
                }
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    width: '50%',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    height: 250,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 48,
    paddingBottom: 10,
    color: '#666',
  },
  name: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
  }
});

export default CategotyList;