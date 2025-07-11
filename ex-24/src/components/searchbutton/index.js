import { View, Button } from 'react-native';
import styles from './styles';

export default function SearchButton({ onPress }) {
  return (
    <View style={styles.button}>
      <Button title="Buscar" onPress={onPress} />
    </View>
  );
}
