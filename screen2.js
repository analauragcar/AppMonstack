import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logo}>
        <Image
      source={require("./novalogo.png")}
      style={styles.logo}
      />
        </View>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OU</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar com o Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  
    input: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#00366B',
    borderRadius: 15,
    width: 250,
    
    
  },
  button: {
    width: 250,
    padding: 11,
    backgroundColor: '#003366',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
  },
});

export default Login;
