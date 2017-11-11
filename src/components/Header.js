import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Header extends Component {
  render() {
    const { showBackButton } = this.props;

    return (
      <View style={styles.container}>
        { showBackButton &&
            <Icon style={styles.backButton} name="ios-arrow-round-back" onPress={this.loginWithFacebook}></Icon>
        }
        <Text style={ showBackButton
          ? { ...StyleSheet.flatten(styles.text) }
          : { ...StyleSheet.flatten(styles.text), ...StyleSheet.flatten(styles.textCentered) }
        }>WordBook</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00aced',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
  },
  text: {
    color: '#FFF',
    fontSize: 24,
    flexGrow: 1,
    fontFamily: 'sans-serif-light',
    textAlign: 'center',
  },
  logoText: {
    textAlign: 'left',
    paddingLeft: 40,
  },
  backButton: {
    color: '#FFF',
    fontSize: 44,
    flexGrow: 0,
  }
});


export default Header;