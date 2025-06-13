import { Button, View, Alert } from 'react-native';
import styles from './styles';

export default function BotaoCandidatura({ titulo }) {
  const candidatar = () => {
    Alert.alert('Candidatura enviada!', `Você se candidatou à vaga de ${titulo}.`);
  };

  return (
    <View style={styles.container}>
      <Button title="Candidatar-se" onPress={candidatar} color="#1e3a8a" />
    </View>
  );
}
