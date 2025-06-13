import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Pessoal from './src/pages/pessoal';
import Formacao from './src/pages/formacao';
import Experiencia from './src/pages/experiencia';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pessoal" component={Pessoal} />
        <Tab.Screen name="Formação" component={Formacao} />
        <Tab.Screen name="Experiência" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}