import { Text } from 'react-native';
import styles from './styles';

export default function Result({ result }) {
  if (!result) return null;

  return <Text style={styles.result}>{result}</Text>;
}
