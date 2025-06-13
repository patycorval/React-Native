import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function MovieDetail({ route }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.nome} - Sinopse</Text>
      <Image source={{ uri: movie.foto }} style={styles.image} />
      <Text style={styles.description}>{movie.sinopse}</Text>
    </View>
  );
}
