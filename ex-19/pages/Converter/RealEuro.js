import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

export default function RealEuro() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(null); 

  const convert = () => {
    const real = parseFloat(value);
    const euro = 0.18;
    if (!isNaN(real)) {
      setResult(`€ ${(real * euro).toFixed(2)}`);
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
