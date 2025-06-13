import { View, Text } from 'react-native';
import ActionButton from '../actionbutton';
import styles from './styles';

export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.desc}>{task.description}</Text>
      <View style={styles.actions}>
        <ActionButton title="Editar" color="#1f4081" onPress={() => onEdit(task)} />
        <ActionButton title="Excluir" color="#d9534f" onPress={() => onDelete(task.id)} />
      </View>
    </View>
  );
}
