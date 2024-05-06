import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Provider as PaperProvider, IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';


export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PaperProvider>
      <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/ec/61/64/ec6164f7900bf91762e58aa0efba72f7.jpg' }} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <IconButton
              icon={() => <FontAwesome name="heart" size={30} color="black" />}
            />
          </View>
          <TextInput
            label="Usuario"
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            label="Contraseña"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <Button  onPress={() => navigation.navigate('Home')} mode="contained" style={styles.button}>
            Iniciar sesión
          </Button>
        </View>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  button: {
    marginTop: 10,
    backgroundColor: 'black',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});


