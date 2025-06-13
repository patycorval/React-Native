import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

export default function ConvertButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Converter</Text>
    </TouchableOpacity>
  );
}
