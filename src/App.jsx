/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React, {useEffect} from 'react'
import {Provider, useSelector} from 'react-redux'
import {
  isInitializingSelector,
  isStudentSignedInSelector,
  listenToStudentAuthState,
} from './AppViewModel'
import {store} from './redux'
import {SignInScreen} from './screens'
import {MainDrawer} from './navigation'

const Stack = createNativeStackNavigator()

function AppStack() {
  const isInitializing = useSelector(isInitializingSelector)
  const isStudentSignedIn = useSelector(isStudentSignedInSelector)

  if (isInitializing) return null

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isStudentSignedIn ? (
        // User isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
            animationTypeForReplace: 'pop',
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen
          name="MainDrawer"
          component={MainDrawer}
        />
      )}
    </Stack.Navigator>
  )
}

export default function App() {
  useEffect(() => {
    const subscriber = store.dispatch(listenToStudentAuthState())
    return subscriber
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  )
}
