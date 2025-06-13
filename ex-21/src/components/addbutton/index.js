import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}
