import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Fridman, Alessi)</Text>
      </View>

      <Image
        source={require('./assets/Boca.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.form}>
        <TextInput
          placeholder="example@gmail.com"
          style={styles.input}
          placeholderTextColor= 'gray'
        />

        <TextInput
          placeholder="********"
          secureTextEntry
          style={styles.input}
          placeholderTextColor= 'gray'
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#002776',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    width: '80%',
    height: 120,
    alignSelf: 'center',
    marginVertical: 20,
  },
  form: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#FDB927',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#002776',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FDB927',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    color: '#333',
    fontSize: 14,
    marginBottom: 10,
  },
});
