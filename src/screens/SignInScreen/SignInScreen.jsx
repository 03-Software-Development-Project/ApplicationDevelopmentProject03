import React, {useState} from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {SharedErrorModalComponent} from '../../components/shared'
import {color} from '../../constants'
import {dismissError, errorSelector, login} from './SignInScreenViewModel'
import styles from './styles'

function SignInScreen({navigation}) {
  const dispatch = useDispatch()

  const error = useSelector(errorSelector)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signInButtonPressed = () => {
    dispatch(login(username, password))
  }

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
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={color['greyscale.400']}
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
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
          <TouchableOpacity
            style={styles.button}
            onPress={signInButtonPressed}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SharedErrorModalComponent
        error={error}
        onClose={() => {
          dispatch(dismissError())
        }}
      />
    </KeyboardAvoidingView>
  )
}
export default SignInScreen
