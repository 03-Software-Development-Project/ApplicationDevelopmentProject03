/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import QuestionScreen from './screen/question/questionScreen'
import Chapter from './screens/chapter/chapterScreen'
import JoinClass from './screens/class/classScreen'
import Loading from './screens/loadingScreen/loadingScreen'
import Subject from './screens/subject/subjectScreen'

const Stack = createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Class">
        <Stack.Screen
          name="Class"
          component={JoinClass}
        />
        <Stack.Screen
          name="Subject"
          component={Subject}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
        />
        <Stack.Screen
          name="Chapter"
          component={Chapter}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
