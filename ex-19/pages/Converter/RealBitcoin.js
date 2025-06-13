import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

export default function RealBitcoin() {
  // ✅ Aqui está certo — useState dentro da função
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const real = parseFloat(value);
    const btc = 0.0000032;
    if (!isNaN(real)) {
      setResult(`₿ ${(real * btc).toFixed(6)}`);
    } else {
      setResult('Digite um valor válido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <TextInput
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <Button title="Converter" onPress={convert} />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}
