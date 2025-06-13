import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingList from '../pages/shoppingList';
import NewItem from '../pages/newItem';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista de Compras" component={ShoppingList} />
      <Stack.Screen name="Nova Mercadoria" component={NewItem} />
    </Stack.Navigator>
  );
}
