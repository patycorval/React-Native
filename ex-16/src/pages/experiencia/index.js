import { View, Text } from 'react-native';
import styles from './styles';

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.titulo}>Experiência:{"\n"}</Text>
        Técnico em hardware e suporte ao usuário.{"\n"}
      </Text>
    </View>
  );
}
