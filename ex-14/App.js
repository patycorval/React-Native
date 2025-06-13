
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Vagas de TI' }} />
        <Stack.Screen name="Detalhes" component={Detalhes} options={{ title: 'Detalhes da Vaga' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}