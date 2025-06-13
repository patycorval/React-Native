import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function ActionButton({ title, onPress, color }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
