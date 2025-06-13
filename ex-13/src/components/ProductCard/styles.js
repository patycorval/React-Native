import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    width: 120, 
    height: 120,             
    marginRight: 12,
    padding: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start', 
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});