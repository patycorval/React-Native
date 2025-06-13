import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 5,
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
    minHeight: '70vh',
  },
  border:{
    border: '1px solid #000'
  },
  white:{
    backgroundColor: '#fff',
    color: '#000',
  },
  dark:{
    backgroundColor: '#000',
    color: '#fff'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around'
  },
  h1:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700
  },
  large:{
    fontSize: 35
  },
  small:{
    fontSize: 16
  }
});


export default styles