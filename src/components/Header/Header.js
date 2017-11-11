import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './HeaderStyles';
class Header extends Component {
  render() {
    const { showBackButton } = this.props;
    const brandTextStyles = showBackButton
      ? { ...StyleSheet.flatten(styles.text) }
      : { ...StyleSheet.flatten(styles.text), ...StyleSheet.flatten(styles.textCentered) };

    return (
      <View style={styles.container}>
        { showBackButton &&
            <Icon style={styles.backButton} name="ios-arrow-round-back" onPress={this.loginWithFacebook}></Icon>
        }
        <Text style={brandTextStyles}>WordBook</Text>
      </View>
    );
  }
};

export default Header;