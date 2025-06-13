import { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export default function NewItem({ navigation, route }) {
  const [item, setItem] = useState('');
  const index = route.params?.index;

  useEffect(() => {
    if (route.params?.oldItem) {
      setItem(route.params.oldItem);
    }
  }, [route.params]);

  const saveItem = async () => {
    if (item.trim().length === 0) return;

    const existing = await AsyncStorage.getItem('shoppingItems');
    const itemList = existing ? JSON.parse(existing) : [];

    if (index !== undefined) {
      itemList[index] = item;
    } else {
      itemList.push(item);
    }

    await AsyncStorage.setItem('shoppingItems', JSON.stringify(itemList));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mercadoria"
        value={item} 
        onChangeText={setItem}
        style={styles.input}
      />
      <View style={styles.buttons}>
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
        <Button title="Salvar" onPress={saveItem} /> 
      </View>
    </View>
  );
}

