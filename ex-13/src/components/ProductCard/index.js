import { Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={require('../../../assets/imagem_azul.png')}
        style={styles.image}
      />
      <Text style={styles.title}>{product.title}</Text>
    </TouchableOpacity>
  );
}