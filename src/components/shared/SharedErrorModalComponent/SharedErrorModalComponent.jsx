import React from 'react'
import {Modal, Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'

function SharedErrorModalComponent(props) {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={Object.keys(props.error).length !== 0}
      onRequestClose={props.onClose}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.textView}>
            <Text style={styles.errorName}>{props.error.name}</Text>
            <Text style={styles.errorCode}>{props.error.code}</Text>
            <View style={styles.errorMessageView}>
              <Text style={styles.errorMessage}>{props.error.message}</Text>
            </View>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[styles.button, styles.firstButton]}
              onPress={props.onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={props.onClose}>
              <Text style={styles.buttonText}>Oke</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SharedErrorModalComponent
