import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f4081',
    marginBottom: 15,
  },
  fab: {
  position: 'absolute',
  right: 20,
  bottom: 20,
  backgroundColor: '#1f4081',
  width: 50,
  height: 50,
  borderRadius: 35, // botão redondo
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 6,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
},
fabText: {
  color: '#fff',
  fontSize: 36,
  lineHeight: 36,
},

});
