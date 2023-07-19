import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  ClassDetailScreen,
  QuestionScreen,
  SubjectDetailScreen,
  ChapterDetailScreen,
  QuizStartingScreen,
  QuizResultScreen,
} from '../screens'

const Stack = createNativeStackNavigator()

function ClassDetailStack() {
  return (
    <Stack.Navigator
      initialRouteName="QuizResult"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
      />
      <Stack.Screen
        name="SubjectDetail"
        component={SubjectDetailScreen}
      />
      <Stack.Screen
        name="ChapteDetail"
        component={ChapterDetailScreen}
      />
      <Stack.Screen
        name="QuizStarting"
        component={QuizStartingScreen}
      />
      <Stack.Screen
        name="Question"
        component={QuestionScreen}
      />
      <Stack.Screen
        name="QuizResult"
        component={QuizResultScreen}
      />
    </Stack.Navigator>
  )
}

export default ClassDetailStack
