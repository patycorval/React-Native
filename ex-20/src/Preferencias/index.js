import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Switch} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import styles from './styles'

export default function Preferencias(){

  const [dia, setDia] = useState()
  const [pequeno, setPequeno] = useState()
  const [dayDarkMode, setDayDarkMode] = useState(styles.dark)
  const [pequenoStyle, setPequenoStyle] = useState(styles.large)


  // Quando o componente é montado em tela (quando abrimos o App)
  useEffect( () => {
    const recuperarDayPequeno = async () => {
      
      const diaStorage = await AsyncStorage.getItem('day')
      const pequenoStorage = await AsyncStorage.getItem('pequeno')
      //alert(diaStorage)
      setDia(diaStorage)
      setPequeno(pequenoStorage) 

      darkMode(diaStorage)
      pequenoSwitch(pequenoStorage)
      // if(dia)
      //   setDayDarkMode(styles.dark)
      // else
      //   setDayDarkMode(styles.white)
      // if(pequeno)
      //   setPequenoStyle(styles.large)
      // else
      //   setPequenoStyle(styles.small)
         
    };


    recuperarDayPequeno();
  }, []);

  const darkMode = async (valorSwitch) => {
    setDia(valorSwitch)
    await AsyncStorage.setItem('day', dia)
    if(dia)
      setDayDarkMode(styles.dark)
    else
      setDayDarkMode(styles.white)
  }

  const pequenoSwitch = async (valorSwitch) => {
    setPequeno(valorSwitch)
    await AsyncStorage.setItem('pequeno', pequeno)
    if(pequeno)
      setPequenoStyle(styles.large)
    else
      setPequenoStyle(styles.small)
  }

  return(
    <View>
      <Text style={styles.h1}>Frase</Text>

      <View style={styles.header}>
        <Text>Dia</Text> 
        <Switch
          value={dia}
          onValueChange={ (valorSwitch) => darkMode(valorSwitch) }
        />
        <Text>Pequeno</Text> 
        <Switch 
          value={pequeno}
          onValueChange={ (valorSwitch) => pequenoSwitch(valorSwitch) }  
        />
      </View>

      <View style={[dayDarkMode, styles.container, styles.border]}>
        <Text style={[dayDarkMode, pequenoStyle]}>
          "Agua mole em pedra dura tanto fura ate que bate"
        </Text>
      </View>

    </View>
  )

}