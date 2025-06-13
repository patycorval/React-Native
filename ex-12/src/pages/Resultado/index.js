import { View, Text } from 'react-native';
import styles from './styles';

export default function Resultado({ route }) {
  const { name, idade, sexoValue, escolaridadeValue, limiteConta, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Nome: {name}</Text>
        <Text style={styles.label}>Idade: {idade}</Text>
        <Text style={styles.label}>Sexo: {sexoValue}</Text>
        <Text style={styles.label}>Escolaridade: {escolaridadeValue}</Text>
        <Text style={styles.label}>Limite da Conta: R$ {limiteConta.toFixed(2)}</Text>
        <Text style={styles.label}>Brasileiro: {brasileiro ? 'Nativo' : 'Gringou'}</Text>
      </View>
    </View>
  );
}
