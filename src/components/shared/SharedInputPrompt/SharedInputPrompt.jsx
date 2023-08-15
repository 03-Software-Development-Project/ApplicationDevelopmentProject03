import React, {useState, useEffect} from 'react'
import {Modal, View, Text, TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {CommonButton, CommonTextInput} from '../../common'
import styles from './styles'

function SharedInputPrompt(props) {
  const {
    visible = false,
    title = 'Input prompt',
    subtitle = 'Input your data',
    textInput,
    submitBtn,
    cancelBtn,
  } = props

  const [input, setInput] = useState('')
  const [errorLabel, setErrorLabel] = useState('')

  const onClose = () => {
    setErrorLabel('')
    cancelBtn?.onPress?.()
  }

  const onSubmit = async () => {
    try {
      await submitBtn?.onPress?.(input)
    } catch (err) {
      setErrorLabel(err.message)
    }
  }

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={onClose}>
              <Ionicons
                style={styles.cancelBtnIcon}
                name="close-circle-outline"
              />
            </TouchableOpacity>
            <Text
              numberOfLines={1}
              style={styles.title}>
              {title}
            </Text>
            <Text
              numberOfLines={1}
              style={styles.subtitle}>
              {subtitle}
            </Text>
          </View>

          <CommonTextInput
            editable={textInput?.editable}
            preset="medium"
            state={[input, setInput]}
            leftIcon={{
              name: textInput?.leftIcon?.name,
              color: textInput?.leftIcon?.color,
            }}
            placeholder={{
              text: textInput?.placeholder?.text,
              color: textInput?.placeholder?.color,
            }}
            autoCapitalize="characters"
          />
          {errorLabel ? (
            <Text
              numberOfLines={1}
              style={styles.errorLabel}>
              {errorLabel}
            </Text>
          ) : null}
          <CommonButton
            size="medium"
            text={submitBtn?.text || 'Submit'}
            textColor="greyscale.50"
            bgColor="primary.500"
            onPress={onSubmit}
          />
          <CommonButton
            size="medium"
            text={cancelBtn?.text || 'Cancel'}
            textColor="greyscale.500"
            bgColor="transparent"
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  )
}

export default SharedInputPrompt
