import { ScrollView} from 'react-native';  
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 

import InputGroup from '../../components/InputGroup/index';
import Button from '../../components/Button/index';

import styles from './styles';

export default function Abertura() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [limiteConta, setLimiteConta] = useState(500);
  const [brasileiro, setBrasileiro] = useState(true);
  const [sexoValue, setSexoValue] = useState("Masculino");
  const [escolaridadeValue, setEscolaridadeValue] = useState("Ensino Fundamental");

  function showValues() {
    if (name !== "" && idade !== "") {
      navigation.navigate('Resultado', {
        name,
        idade,
        sexoValue,
        escolaridadeValue,
        limiteConta,
        brasileiro
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <InputGroup text="Nome:" inputName="text" value={name} getValue={(e) => setName(e)} />
      <InputGroup text="Idade:" inputName="text-idade" value={idade} getValue={(e) => setIdade(e)} />
      <InputGroup text="Sexo:" inputName="picker-sexo" sexoValue={sexoValue} onValueChange={(value) => setSexoValue(value)} />
      <InputGroup text="Escolaridade:" inputName="picker-escolaridade" escolaridadeValue={escolaridadeValue} onValueChange={(value) => setEscolaridadeValue(value)} />
      <InputGroup text="Limite na conta:" inputName="slider" value={limiteConta} onValueChange={(e) => setLimiteConta(e)} />
      <InputGroup text="Brasileiro" inputName="switch" brasileiro={brasileiro} onValueChange={(e) => setBrasileiro(e)} />
      <Button text="Confirmar" aditionalStyle={styles.btn} action={showValues} />
    </ScrollView>
  );
}
