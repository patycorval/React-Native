import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ShoppingItem({ item, index, onEdit, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => onEdit(index)} style={styles.button}>
          <Text>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(index)} style={styles.button}>
          <Text>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
