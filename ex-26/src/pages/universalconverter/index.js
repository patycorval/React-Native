import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../../components/input';
import CurrencySelect from '../../components/currencyselect';
import ConvertButton from '../../components/convertbutton';
import Result from '../../components/result';
import styles from './styles';

export default function UniversalConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('BRL');
  const [to, setTo] = useState('USD');
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    if (!amount || isNaN(amount)) {
      Alert.alert('Erro', 'Digite um valor numérico válido.');
      return;
    }
    if (from === to) {
      Alert.alert('Erro', 'Selecione moedas diferentes.');
      return;
    }

    try {
      const pair = `${to}-${from}`;
      const url = `https://economia.awesomeapi.com.br/json/last/${pair}`;
      const response = await fetch(url);
      const data = await response.json();
      const key = Object.keys(data)[0];
      const rate = parseFloat(data[key].ask);
      const converted = (parseFloat(amount) * rate).toFixed(2);
      setResult(converted);
    } catch (err) {
      Alert.alert('Erro', 'Falha ao converter.');
      setResult(null);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Conversor de Moedas</Text>
      <Input
        value={amount}
        onChangeText={setAmount}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <Text style={styles.label}>De:</Text>
      <CurrencySelect selectedValue={from} onValueChange={setFrom} />
      <Text style={styles.label}>Para:</Text>
      <CurrencySelect selectedValue={to} onValueChange={setTo} />
      <ConvertButton onPress={handleConvert} />
      <Result value={result} from={from} to={to} />
    </KeyboardAvoidingView>
  );
}
