import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShoppingItem from '../../components/shoppingItem';
import AddButton from '../../components/addButton';
import styles from './styles';

export default function ShoppingList({ navigation }) {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    const saved = await AsyncStorage.getItem('shoppingItems');
    if (saved) setItems(JSON.parse(saved));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadItems);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    await AsyncStorage.setItem('shoppingItems', JSON.stringify(updated));
    setItems(updated);
  };

  const handleEdit = (index) => {
    navigation.navigate('Nova Mercadoria', { index, oldItem: items[index] });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ShoppingItem
            item={item}
            index={index}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      />
      <AddButton onPress={() => navigation.navigate('Nova Mercadoria')} />
    </View>
  );
}

