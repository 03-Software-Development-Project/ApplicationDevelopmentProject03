import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {logOut} from '../../../screens/MainDrawerScreen/MainDrawerScreenViewModel'
import styles from './styles'

function SharedDebugNavBar({navigation}) {
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('HomeStack')
        }}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ClassDetailStack')
        }}>
        <Text style={styles.buttonText}>Your class</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(logOut())}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SharedDebugNavBar
