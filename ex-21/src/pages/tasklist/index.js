import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskItem from '../../components/taskitem';
import AddButton from '../../components/addbutton';
import styles from './styles';

export default function TaskList({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const saved = await AsyncStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadTasks);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    navigation.navigate('Nova Tarefa', { index, oldTask: tasks[index] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            task={item}
            index={index}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      />
      <AddButton onPress={() => navigation.navigate('Nova Tarefa')} />
    </View>
  );
}

