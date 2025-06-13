import { View, Text } from 'react-native';

export default function ProfileResult({ profile }) {
  if (!profile) return null;

  return (
    <View>
      <Text>Id: {profile.id}</Text>
      <Text>Nome: {profile.name || 'Não informado'}</Text>
      <Text>Repositórios: {profile.public_repos}</Text>
      <Text>Criado em: {new Date(profile.created_at).toLocaleDateString()}</Text>
      <Text>Seguidores: {profile.followers}</Text>
      <Text>Seguindo: {profile.following}</Text>
    </View>
  );
}
