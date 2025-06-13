import { View, Text } from 'react-native';
import styles from './styles';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.titulo}>Formação acadêmica:{"\n"}</Text>
        Técnico em Desenvolvimento de Sistemas na ETEC e cursando Sistemas para Internet na FATECRL{"\n"}
      </Text>
    </View>
  );
}
