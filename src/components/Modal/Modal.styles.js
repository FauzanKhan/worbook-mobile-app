import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  backdrop: {
    position: 'absolute',
    zIndex: 10,
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    opacity: .5,
  },
});

export default styles;
