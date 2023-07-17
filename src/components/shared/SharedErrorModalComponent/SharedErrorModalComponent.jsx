import React from 'react'
import {Modal, Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'

function SharedErrorModalComponent(props) {
  const {error, onClose} = {...props}
  const {name: errorName, code: errorCode, message: errorMessage} = error || {}
  return (
    <Modal
      transparent
      animationType="fade"
      visible={error != null}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.errorName}>{errorName}</Text>
            <Text style={styles.errorCode}>{errorCode}</Text>
            <View style={styles.errorMessageView}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={onClose}>
              <Text style={styles.buttonText}>Oke</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SharedErrorModalComponent
