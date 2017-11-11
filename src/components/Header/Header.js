import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './HeaderStyles';

class Header extends Component {
  render() {
    const { showBackButton, title } = this.props;

    return (
      <View style={styles.container}>
        { showBackButton &&
            <Icon style={styles.backButton}
              name="ios-arrow-round-back"
              onPress={this.navigateBack}
            />
        }
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

export default Header;
