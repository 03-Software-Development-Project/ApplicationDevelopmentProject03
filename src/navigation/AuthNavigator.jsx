import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import {SignInScreen} from '../screens'

const Stack = createStackNavigator()
function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
