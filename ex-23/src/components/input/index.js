import { TextInput } from 'react-native';
import styles from './styles';

export default function Input({ value, onChangeText, placeholder }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="numeric"
      maxLength={8}
    />
  );
}
