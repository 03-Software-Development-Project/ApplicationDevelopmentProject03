/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {StyleSheet, View, Text, Button} from 'react-native'
import SignIn from './screen/signIn/signIn'

function App() {
  return <SignIn />
}

export default App
