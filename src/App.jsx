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
import SigninScreen from './screens/SigninScreen'
import HomeScreen from './screens/HomeScreen'
import CourseDetailScreen from './screens/CourseDetailScreen'
import SearchScreen from './screens/SearchScreen'
function App() {
  return <SearchScreen />
  return <CourseDetailScreen />
  return <HomeScreen />
  return <SignIn />
}

export default App
