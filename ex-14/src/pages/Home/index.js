import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import VagaCard from '../../components/VagaCard';

export default function Home() {
  const navigation = useNavigation();

  const [vagas, setVagas] = useState([
    {
      id: 1,
      titulo: 'Desenvolvedor Back-End',
      empresa: 'NovaCode LTDA',
      salario: 'R$ 5.000,00',
      descricao: 'Desenvolvimento de APIs com Node.js.',
      contato: 'estagio@novacode.com.br',
    },
    {
      id: 2,
      titulo: 'UX/UI Designer Júnior',
      empresa: 'Designify Studio',
      salario: 'R$ 3.200,00',
      descricao: 'Criação de protótipos e testes de usabilidade.',
      contato: 'talentos@designify.com',
    },
    {
      id: 3,
      titulo: 'Analista de Dados Pleno',
      empresa: 'DataMind Analytics',
      salario: 'R$ 6.000,00',
      descricao: 'Dashboards com Power BI e SQL.',
      contato: 'vagas@datamind.com',
    },
      {
    id: 4,
    titulo: 'Analista de Dados Pleno',
    empresa: 'DataMind Analytics',
    salario: 'R$ 6.000,00',
    descricao: 'Criação de dashboards e relatórios em Power BI e SQL.',
    contato: 'vagas@datamind.com',
  },
  {
    id: 5,
    titulo: 'Desenvolvedor Front-End',
    empresa: 'TechWave Solutions',
    salario: 'R$ 4.500,00',
    descricao: 'Interfaces responsivas com React e integração com APIs.',
    contato: 'rh@techwave.com.br',
  },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Vagas Disponíveis</Text>
      {vagas.map((vaga) => (
        <VagaCard
          key={vaga.id}
          vaga={vaga}
          onPress={() => navigation.navigate('Detalhes', { vaga })}
        />
      ))}
    </ScrollView>
  );
}
