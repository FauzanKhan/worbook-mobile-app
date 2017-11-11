import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.backButton} name="ios-arrow-round-back" onPress={this.loginWithFacebook}></Icon>
        <Text style={styles.text}>Dummy Title</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00aced',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    flexGrow: 1,
    paddingLeft: 40,
    fontFamily: 'sans-serif-light',
  },
  backButton: {
    color: '#FFF',
    fontSize: 44,
    flexGrow: 0,
  }
});


export default Header;