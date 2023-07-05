import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
// import { Screen1, Screen2 } from '../screens';
const Stack = createStackNavigator()
function MainNavigator() {
  return (
    <Stack.Navigator>
      {/*
        <Stack.Screen name='Screen1' component='{Screen1}' />
        <Stack.Screen name='Screen2' component='{Screen2}' />
        */}
    </Stack.Navigator>
  )
}

export default MainNavigator
