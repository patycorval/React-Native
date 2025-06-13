import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import Input from '../../components/input';
import SearchButton from '../../components/searchbutton';
import ProfileResult from '../../components/profileresult';
import styles from './styles';

export default function DevProfile() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProfile = async () => {
    if (!username) {
      const msg = 'Digite o login do GitHub.';
      Alert.alert('Erro', msg);
      setErrorMessage(msg);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data.message === 'Not Found') {
        const msg = 'Usuário não encontrado no GitHub.';
        Alert.alert('Erro', msg);
        setErrorMessage(msg);
        setProfile(null);
        return;
      }

      setProfile(data);
      setErrorMessage('');
    } catch (error) {
      const msg = 'Não foi possível buscar os dados.';
      Alert.alert('Erro', msg);
      setErrorMessage(msg);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Dev</Text>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {profile?.avatar_url && (
        <Image
          source={{ uri: profile.avatar_url }}
          style={styles.avatar}
        />
      )}

      <Input
        value={username}
        onChangeText={setUsername}
        placeholder="Digite o login git..."
      />

      <SearchButton onPress={fetchProfile} />

      <ProfileResult profile={profile} />
    </View>
  );
}
