import { View, Text } from 'react-native';
import styles from './styles';

export default function AddressResult({ address }) {
  if (!address) return null;

  return (
    <View style={styles.result}>
      <Text>CEP: {address.cep}</Text>
      <Text>Logradouro: {address.logradouro}</Text>
      <Text>Bairro: {address.bairro}</Text>
      <Text>Cidade: {address.localidade}</Text>
      <Text>Estado: {address.uf}</Text>
    </View>
  );
}
