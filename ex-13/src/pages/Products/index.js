
import {ScrollView} from 'react-native';
import ProductCard from '../../components/ProductCard';
import styles from './styles';

const products = [
  {
    id: '1',
    title: 'Caneta',
    image: 'https://cdnv2.moovin.com.br/marbig/imagens/produtos/det/caneta-esferografica-1-0mm-gliss-vermelha-img-113922_2811242226464041.jpg',
    price: 'R$ 7,00',
    description: 'Caneta esferográfica com corpo transparente hexagonal. Ponta 1.0. Escreve até 2km. Escrita macia. Disponível nas cores preta, azul, vermelha e verde.',
  },
  {
    id: '2',
    title: 'Lápis',
    image: 'https://images.tcdn.com.br/img/img_prod/847608/lapis_evolution_bic_preto_5979_1_56ddeec24746c809d29baa873d6480fc.jpg',
    price: 'R$ 5,00',
    description: 'EcoLápis: produzido com madeira 100% reflorestada · Madeira macia que garante excelente apontabilidade ',
  },
  {
    id: '3',
    title: 'Borracha',
    image: 'https://acdn-us.mitiendanube.com/stores/001/094/637/products/borracha-branca-vmp1-0398c6be51d8a5e91616734575995058-1024-1024.jpg',
    price: 'R$ 2,00',
    description: 'A Borracha Escolar Branca 40 Média é macia e apaga tudo de maneira eficiente! ',
  },
  {
    id: '4',
    title: 'Caderno',
    image: 'https://cicero.vtexassets.com/arquivos/ids/186907/7899866827561-Caderno-Espiral-Classica-Pautado-17x24-Preta-160-fls.jpg?v=638611571224630000',
    price: 'R$ 59,90',
    description: 'Caderno Brochura costurado de folhas pautadas e capa dura no tamanho 200 x 275mm. Perfeito e simples para o dia a dia na escola ou no escritório.',
  },
];

export default function Products({ navigation }) {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollViewWebFix}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={() => navigation.navigate('ProductDetail', { product })}
        />
      ))}
    </ScrollView>
  );
}