import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

export default function RealDollar() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null);

  const convert = () => {
    const real = parseFloat(value);
    const dollar = 0.20;
    if (!isNaN(real)) {
      setResult(`US$ ${(real * dollar).toFixed(2)}`);
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
