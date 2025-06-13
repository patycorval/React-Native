import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
