/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createDrawerNavigator} from '@react-navigation/drawer'
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
import {ClassDetailScreen, HomeScreen, SignInScreen} from './screens'

const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        name="ClassDetail"
        component={ClassDetailScreen}
      />
    </Drawer.Navigator>
  )
}

function MainStack() {
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
          name="Drawer"
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
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}
