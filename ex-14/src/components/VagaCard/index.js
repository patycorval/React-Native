import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function VagaCard({ vaga, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{vaga.titulo}</Text>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.textoBotao}>Saiba mais</Text>
      </TouchableOpacity>
    </View>
  );
}
