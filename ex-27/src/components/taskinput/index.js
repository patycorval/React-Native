import { View, TextInput } from 'react-native';
import styles from './styles';

export default function TaskInput({ value, onChangeText, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
}
