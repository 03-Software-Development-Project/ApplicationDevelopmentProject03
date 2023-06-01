import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { signUpUser } from '../components/function/function';


const Register = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleSignUp = () => {
    signUpUser(email, password)     
  }

  return (
    <View style={style.container}>
      <TextInput style={style.textInput} placeholder='Email' value={email} onChangeText={text => setEmail(text)}></TextInput>
      <TextInput style={style.textInput} placeholder='Password' value={password} onChangeText={text => setPassword(text)}></TextInput>
      <TouchableOpacity style={[style.button, style.textInput]} onPress={handleSignUp}>
        <Text style={style.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  textInput: {
    borderWidth: 1,
    marginHorizontal: 20,
    marginTop: 20
  },

  button: {
    backgroundColor: "#5fd5f6",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    fontWeight: "700",
    fontSize: 20
  }

});

export default Register;