import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function MovieCard({ title, image, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.readMore}>Leia mais →</Text>
      </TouchableOpacity>
    </View>
  );
}
