import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {ClassDetailScreen} from '../screens'

const Stack = createNativeStackNavigator()

function ClassDetailStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default ClassDetailStack
