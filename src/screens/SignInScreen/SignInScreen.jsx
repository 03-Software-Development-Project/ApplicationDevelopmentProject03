import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {color} from '../../constants'
import styles from './styles'

function SignInScreen({navigator}) {
  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            // source={require('../assets/logo_horizontal.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>Hi There 👋</Text>
          <Text style={styles.subtitle}>
            Welcome back, sign in to your account
          </Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor={color['greyscale.400']}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={color['greyscale.400']}
            />
          </View>
          <Text
            style={{
              ...styles.label,
              paddingVertical: 12,
              color: color['primary.700'],
            }}>
            Forgot Password?
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
export default SignInScreen
