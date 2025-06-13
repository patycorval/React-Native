import { TextInput } from 'react-native';
import styles from './styles';

export default function Input({ value, onChangeText }) {
  return (
    <TextInput
      placeholder="Digite o valor"
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}
