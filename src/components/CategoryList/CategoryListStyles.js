import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryWrapper: {
    width: '50%',
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EAEAEA',
    height: 250,
  },
  category: {
    width: '100%',
    height: '100%',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 48,
    paddingBottom: 10,
    color: '#666',
    textAlign: 'center',
  },
  name: {
    fontFamily: 'sans-serif-light',
    fontSize: 18,
  }
});

export default styles;