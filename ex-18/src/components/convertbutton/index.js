import { View, Button } from 'react-native';
import styles from './styles';

export default function ConvertButton({ onPress }) {
  return (
    <View style={styles.button}>
      <Button title="Converter" onPress={onPress} />
    </View>
  );
}
