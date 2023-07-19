import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  ClassDetailScreen,
  QuestionScreen,
  SubjectDetailScreen,
  ChapterDetailScreen,
} from '../screens'

const Stack = createNativeStackNavigator()

function ClassDetailStack() {
  return (
    <Stack.Navigator
      initialRouteName="ChapteDetail"
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
        name="Question"
        component={QuestionScreen}
      />
    </Stack.Navigator>
  )
}

export default ClassDetailStack
