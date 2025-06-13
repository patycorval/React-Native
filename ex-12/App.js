import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Abertura from './src/pages/Abertura/index';
import Resultado from './src/pages/Resultado/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Abertura">
        <Stack.Screen
          name="Abertura"
          component={Abertura}
          options={{ title: 'Abertura de Conta' }}
        />
        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={{ title: 'Dados Informados' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

