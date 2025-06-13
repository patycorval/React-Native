import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function CurrencySelect({ label, selected, onChange }) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Picker
        selectedValue={selected}
        onValueChange={onChange}
        style={styles.picker}
      >
        <Picker.Item label="Real (BRL)" value="BRL" />
        <Picker.Item label="Dólar (USD)" value="USD" />
        <Picker.Item label="Euro (EUR)" value="EUR" />
      </Picker>
    </View>
  );
}
