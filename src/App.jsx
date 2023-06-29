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
import Questions from './screens/Questions/'
import QuizFailed from './screens/QuizFailed/'
import QuizCompleted from './screens/QuizCompleted'
import CountingQuiz from './screens/CountingQuiz/CountingQuiz.jsx'
import SigninScreen from './screens/SigninScreen'
import HomeScreen from './screens/HomeScreen'
import CourseDetailScreen from './screens/CourseDetailScreen'
import SearchScreen from './screens/SearchScreen'

function App() {
  // return <Questions />
  // return <QuizFailed />
  return <QuizCompleted />
  return <CountingQuiz />
  return <SearchScreen />
  return <CourseDetailScreen />
  return <HomeScreen />
  return <SigninScreen />
}

export default App
