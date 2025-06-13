import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Switch} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Preferencias from './src/Preferencias/index'


export default function App(){

  

    return(
      <View style={styles.container}>

        <Preferencias />
      
      </View>    
    )
  }




const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 5,
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    borderRadius: 10,
    minHeight: '70vh',
  },
});
