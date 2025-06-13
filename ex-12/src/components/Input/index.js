import { TextInput } from 'react-native'

import styles from './styles'

function Input(props){
  return(
    <TextInput 
      placeholder={props.placeholder} 
      style={styles.input}  
      onChangeText={props.getValue}
      keyboardType={props.keyType}
      value={props.value}
    />
  )
}

export default Input