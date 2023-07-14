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
import {HomeScreen, SignInScreen} from './screens'

const Stack = createNativeStackNavigator()

function MainStack() {
  const isInitializing = useSelector(isInitializingSelector)
  const isStudentSignedIn = useSelector(isStudentSignedInSelector)

  if (isInitializing) return null

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isStudentSignedIn ? (
        // User isn't signed in
        <Stack.Group>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign in',
              animationTypeForReplace: 'pop',
            }}
          />
        </Stack.Group>
      ) : (
        // User is signed in
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Group>
      )}

      <Stack.Group navigationKey={isStudentSignedIn ? 'user' : 'guest'}>
        {/* <Stack.Screen
          name="Help"
          component={HelpScreen}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
        /> */}
      </Stack.Group>
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
