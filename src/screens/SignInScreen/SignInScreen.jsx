import React, {useState} from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {dismissError, errorSelector, login} from './SignInScreenViewModel'
import {SharedErrorModal} from '../../components/shared'
import {CommonButton, CommonTextInput} from '../../components/common'
import styles from './styles'

function SignInScreen({navigation}) {
  const dispatch = useDispatch()

  const error = useSelector(errorSelector)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const signInButtonPressed = () => {
    dispatch(login(username, password))
  }
  const closeErrorModal = () => {
    dispatch(dismissError())
  }

  const navigateToRegisterScreen = () => {
    navigation.navigate('Register')
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <Text style={styles.title}>Hi There 👋</Text>
        <Text style={styles.subtitle}>
          Welcome back, sign in to your account
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.tfLabel}>Username</Text>
        <CommonTextInput
          preset="default"
          state={[username, setUsername]}
          placeholder={{text: 'Username'}}
          autoCapitalize="none"
        />
        <Text style={styles.tfLabel}>Password</Text>
        <CommonTextInput
          preset="default"
          state={[password, setPassword]}
          placeholder={{text: 'Password'}}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.signUplabel}>Don&apos;t have an account?</Text>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={navigateToRegisterScreen}>
          <Text style={styles.signUpBtnText}> Sign Up</Text>
        </TouchableOpacity>
      </View>

      <CommonButton
        size="default"
        text="Sign In"
        margin="30 0 0 0"
        onPress={signInButtonPressed}
      />

      <SharedErrorModal
        error={error}
        onClose={closeErrorModal}
      />
    </KeyboardAvoidingView>
  )
}
export default SignInScreen
