import { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function NewTask({ navigation, route }) {
  const [task, setTask] = useState('');
  const index = route.params?.index;

  useEffect(() => {
    if (route.params?.oldTask) {
      setTask(route.params.oldTask);
    }
  }, [route.params]);

  const saveTask = async () => {
    if (task.trim().length === 0) return;

    const existing = await AsyncStorage.getItem('tasks');
    const taskList = existing ? JSON.parse(existing) : [];

    if (index !== undefined) {
      taskList[index] = task;
    } else {
      taskList.push(task);
    }

    await AsyncStorage.setItem('tasks', JSON.stringify(taskList));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome da Tarefa"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <View style={styles.buttons}>
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
        <Button title="Salvar" onPress={saveTask} />
      </View>
    </View>
  );
}
