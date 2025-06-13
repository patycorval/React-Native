import React, { useState } from 'react';
import { View, Alert, Text } from 'react-native'; // 👈 Adiciona Text
import Input from '../../components/input';
import SearchButton from '../../components/searchbutton';
import AddressResult from '../../components/addressresult';
import styles from './styles';

export default function CepSearch() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);

  const handleSearch = async () => {
    if (cep.length !== 8) {
      Alert.alert('Erro', 'Digite um CEP válido com 8 dígitos.');
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        Alert.alert('Erro', 'CEP não encontrado.');
        return;
      }

      setAddress(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o CEP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text> {/* 👈 Título aqui */}
      <Input value={cep} onChangeText={setCep} placeholder="Digite o CEP" />
      <SearchButton onPress={handleSearch} />
      <AddressResult address={address} />
    </View>
  );
}
