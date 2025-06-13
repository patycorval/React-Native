import { View, Picker } from 'react-native';
import styles from './styles';

export default function CurrencySelect({ selectedValue, onValueChange }) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        <Picker.Item label="Real / BRL" value="BRL" />
        <Picker.Item label="Dólar / USD" value="USD" />
        <Picker.Item label="Euro / EUR" value="EUR" />
        <Picker.Item label="Bitcoin / BTC" value="BTC" />
      </Picker>
    </View>
  );
}
