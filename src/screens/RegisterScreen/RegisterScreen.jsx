import React, {useState} from 'react'
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {CommonButton, CommonTextInput} from '../../components/common'
import {SharedHeader} from '../../components/shared'
import styles from './styles'

function RegisterScreen({navigation}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const registerButtonPressed = () => {}
  const backToPreviousScreen = () => {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView edges={['top', 'left', 'right']}>
        <SharedHeader
          title=""
          preset="simple"
          btns={{
            left: {
              iconName: 'chevron-back',
              onPress: backToPreviousScreen,
            },
          }}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create a Mind Snap account</Text>
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

        <CommonButton
          size="default"
          text="Sign Up"
          margin="30 0 0 0"
          onPress={registerButtonPressed}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
export default RegisterScreen
