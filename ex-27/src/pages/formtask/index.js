import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button } from 'react-native';
import TaskInput from '../../components/taskinput';
import styles from './styles';

const API = 'https://tarefa-backend.onrender.com/tasks';

export default function FormularioTarefa({ navigation, route }) {
  const task = route.params?.task;

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  useEffect(() => {
    navigation.setOptions({
      title: task ? 'Editar Tarefa' : 'Nova Tarefa',
    });
  }, [navigation, task]);

  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert('Erro', 'Título é obrigatório');
      return;
    }

    const body = { title, description };

    try {
      if (task) {
        await fetch(`${API}/${task.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      } else {
        await fetch(API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      }

      navigation.goBack();
    } catch {
      Alert.alert('Erro', 'Falha ao salvar tarefa');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {task ? 'Editar Tarefa' : 'Nova Tarefa'}
      </Text>
      <TaskInput value={title} onChangeText={setTitle} placeholder="Título" />
      <TaskInput
        value={description}
        onChangeText={setDescription}
        placeholder="Descrição"
      />
      <Button title="Salvar" onPress={handleSave} color="#1f4081" />
    </View>
  );
}
