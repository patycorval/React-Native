import { TextInput, View } from 'react-native';
import styles from './styles';

export default function Input({ value, onChangeText, placeholder, keyboardType }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
}
