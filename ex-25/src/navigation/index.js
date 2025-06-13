import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from '../pages/movielist';
import MovieDetail from '../pages/moviedetail';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Filmes" component={MovieList} />
      <Stack.Screen name="Detalhes" component={MovieDetail} />
    </Stack.Navigator>
  );
}
