import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  desc: { fontSize: 14, color: '#666', marginVertical: 5 },
  actions: { flexDirection: 'row', justifyContent: 'flex-end' }
});
