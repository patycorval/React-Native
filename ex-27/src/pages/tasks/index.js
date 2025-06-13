import React, { useState, useEffect } from 'react';
import {Text, FlatList, Alert, KeyboardAvoidingView, Platform, RefreshControl, TouchableOpacity,} from 'react-native';

import TaskItem from '../../components/taskitem';
import styles from './styles';

const API = 'https://tarefa-backend.onrender.com/tasks';

export default function Tasks({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadTasks);
    return unsubscribe;
  }, [navigation]);

  const loadTasks = async () => {
    try {
      setRefreshing(true);
      const res = await fetch(API);
      const data = await res.json();
      setTasks(data);
    } catch {
      Alert.alert('Erro', 'Não foi possível carregar tarefas');
    } finally {
      setRefreshing(false);
    }
  };

  const handleDelete = async id => {
    try {
      await fetch(`${API}/${id}`, { method: 'DELETE' });
      loadTasks();
    } catch {
      Alert.alert('Erro', 'Falha ao excluir');
    }
  };

  const handleEdit = task => {
    navigation.navigate('FormularioTarefa', { task });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Tarefas</Text>

      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadTasks} />
        }
        renderItem={({ item }) => (
          <TaskItem task={item} onEdit={handleEdit} onDelete={handleDelete} />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Botão flutuante de adicionar */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('FormularioTarefa')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
