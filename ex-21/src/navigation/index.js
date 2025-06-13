import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskList from '../pages/tasklist';
import NewTask from '../pages/newtask';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tarefas" component={TaskList} />
      <Stack.Screen name="Nova Tarefa" component={NewTask} />
    </Stack.Navigator>
  );
}
