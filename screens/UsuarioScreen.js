import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; // Importando o arquivo de estilos

export default function UsuarioScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticação
    if (nome && senha) {
      // Se nome e senha estiverem preenchidos, navega para a tela Cliente
      navigation.navigate('Cliente');
    } else {
      // Aqui você pode adicionar um alerta para informar o usuário que os campos são obrigatórios
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Login de Usuário" titleStyle={styles.title}/>
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={{ marginBottom: 20, fontSize: 20 }}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={{ width: '50%', marginBottom: 20 }}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry
          style={{ width: '50%', marginBottom: 20 }}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
