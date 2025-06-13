
import { View, Text } from 'react-native';
import BotaoCandidatura from '../../components/BotaoCandidatura';
import styles from './styles'
export default function Detalhes({ route }) {
  const { vaga } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.tituloVaga}>{vaga.titulo}</Text>
      <Text style={styles.texto}>Salário: {vaga.salario}</Text>
      <Text style={styles.texto}>Descrição: {vaga.descricao}</Text>
      <Text style={styles.texto}>Contato: {vaga.contato}</Text>
      <BotaoCandidatura titulo={vaga.titulo} />
    </View>
  );
}
