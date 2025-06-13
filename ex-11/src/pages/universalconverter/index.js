import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/input';
import CurrencySelect from '../../components/currencyselect';
import ConvertButton from '../../components/convertbutton';
import Result from '../../components/result';
import styles from './styles';

const rates = {
  USD: { BRL: 5, EUR: 0.92 },
  BRL: { USD: 0.20, EUR: 0.18 },
  EUR: { BRL: 5.5, USD: 1.09 },
};

export default function UniversalConverter() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('BRL');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState(null);

  const convert = () => {
    const realValue = parseFloat(value);
    if (isNaN(realValue)) return setResult('Valor inválido');

    if (from === to) return setResult(`${realValue.toFixed(2)} ${to}`);

    const rate = rates[from][to];
    const converted = realValue * rate;
    setResult(`${converted.toFixed(2)} ${to}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas{"\n"}Dólar, Real e Euro</Text>
      <Input value={value} onChangeText={setValue} />
      <CurrencySelect label="De:" selected={from} onChange={setFrom} />
      <CurrencySelect label="Para:" selected={to} onChange={setTo} />
      <ConvertButton onPress={convert} />
      <Result result={result} />
    </View>
  );
}
