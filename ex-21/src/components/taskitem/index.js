import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function TaskItem({ task, index, onEdit, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{task}</Text>
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
