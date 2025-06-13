import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tasks from './src/pages/tasks';
import FormularioTarefa from './src/pages/formtask';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefas">
        <Stack.Screen name="Tarefas" component={Tasks} />
        <Stack.Screen name="FormularioTarefa" component={FormularioTarefa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
