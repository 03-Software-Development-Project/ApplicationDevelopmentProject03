import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  ClassDetailScreen,
  QuestionScreen,
  SubjectDetailScreen,
} from '../screens'

const Stack = createNativeStackNavigator()

function ClassDetailStack() {
  return (
    <Stack.Navigator
      initialRouteName="Question"
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
        name="Question"
        component={QuestionScreen}
      />
    </Stack.Navigator>
  )
}

export default ClassDetailStack
