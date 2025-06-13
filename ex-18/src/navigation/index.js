import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RealDollar from '../pages/converter/realdolar';
import RealEuro from '../pages/converter/realeuro';
import RealBitcoin from '../pages/converter/realbitcoin';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.bar,
      }}
    >
      <Tab.Screen name="Dólar" component={RealDollar} />
      <Tab.Screen name="Euro" component={RealEuro} />
      <Tab.Screen name="Bitcoin" component={RealBitcoin} />
    </Tab.Navigator>
  );
}
