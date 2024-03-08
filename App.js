// App.js
import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles/styles';

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={[styles.safeArea, isDarkMode && styles.darkModeBackground]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={isDarkMode ? '#2c3e50' : '#fff'} />
      <View style={styles.header}>
        <Image
          source={require('./assets/3.jpg')} // Substitua pelo caminho correto da sua imagem
          style={styles.restaurantNameBackground}
        />
        <View style={styles.restaurantNameContainer}>
          <View style={[styles.darkModeContainer, isDarkMode && styles.darkModeBackground]}>
            <Text style={[styles.restaurantName, isDarkMode && styles.darkModeText]}>Kyoshi - rm551340</Text>
          </View>
          <View style={styles.separator} />
          <TouchableOpacity onPress={toggleDarkMode} activeOpacity={0.7}>
            <Text style={[styles.darkModeText, { fontSize: 16 }]}>
              Modo {isDarkMode ? 'Claro' : 'Escuro'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={[styles.scrollView, isDarkMode && styles.darkModeBackground]}>
        {pratos.map((prato, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.pratoContainer, isDarkMode && styles.darkModeBackground]}
            activeOpacity={0.8}
          >
            <Image
              source={prato.imagem}
              style={styles.pratoImagem}
            />
            <Text style={[styles.pratoDescricao, isDarkMode && styles.darkModeText]}>
              {prato.descricao}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const pratos = [
  {
    imagem: require('./assets/1.jpg'),
    descricao: 'Descrição do Prato 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imagem: require('./assets/2.jpg'),
    descricao: 'Descrição do Prato 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imagem: require('./assets/4.jpg'),
    descricao: 'Descrição do Prato 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    imagem: require('./assets/5.jpg'),
    descricao: 'Descrição do Prato 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  // Adicione mais pratos conforme necessário
];

export default App;
