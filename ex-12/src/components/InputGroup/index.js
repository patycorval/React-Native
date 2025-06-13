import { View, Text, Switch} from 'react-native'

import {Picker} from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import styles from './styles'

import Input from '../Input/index'

function InputGroup(props){
  
  function renderInput(inputName){
    if(props.inputName == "text"){
      return(
        <Input placeholder="Nome" keyType="default" value={props.value} getValue={props.getValue} />
      )
    }else if(props.inputName == "text-idade"){
      return(
        <Input placeholder="Idade" keyType="numeric" value={props.value} getValue={props.getValue} />
      )
    } else if(props.inputName == "picker-sexo"){
      return(
        <Picker 
          selectedValue={ props.sexoValue }
          onValueChange={ props.onValueChange }
        >
          <Picker.Item key={1} value={"Masculino"} label="Masculino" />
          <Picker.Item key={2} value={"Feminino"} label="Feminino" />
        </Picker>
      )
    } else if(props.inputName == "picker-escolaridade"){
      return(
        <Picker 
          selectedValue={ props.escolaridadeValue }
           onValueChange = {props.onValueChange}
        >
          <Picker.Item key={1} value={"Ensino Fundamental"} label="Ensino Fundamental" />
          <Picker.Item key={1} value={"Ensino Médio"} label="Ensino Médio" />
          <Picker.Item key={2} value={"Ensino Superior"} label="Ensino Superior" />
        </Picker>
      )
    } else if(props.inputName == "slider"){
      return(
        <View> 
          <Slider
            minimumValue={0}
            maximumValue={1000}
            step={1}
            value={ props.value }
            onValueChange={ props.onValueChange }
          />
          <Text style={styles.textAlign}>{ props.value }</Text>
        </View>
      )
    } else if(props.inputName == "switch"){
      return(
        <Switch        
          value={ props.brasileiro }
          onValueChange={ props.onValueChange }
        />
      )
    }
  }


  return(
    <View>
      <Text style={styles.text}>{props.text}</Text>
      {renderInput(props.inputName)}
    </View>
  )
}

export default InputGroup