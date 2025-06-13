import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MovieCard from '../../components/moviecard';
import styles from './styles';

export default function MovieList({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes');
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      alert('Erro ao carregar os filmes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loading} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <MovieCard
            title={item.nome}
            image={item.foto}
            onPress={() => navigation.navigate('Detalhes', { movie: item })}
          />
        )}
      />
    </View>
  );
}
