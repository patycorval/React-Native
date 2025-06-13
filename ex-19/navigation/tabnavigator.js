import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RealDollar from '../pages/Converter/RealDollar';
import RealEuro from '../pages/Converter/RealEuro';
import RealBitcoin from '../pages/Converter/RealBitcoin';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dólar" component={RealDollar} />
      <Tab.Screen name="Euro" component={RealEuro} />
      <Tab.Screen name="Bitcoin" component={RealBitcoin} />
    </Tab.Navigator>
  );
}
