import { Pressable, Text } from 'react-native'

import styles from './styles'

function Button(props){
  return(

    <Pressable style={[styles.btn, props.aditionalStyle]} onPress={props.action}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>

  )
}

export default Button