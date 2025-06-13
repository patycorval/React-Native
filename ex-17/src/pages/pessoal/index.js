import { View, Text, Image } from 'react-native';
import styles from './styles';
import myImage from '../../../assets/images/maui.jpeg'; 

export default function Pessoal() {
  return (
    <View style={styles.container}>
      <Image source={myImage} style={styles.avatar} />
      <Text style={styles.text}>
        <Text style={styles.titulo}>Dados pessoais:{"\n"}</Text>
        Nome: Gabriel Tobias Machado{"\n"}
        Tel: (13)98177-0374
      </Text>
    </View>
  );
}
