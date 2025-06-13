import { View, Text } from 'react-native';
import styles from './styles';

export default function Result({ value, from, to }) {
  if (value === null || value === undefined) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.small}>{from} → {to}</Text>
    </View>
  );
}
