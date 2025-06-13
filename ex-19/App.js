import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/tabnavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
