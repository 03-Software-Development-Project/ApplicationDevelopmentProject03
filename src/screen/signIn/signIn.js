import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'

import {typography, color} from '../../../constants'
// Const to receive styles externally
const titleStyle = typography['heading.h4']
const label = typography['body.medium.semibold']
const subtitleStyle = typography['body.large.regular']
const textbutton = typography['body.large.bold']

const signIn = () => {
  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logotype}
            // source={require('../assets/logo_horizontal.png')}
            resizeMode="contain"
          />
          <Text style={[titleStyle, {color: color['Greyscale.900']}]}>Hi There 👋</Text>
          <Text style={[subtitleStyle, {color: color['Greyscale.500']}]}>
            Welcome back, sign in to your account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={[label, {marginHorizontal: 8, paddingVertical: 4}]}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor={color['Greyscale.400']}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={[label, {marginHorizontal: 8, paddingVertical: 4}]}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={color['Greyscale.400']}
            />
          </View>
          <Text
            style={[
              {marginHorizontal: 8},
              {paddingVertical: 12},
              label,
              {color: color['Primary.700']},
            ]}>
            Forgot Password?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={[textbutton, {color: color['Greyscale.50']}, {fontWeight: 'bold'}]}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 0,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: 56,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: color['Greyscale.100'],
    borderWidth: 1,
    borderColor: color['Greyscale.300'],
  },
  formContainer: {
    marginTop: 8,
  },
  header: {
    color: color['primary.500'],
  },
  button: {
    height: 56,
    width: '100%',
    backgroundColor: color['Greyscale.900'],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 24,
  },
  logotype: {
    width: 100,
    height: 60,
  },
})

export default signIn
