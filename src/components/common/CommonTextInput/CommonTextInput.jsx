import React, {useState, useEffect} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import CommonToggleButton from '../CommonToggleButton'
import styles, {presets} from './styles'

function CommonTextInput(props) {
  const [isFieldSecured, setFieldSecurity] = useState(false)

  const {
    preset,
    state,
    leftIcon,
    placeholder,
    editable = true,
    autoCapitalize = 'sentences',
    secureTextEntry = false,
    underlineColorAndroid = 'transparent',
    clearButtonMode = 'while-editing',
    clearTextOnFocus = false,
  } = props
  let {containerStyle, textInputStyle} = props
  let leftIconStyle = leftIcon?.style

  const defaultStyles = {
    container: presets[preset]?.container ?? styles.container,
    leftIcon: styles.leftIcon,
    textInput: styles.textInput,
  }

  containerStyle = StyleSheet.compose(containerStyle, defaultStyles.container)
  leftIconStyle = StyleSheet.compose(leftIconStyle, defaultStyles.leftIcon)
  textInputStyle = StyleSheet.compose(textInputStyle, defaultStyles.textInput)

  useEffect(() => {
    if (secureTextEntry) setFieldSecurity(true)
  }, [secureTextEntry])

  return (
    <View style={containerStyle}>
      {leftIcon?.name ? (
        <Ionicons
          style={leftIconStyle}
          name={leftIcon.name}
          color={styles.colors[leftIcon.color]}
        />
      ) : null}
      <TextInput
        style={textInputStyle}
        editable={editable}
        text={state[0]}
        onChangeText={state[1]}
        placeholder={placeholder?.text}
        placeholderTextColor={
          styles.colors[placeholder?.color ?? 'greyscale.400']
        }
        autoCapitalize={autoCapitalize}
        secureTextEntry={isFieldSecured}
        underlineColorAndroid={underlineColorAndroid}
        clearButtonMode={clearButtonMode}
        clearTextOnFocus={clearTextOnFocus}
      />
      {secureTextEntry ? (
        <CommonToggleButton
          iconNames={['eye-off-outline', 'eye-outline']}
          initialState={false}
          onToggle={setFieldSecurity}
        />
      ) : null}
    </View>
  )
}

export default CommonTextInput
