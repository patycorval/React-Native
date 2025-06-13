import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    backgroundColor: '#e0f2f1', 
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  btn: {
    marginTop: 30,
    alignSelf: 'center',
    width: '60%',
    backgroundColor: '#00796b', 
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
