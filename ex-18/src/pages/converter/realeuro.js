import { View, Text } from 'react-native';
import Input from '../../components/input/index';
import ConvertButton from '../../components/convertbutton/index';
import Result from '../../components/result/index';
import styles from './styles';
import React, { useState } from 'react';

export default function RealEuro() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const real = parseFloat(value);
    const rate = 0.18;
    if (!isNaN(real)) {
      setResult(`€ ${(real * rate).toFixed(2)}`);
    } else {
      setResult('Digite um valor válido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Real para Euro</Text>
      <Input value={value} onChangeText={setValue} />
      <ConvertButton onPress={convert} />
      <Result result={result} />
    </View>
  );
}
