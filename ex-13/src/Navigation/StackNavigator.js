import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} options={{ title: 'Anúncios' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Detalhes do Produto'}} />
    </Stack.Navigator>
  );
}