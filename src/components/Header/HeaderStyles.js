import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
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

export default styles;